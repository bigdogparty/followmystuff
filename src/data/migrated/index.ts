
// Auto-generated types from CSV migration
// Do not edit manually - regenerate using npm run migrate:csv

export interface MigratedArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    id: string;
    name: string;
    bio: string;
    avatar: string | null;
  };
  publishedAt: string;
  updatedAt: string;
  featuredImage: string | null;
  featuredImageOriginal: string | null;
  categories: MigratedCategory[];
  tags: MigratedTag[];
  readingTime: number;
  seo: {
    metaTitle: string;
    metaDescription: string;
    focusKeyword: string | null;
    canonicalUrl: string;
  };
  wordpressId: number;
  wordpressUrl: string;
  isCareerFocused: boolean;
}

export interface MigratedCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export interface MigratedTag {
  id: string;
  name: string;
  slug: string;
  count: number;
}

// Data exports
export const migratedArticles: MigratedArticle[] = require('./articles.json');
export const allMigratedArticles: MigratedArticle[] = require('./articles-all.json');
export const otherArticles: MigratedArticle[] = require('./articles-other.json');
export const migratedCategories: MigratedCategory[] = require('./categories.json');
export const migratedTags: MigratedTag[] = require('./tags.json');
