/**
 * Mock Blog Data
 * 
 * Sample blog posts for development and demonstration.
 * In production, replace with actual API calls to your backend.
 */

import { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "building-scalable-web-applications",
    title: "Building Scalable Web Applications: A Developer's Guide",
    excerpt: "Learn the fundamental principles of building web applications that can handle millions of users. From architecture decisions to performance optimization techniques.",
    content: `
# Building Scalable Web Applications

Building scalable web applications requires careful consideration of architecture, performance, and maintainability. In this guide, we'll explore the key principles that help applications grow from handling hundreds to millions of users.

## Key Principles

1. **Modular Architecture** - Break your application into independent, reusable components
2. **Performance First** - Optimize for speed from the beginning
3. **Database Design** - Plan your data structure for growth

## Conclusion

Scalability is not an afterthought—it's a mindset that should guide every technical decision you make.
    `,
    author: {
      name: "Aryan",
    },
    publishedAt: "2024-12-28T10:00:00Z",
    readingTime: 8,
    tags: ["Web Development", "Architecture", "Performance"],
  },
  {
    id: "2",
    slug: "mastering-react-hooks",
    title: "Mastering React Hooks: Beyond useState and useEffect",
    excerpt: "Dive deep into advanced React hooks patterns. Discover how to create custom hooks that make your code cleaner and more reusable.",
    content: `
# Mastering React Hooks

React Hooks have revolutionized how we write React applications. Let's go beyond the basics and explore advanced patterns.

## Custom Hooks

Custom hooks allow you to extract component logic into reusable functions. They're the secret to writing clean, maintainable React code.

## Best Practices

- Keep hooks focused on a single responsibility
- Use the 'use' prefix for naming
- Document your hooks thoroughly
    `,
    author: {
      name: "Aryan",
    },
    publishedAt: "2024-12-25T14:30:00Z",
    readingTime: 6,
    tags: ["React", "JavaScript", "Hooks"],
  },
  {
    id: "3",
    slug: "the-art-of-clean-code",
    title: "The Art of Clean Code: Writing Code That Speaks",
    excerpt: "Clean code is not just about following rules—it's about communication. Learn how to write code that tells a story and is a joy to maintain.",
    content: `
# The Art of Clean Code

Code is read more often than it is written. This fundamental truth should guide how we approach writing software.

## Principles of Clean Code

1. **Meaningful Names** - Variables and functions should reveal intent
2. **Small Functions** - Each function should do one thing well
3. **Clear Structure** - Organize code logically

## Why It Matters

Clean code reduces bugs, speeds up development, and makes collaboration seamless.
    `,
    author: {
      name: "Aryan",
    },
    publishedAt: "2024-12-20T09:15:00Z",
    readingTime: 5,
    tags: ["Best Practices", "Clean Code", "Software Engineering"],
  },
  {
    id: "4",
    slug: "typescript-for-production",
    title: "TypeScript for Production: Real-World Patterns",
    excerpt: "Move beyond basic TypeScript and learn the patterns used in production applications. From generics to utility types, master the tools that make TypeScript powerful.",
    content: `
# TypeScript for Production

TypeScript has become essential for building robust applications. Let's explore patterns that matter in production.

## Advanced Types

Generics, conditional types, and mapped types unlock TypeScript's true potential.

## Practical Tips

- Use strict mode always
- Leverage type inference
- Create utility types for common patterns
    `,
    author: {
      name: "Aryan",
    },
    publishedAt: "2024-12-15T16:45:00Z",
    readingTime: 7,
    tags: ["TypeScript", "JavaScript", "Production"],
  },
  {
    id: "5",
    slug: "design-systems-at-scale",
    title: "Design Systems at Scale: Building for Consistency",
    excerpt: "A well-crafted design system is the foundation of great user experiences. Learn how to build and maintain design systems that scale across teams and products.",
    content: `
# Design Systems at Scale

Design systems bridge the gap between design and development, creating a shared language for building products.

## Core Components

- Typography scales
- Color tokens
- Spacing systems
- Component libraries

## Implementation

Start small, document everything, and iterate based on feedback.
    `,
    author: {
      name: "Aryan",
    },
    publishedAt: "2024-12-10T11:00:00Z",
    readingTime: 9,
    tags: ["Design Systems", "UI/UX", "Frontend"],
  },
];

/**
 * Get all blog posts
 * In production, replace with API call
 */
export const getAllPosts = (): BlogPost[] => {
  return blogPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

/**
 * Get a single blog post by slug
 * In production, replace with API call
 */
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};
