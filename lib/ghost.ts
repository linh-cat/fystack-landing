import GhostContentAPI from '@tryghost/content-api';

// Initialize Ghost Content API
const api = new GhostContentAPI({
  url: process.env.GHOST_URL || 'http://localhost:2368',
  key: process.env.GHOST_CONTENT_API_KEY || '21a6cf4ad320856a1071206ef7',
  version: 'v5.0'
});

// Re-export the PostOrPage type from the Ghost package and extend it if needed
export type GhostPost = {
  id: string;
  uuid: string;
  title: string;
  slug: string;
  html: string;
  comment_id: string;
  feature_image: string | null;
  featured: boolean;
  visibility: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  custom_excerpt: string | null;
  codeinjection_head: string | null;
  codeinjection_foot: string | null;
  custom_template: string | null;
  canonical_url: string | null;
  authors: GhostAuthor[];
  tags: GhostTag[];
  primary_author: GhostAuthor;
  primary_tag: GhostTag | null;
  url: string;
  excerpt: string;
  reading_time: number;
  access: boolean;
  og_image: string | null;
  og_title: string | null;
  og_description: string | null;
  twitter_image: string | null;
  twitter_title: string | null;
  twitter_description: string | null;
  meta_title: string | null;
  meta_description: string | null;
  email_subject: string | null;
  frontmatter: string | null;
};

export type GhostAuthor = {
  id: string;
  name: string;
  slug: string;
  profile_image: string | null;
  cover_image: string | null;
  bio: string | null;
  website: string | null;
  location: string | null;
  facebook: string | null;
  twitter: string | null;
  meta_title: string | null;
  meta_description: string | null;
  url: string;
};

export type GhostTag = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  feature_image: string | null;
  visibility: string;
  og_image: string | null;
  og_title: string | null;
  og_description: string | null;
  twitter_image: string | null;
  twitter_title: string | null;
  twitter_description: string | null;
  meta_title: string | null;
  meta_description: string | null;
  codeinjection_head: string | null;
  codeinjection_foot: string | null;
  canonical_url: string | null;
  accent_color: string | null;
  url: string;
};

export interface PostsResponse {
  posts: GhostPost[];
  meta: {
    pagination: {
      page: number;
      limit: number;
      pages: number;
      total: number;
      next: number | null;
      prev: number | null;
    };
  };
}

// Ghost API wrapper functions
export const ghostAPI = {
  // Get all posts with pagination
  async getPosts(options: {
    limit?: number;
    page?: number;
    include?: string[];
    filter?: string;
    order?: string;
  } = {}): Promise<PostsResponse> {
    try {
      const { limit = 15, page = 1, include = ['tags', 'authors'], filter, order = 'published_at DESC' } = options;
      
      const posts = await api.posts.browse({
        limit,
        page,
        include: include as unknown as any,
        filter,
        order,
      });

      return {
        posts: posts as unknown as GhostPost[],
        meta: (posts as any).meta
      };
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw new Error('Failed to fetch posts');
    }
  },

  // Get featured posts
  async getFeaturedPosts(limit = 3): Promise<PostsResponse> {
    try {
      const posts = await api.posts.browse({
        limit,
        filter: 'featured:true',
        include: ['tags', 'authors'] as unknown as any,
        order: 'published_at DESC',
      });

      return {
        posts: posts as unknown as GhostPost[],
        meta: (posts as any).meta
      };
    } catch (error) {
      console.error('Error fetching featured posts:', error);
      throw new Error('Failed to fetch featured posts');
    }
  },

  // Get a single post by slug
  async getPostBySlug(slug: string): Promise<GhostPost | null> {
    try {
      const post = await api.posts.read(
        { slug },
        { include: ['tags', 'authors'] as unknown as any }
      );
      return post as unknown as GhostPost;
    } catch (error) {
      console.error('Error fetching post by slug:', error);
      return null;
    }
  },

  // Get posts by tag
  async getPostsByTag(tagSlug: string, limit: number = 10): Promise<GhostPost[]> {
    try {
      const posts = await api.posts.browse({
        limit,
        filter: `tag:${tagSlug}`,
        include: ['tags', 'authors'] as unknown as any,
        order: 'published_at DESC',
      });
      return posts as unknown as GhostPost[];
    } catch (error) {
      console.error('Error fetching posts by tag:', error);
      return [];
    }
  },

  // Get all tags
  async getTags(): Promise<GhostTag[]> {
    try {
      const tags = await api.tags.browse({
        limit: 'all',
        include: ['count.posts'] as unknown as any,
      });
      return tags as unknown as GhostTag[];
    } catch (error) {
      console.error('Error fetching tags:', error);
      throw new Error('Failed to fetch tags');
    }
  },

  // Get all authors
  async getAuthors(): Promise<GhostAuthor[]> {
    try {
      const authors = await api.authors.browse({
        limit: 'all',
        order: 'name ASC',
      });
      return authors as GhostAuthor[];
    } catch (error) {
      console.error('Error fetching authors:', error);
      return [];
    }
  }
};

// Utility functions
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function getReadingTime(minutes: number): string {
  return `${minutes} min read`;
}

export function truncateText(text: string, maxLength: number = 150): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

export function getExcerpt(html: string, maxLength: number = 150): string {
  // Strip HTML tags and get plain text
  const plainText = html.replace(/<[^>]*>/g, '').trim();
  return truncateText(plainText, maxLength);
}

/**
 * Transform Ghost image URLs to use the local proxy
 * This allows images to be served from fystack.io instead of ghost.fystack.io
 * Better for SEO and works even if Ghost is password-protected
 * Uses /mpc-wallet/ path for SEO optimization with relevant keywords
 * Also copies figcaption to empty alt attributes for better accessibility
 */
export function transformGhostImageUrls(html: string, ghostUrl?: string): string {
  const ghostDomain = ghostUrl || process.env.GHOST_URL || 'https://ghost.fystack.io';

  // Extract the base domain without protocol
  const ghostDomainWithoutProtocol = ghostDomain.replace(/^https?:\/\//, '');

  // Replace all Ghost image URLs with proxy URLs
  // Matches: https://ghost.fystack.io/content/images/...
  const imageUrlPattern = new RegExp(
    `(https?:)?//${ghostDomainWithoutProtocol.replace(/\./g, '\\.')}/content/images/([^"'\\s)]+)`,
    'g'
  );

  let transformed = html.replace(imageUrlPattern, '/mpc-wallet/$2');

  // Copy figcaption text to empty alt attributes for better SEO and accessibility
  // Ghost keeps them separate, but for SEO/accessibility they should match
  const figurePattern = /<figure[^>]*>(.*?)<\/figure>/gs;

  transformed = transformed.replace(figurePattern, (figureMatch) => {
    // Extract figcaption text if present
    const captionMatch = figureMatch.match(/<figcaption[^>]*>(.*?)<\/figcaption>/s);

    if (captionMatch) {
      const captionText = captionMatch[1].replace(/<[^>]+>/g, '').trim(); // Strip HTML tags

      // Find images with empty alt and add the caption as alt text
      return figureMatch.replace(/(<img[^>]*?)alt=""([^>]*?>)/g, (imgMatch, before, after) => {
        return `${before}alt="${captionText}"${after}`;
      });
    }

    return figureMatch;
  });

  return transformed;
}

/**
 * Transform a single Ghost image URL (for feature_image, og_image, etc.)
 * Uses /mpc-wallet/ path for SEO optimization with relevant keywords
 */
export function transformGhostImageUrl(url: string | null, ghostUrl?: string): string | null {
  if (!url) return null;

  const ghostDomain = ghostUrl || process.env.GHOST_URL || 'https://ghost.fystack.io';
  const ghostDomainWithoutProtocol = ghostDomain.replace(/^https?:\/\//, '');

  // Check if URL is a Ghost image
  const imageUrlPattern = new RegExp(
    `^(https?:)?//${ghostDomainWithoutProtocol.replace(/\./g, '\\.')}/content/images/(.+)$`
  );

  const match = url.match(imageUrlPattern);
  if (match) {
    return `/mpc-wallet/${match[2]}`;
  }

  return url;
} 