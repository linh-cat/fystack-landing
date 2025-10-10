import { NextResponse } from 'next/server';
import { ghostAPI } from '@/lib/ghost';

// Revalidate every hour
export const revalidate = 3600;

// Helper function to extract image URLs with their captions from HTML content
function extractImagesWithCaptions(html: string): Array<{ url: string; caption?: string }> {
  const images: Array<{ url: string; caption?: string }> = [];

  // Extract images within figure tags with captions
  const figureRegex = /<figure[^>]*>(.*?)<\/figure>/gs;
  let figureMatch;

  while ((figureMatch = figureRegex.exec(html)) !== null) {
    const figureContent = figureMatch[1];

    // Extract image URL from the figure
    const imgMatch = figureContent.match(/<img[^>]+src="([^">]+)"/);
    if (imgMatch) {
      const imageUrl = imgMatch[1];

      // Extract figcaption text if present
      const captionMatch = figureContent.match(/<figcaption[^>]*>(.*?)<\/figcaption>/s);
      let caption: string | undefined;

      if (captionMatch) {
        // Strip HTML tags and clean up the caption text
        caption = captionMatch[1]
          .replace(/<[^>]+>/g, '') // Remove HTML tags
          .replace(/\s+/g, ' ') // Normalize whitespace
          .trim();
      }

      images.push({ url: imageUrl, caption });
    }
  }

  // Also extract standalone images (not in figures) without captions
  const standaloneImgRegex = /<img[^>]+src="([^">]+)"[^>]*>/g;
  let imgMatch;
  const allImageUrls = new Set(images.map(img => img.url));

  while ((imgMatch = standaloneImgRegex.exec(html)) !== null) {
    const imageUrl = imgMatch[1];
    // Only add if not already captured from a figure
    if (!allImageUrls.has(imageUrl)) {
      images.push({ url: imageUrl });
      allImageUrls.add(imageUrl);
    }
  }

  return images;
}

// Helper function to convert relative URLs to absolute
function toAbsoluteUrl(url: string | null): string | null {
  if (!url) return null;
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  return `https://fystack.io${url}`;
}

export async function GET() {
  try {
    // Fetch all blog posts
    const posts = await ghostAPI.getPosts({
      limit: 1000,
      include: ['tags', 'authors'],
      order: 'published_at DESC'
    });

    // Build image sitemap entries
    let sitemapEntries = '';

    for (const post of posts.posts) {
      const pageUrl = `https://fystack.io/blog/${post.slug}`;
      const imageData: Array<{ url: string; title?: string }> = [];

      // Extract images with captions from HTML content
      const contentImages = extractImagesWithCaptions(post.html);

      // Create a map of image URLs to their captions
      const imageCaptionMap = new Map<string, string>();
      for (const img of contentImages) {
        const absoluteUrl = toAbsoluteUrl(img.url);
        if (absoluteUrl && img.caption) {
          imageCaptionMap.set(absoluteUrl, img.caption);
        }
      }

      // Add feature image if exists (with post title as fallback)
      if (post.feature_image) {
        const absoluteUrl = toAbsoluteUrl(post.feature_image);
        if (absoluteUrl) {
          const title = imageCaptionMap.get(absoluteUrl) || post.title;
          imageData.push({ url: absoluteUrl, title });
        }
      }

      // Add og_image if exists and different from feature_image
      if (post.og_image && post.og_image !== post.feature_image) {
        const absoluteUrl = toAbsoluteUrl(post.og_image);
        if (absoluteUrl) {
          const title = imageCaptionMap.get(absoluteUrl);
          imageData.push({ url: absoluteUrl, title });
        }
      }

      // Add twitter_image if exists and different from others
      if (post.twitter_image && post.twitter_image !== post.feature_image && post.twitter_image !== post.og_image) {
        const absoluteUrl = toAbsoluteUrl(post.twitter_image);
        if (absoluteUrl) {
          const title = imageCaptionMap.get(absoluteUrl);
          imageData.push({ url: absoluteUrl, title });
        }
      }

      // Add all content images with their captions
      for (const img of contentImages) {
        const absoluteUrl = toAbsoluteUrl(img.url);
        if (absoluteUrl && !imageData.find(data => data.url === absoluteUrl)) {
          // Prefer figcaption; if absent, fall back to post title so every image has a title
          const title = img.caption && img.caption.length > 0 ? img.caption : post.title;
          imageData.push({ url: absoluteUrl, title });
        }
      }

      // Only add URL entry if there are images
      if (imageData.length > 0) {
        sitemapEntries += `  <url>\n`;
        sitemapEntries += `    <loc>${pageUrl}</loc>\n`;

        // Add all images for this URL
        for (const img of imageData) {
          sitemapEntries += `    <image:image>\n`;
          sitemapEntries += `      <image:loc>${escapeXml(img.url)}</image:loc>\n`;
          // Add image title if available
          if (img.title) {
            sitemapEntries += `      <image:title>${escapeXml(img.title)}</image:title>\n`;
          }
          sitemapEntries += `    </image:image>\n`;
        }

        sitemapEntries += `  </url>\n`;
      }
    }

    // Generate complete sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemapEntries}</urlset>`;

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error('Error generating image sitemap:', error);

    // Return minimal valid sitemap on error
    const errorSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
</urlset>`;

    return new NextResponse(errorSitemap, {
      status: 500,
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
}

// Helper to escape XML special characters
function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
