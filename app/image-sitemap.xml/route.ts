import { ghostAPI, transformGhostImageUrls } from "@/lib/ghost";

// Revalidate every 1 hour
export const revalidate = 3600;

/**
 * Extract images from HTML content with their metadata
 */
function extractImagesFromHtml(
  html: string,
  postTitle: string,
  postSlug: string
): Array<{ loc: string; title?: string; caption?: string }> {
  const images: Array<{ loc: string; title?: string; caption?: string }> = [];

  // Transform Ghost URLs first
  const transformedHtml = transformGhostImageUrls(html);

  // Match figure elements that may contain images with figcaptions
  const figurePattern = /<figure[^>]*>(.*?)<\/figure>/gs;
  const figureMatches = transformedHtml.matchAll(figurePattern);

  for (const figureMatch of figureMatches) {
    const figureContent = figureMatch[1];

    // Extract image src
    const imgMatch = figureContent.match(/<img[^>]+src=["']([^"']+)["']/);
    if (!imgMatch) continue;

    let imgSrc = imgMatch[1];

    // Extract alt text (can be used as title)
    const altMatch = figureContent.match(/<img[^>]+alt=["']([^"']+)["']/);
    const altText = altMatch ? altMatch[1] : undefined;

    // Extract figcaption
    const captionMatch = figureContent.match(/<figcaption[^>]*>(.*?)<\/figcaption>/s);
    const caption = captionMatch
      ? captionMatch[1].replace(/<[^>]+>/g, "").trim()
      : undefined;

    // Convert relative URLs to absolute
    if (imgSrc.startsWith("/")) {
      imgSrc = `https://fystack.io${imgSrc}`;
    }

    // Escape XML special characters
    const escapeXml = (str: string) =>
      str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");

    images.push({
      loc: imgSrc,
      title: escapeXml(altText || caption || postTitle),
      caption: caption ? escapeXml(caption) : undefined,
    });
  }

  // Also catch standalone images (not in figures)
  const standaloneImgPattern = /<img(?![^>]*<\/figure>)[^>]+src=["']([^"']+)["'][^>]*>/g;
  const standaloneMatches = transformedHtml.matchAll(standaloneImgPattern);

  for (const match of standaloneMatches) {
    let imgSrc = match[1];
    const altMatch = match[0].match(/alt=["']([^"']+)["']/);
    const altText = altMatch ? altMatch[1] : undefined;

    // Convert relative URLs to absolute
    if (imgSrc.startsWith("/")) {
      imgSrc = `https://fystack.io${imgSrc}`;
    }

    // Check if we already added this image from a figure
    if (!images.some((img) => img.loc === imgSrc)) {
      const escapeXml = (str: string) =>
        str
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&apos;");

      images.push({
        loc: imgSrc,
        title: altText ? escapeXml(altText) : escapeXml(postTitle),
      });
    }
  }

  return images;
}

export async function GET() {
  try {
    // Get all blog posts
    const posts = await ghostAPI.getPosts({
      limit: 1000,
      include: ["tags", "authors"],
      order: "published_at DESC",
    });

    // Build XML sitemap with image extensions
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

    // Add static pages (without images for now)
    xml += `
  <url>
    <loc>https://fystack.io</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://fystack.io/blog</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
  </url>`;

    // Add blog posts with images
    for (const post of posts.posts) {
      const postUrl = `https://fystack.io/blog/${post.slug}`;
      const lastMod = new Date(post.updated_at || post.published_at).toISOString();

      xml += `
  <url>
    <loc>${postUrl}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>`;

      // Add feature image if exists
      if (post.feature_image) {
        let featureImageUrl = post.feature_image;

        // Handle Ghost image URLs
        if (featureImageUrl.includes('/content/images/')) {
          const imagePath = featureImageUrl.split('/content/images/')[1];
          featureImageUrl = `https://fystack.io/mpc-wallet/${imagePath}`;
        } else if (featureImageUrl.startsWith('/')) {
          featureImageUrl = `https://fystack.io${featureImageUrl}`;
        }

        xml += `
    <image:image>
      <image:loc>${featureImageUrl}</image:loc>
      <image:title>${post.title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")}</image:title>
    </image:image>`;
      }

      // Extract and add images from post content
      const contentImages = extractImagesFromHtml(post.html, post.title, post.slug);

      for (const image of contentImages) {
        // Skip if it's the same as feature image
        if (post.feature_image && image.loc.includes(post.feature_image)) {
          continue;
        }

        xml += `
    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:title>${image.title}</image:title>`;

        if (image.caption) {
          xml += `
      <image:caption>${image.caption}</image:caption>`;
        }

        xml += `
    </image:image>`;
      }

      xml += `
  </url>`;
    }

    xml += `
</urlset>`;

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    console.error("Error generating image sitemap:", error);

    // Return a minimal valid sitemap on error
    const fallbackXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://fystack.io</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
</urlset>`;

    return new Response(fallbackXml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=300, s-maxage=300",
      },
    });
  }
}
