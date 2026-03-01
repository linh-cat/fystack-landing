import { ghostAPI } from "@/lib/ghost";
import { MetadataRoute } from "next";

// Revalidate the sitemap every 1 hour (3600 seconds)
export const revalidate = 3600;

// Cache the sitemap data
let sitemapCache: MetadataRoute.Sitemap | null = null;
let lastFetched: number = 0;
const CACHE_DURATION = 3600 * 1000; // 1 hour in milliseconds

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Check if we have a valid cache
  const now = Date.now();
  if (sitemapCache && (now - lastFetched) < CACHE_DURATION) {
    return sitemapCache;
  }

  try {
    // Get all blog posts
    const posts = await ghostAPI.getPosts({
      limit: 1000, // Large number to get effectively all posts
      include: ['tags', 'authors'],
      order: 'published_at DESC'
    });

    // Create sitemap entries for blog posts
    const blogPosts = posts.posts.map((post) => ({
      url: `https://fystack.io/blog/${post.slug}`,
      lastModified: new Date(post.updated_at || post.published_at),
      changeFrequency: 'weekly' as const,
      priority: 0.9, // Increased from 0.8 to 0.9 for better indexing
    }));

    // Add static pages
    const staticPages = [
      {
        url: 'https://fystack.io',
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1, // Homepage stays at 1.0
      },
      {
        url: 'https://fystack.io/blog',
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.95, // Blog index increased to 0.95
      },
      {
        url: 'https://fystack.io/#pricing',
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.85, // Slightly increased for important section
      },
      {
        url: 'https://fystack.io/#chains',
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.85, // Slightly increased for important section
      },
      {
        url: 'https://fystack.io/#security',
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.85, // Slightly increased for important section
      },
      {
        url: 'https://fystack.io/wallet-as-service',
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
      },
      // Add other static pages here
    ];

    // Combine and cache the sitemap entries
    sitemapCache = [...staticPages, ...blogPosts];
    lastFetched = now;

    return sitemapCache;
  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // If cache exists, return it even if expired
    if (sitemapCache) {
      return sitemapCache;
    }
    
    // Fallback to static pages only if no cache exists
    return [
      {
        url: 'https://fystack.io',
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1,
      },
      {
        url: 'https://fystack.io/blog',
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.9,
      },
    ];
  }
} 