/**
 * BlogPost Page
 * 
 * Individual blog post detail page.
 * Displays the full content of a blog post.
 * 
 * Design principles:
 * - Optimal reading width (max 680px like Medium)
 * - Clear typography hierarchy
 * - Generous line height for readability
 * - Minimal distractions
 */

import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug } from "@/data/blogPosts";
import { useEffect } from "react";

/**
 * Formats a date string to a human-readable format
 */
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Fetch the blog post by slug
  const post = slug ? getPostBySlug(slug) : undefined;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Handle 404 - post not found
  if (!post) {
    return (
      <div className="min-h-screen bg-card flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
            Post Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/blogs")}
            className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            Back to all posts
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-card">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            All Posts
          </Link>
        </div>
      </nav>

      {/* Article content */}
      <article className="max-w-2xl mx-auto px-6 py-12 md:py-16">
        {/* Article header */}
        <header className="mb-10">
          {/* Title */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            {post.title}
          </h1>
          
          {/* Author and metadata */}
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">
              {post.author.name}
            </span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime} min read</span>
          </div>
        </header>

        {/* Article body */}
        <div className="prose prose-lg max-w-none">
          {/* 
            Content rendering
            In production, use a proper markdown renderer like react-markdown
            For now, we'll display the content with proper formatting
          */}
          <div className="text-foreground leading-relaxed space-y-6 text-lg">
            {post.content.split('\n\n').map((paragraph, index) => {
              // Handle markdown headers
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={index} className="font-serif text-3xl font-bold mt-8 mb-4">
                    {paragraph.replace('# ', '')}
                  </h1>
                );
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="font-serif text-2xl font-bold mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              // Handle list items
              if (paragraph.includes('- **')) {
                const items = paragraph.split('\n').filter(line => line.trim());
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2">
                    {items.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        {item.replace('- ', '').replace(/\*\*/g, '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.includes('1. **')) {
                const items = paragraph.split('\n').filter(line => line.trim());
                return (
                  <ol key={index} className="list-decimal pl-6 space-y-2">
                    {items.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        {item.replace(/^\d+\.\s/, '').replace(/\*\*/g, '')}
                      </li>
                    ))}
                  </ol>
                );
              }
              // Regular paragraphs
              if (paragraph.trim()) {
                return (
                  <p key={index} className="text-muted-foreground">
                    {paragraph.trim()}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-2xl mx-auto px-6 py-8 text-center">
          <Link 
            to="/blogs"
            className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            ← Back to all posts
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
