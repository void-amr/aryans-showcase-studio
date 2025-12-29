/**
 * BlogCard Component
 * 
 * A clean, minimalistic blog card inspired by Medium.
 * Displays: title, excerpt, author, date, and reading time.
 * 
 * Features:
 * - Responsive design
 * - Semantic HTML for SEO
 * - Accessible navigation
 * - Content-first design with generous whitespace
 */

import { Link } from "react-router-dom";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

/**
 * Formats a date string to a human-readable format
 * Example: "Dec 28, 2024"
 */
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="py-8 border-b border-border last:border-b-0">
      {/* Clickable link wrapping the entire card for better UX */}
      <Link 
        to={`/blogs/${post.slug}`}
        className="block group"
        aria-label={`Read article: ${post.title}`}
      >
        {/* Blog Title - Serif font for editorial feel */}
        <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-muted-foreground transition-colors leading-tight">
          {post.title}
        </h2>
        
        {/* Excerpt - Keep it concise, 2-3 lines max */}
        <p className="text-muted-foreground text-base leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        
        {/* Metadata row: Author, Date, Reading time */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {/* Author name */}
          <span className="font-medium text-foreground">
            {post.author.name}
          </span>
          
          {/* Separator dot */}
          <span aria-hidden="true">·</span>
          
          {/* Publication date */}
          <time dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>
          
          {/* Separator dot */}
          <span aria-hidden="true">·</span>
          
          {/* Reading time */}
          <span>{post.readingTime} min read</span>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
