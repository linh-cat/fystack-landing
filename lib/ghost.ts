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
        include: include.join(','),
        filter,
        order,
      });

      return {
        posts: posts as GhostPost[],
        meta: (posts as any).meta
      };
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw new Error('Failed to fetch posts');
    }
  },

  // Get a single post by slug
  async getPostBySlug(slug: string): Promise<GhostPost | null> {
    try {
      const post = await api.posts.read(
        { slug },
        { include: ['tags', 'authors'] }
      );
      return post as GhostPost;
    } catch (error) {
      console.error('Error fetching post by slug:', error);
      return null;
    }
  },

  // Get featured posts
  async getFeaturedPosts(limit: number = 6): Promise<GhostPost[]> {
    try {
      const posts = await api.posts.browse({
        limit,
        filter: 'featured:true',
        include: ['tags', 'authors'],
        order: 'published_at DESC',
      });
      return posts as GhostPost[];
    } catch (error) {
      console.error('Error fetching featured posts:', error);
      return [];
    }
  },

  // Get posts by tag
  async getPostsByTag(tagSlug: string, limit: number = 10): Promise<GhostPost[]> {
    try {
      const posts = await api.posts.browse({
        limit,
        filter: `tag:${tagSlug}`,
        include: ['tags', 'authors'],
        order: 'published_at DESC',
      });
      return posts as GhostPost[];
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
        order: 'name ASC',
      });
      return tags as GhostTag[];
    } catch (error) {
      console.error('Error fetching tags:', error);
      return [];
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