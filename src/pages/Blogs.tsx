/**
 * Blogs Page
 * 
 * A clean, Medium-inspired blog listing page.
 * 
 * Design principles:
 * - White/light background for readability
 * - Single-column, centered layout
 * - Generous whitespace
 * - Serif fonts for titles, sans-serif for body
 * - Content-first, minimal distractions
 * 
 * Features:
 * - SEO optimized with semantic HTML
 * - Responsive design
 * - Dynamic blog rendering
 * - Navigation back to main site
 */

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import { getAllPosts } from "@/data/blogPosts";

const Blogs = () => {
  // Fetch all blog posts (sorted by date, newest first)
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-card">
      {/* Navigation - Simple, unobtrusive */}
      <nav className="sticky top-0 z-10 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Main content area */}
      <main className="max-w-2xl mx-auto px-6 py-12 md:py-16">
        {/* Page header */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blog
          </h1>
          <p className="text-muted-foreground text-lg">
            Thoughts on web development, design, and building digital products.
          </p>
        </header>

        {/* Blog posts list */}
        <section aria-label="Blog posts">
          {posts.length > 0 ? (
            <div className="divide-y divide-border">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No blog posts yet. Check back soon!
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Footer - Minimal */}
      <footer className="border-t border-border">
        <div className="max-w-2xl mx-auto px-6 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aryan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Blogs;
