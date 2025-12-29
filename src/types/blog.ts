/**
 * Blog Types
 * 
 * Type definitions for blog-related data structures.
 * Designed to be scalable and compatible with any API/database.
 */

export interface BlogPost {
  /** Unique identifier for the blog post */
  id: string;
  
  /** URL-friendly slug for routing */
  slug: string;
  
  /** Blog post title */
  title: string;
  
  /** Short excerpt/summary (2-3 lines max) */
  excerpt: string;
  
  /** Full blog content (markdown or HTML) */
  content: string;
  
  /** Author information */
  author: {
    name: string;
    avatar?: string;
  };
  
  /** Publication date (ISO string) */
  publishedAt: string;
  
  /** Estimated reading time in minutes */
  readingTime: number;
  
  /** Optional cover image URL */
  coverImage?: string;
  
  /** Tags/categories for the post */
  tags?: string[];
}

/**
 * Blog list response structure for API compatibility
 */
export interface BlogListResponse {
  posts: BlogPost[];
  total: number;
  page: number;
  pageSize: number;
}
