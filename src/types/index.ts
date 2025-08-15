export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: Author;
  publishedAt: string;
  updatedAt: string;
  featuredImage?: string;
  categories: Category[];
  tags: Tag[];
  readingTime: number;
  seo: SEOData;
}

export interface Author {
  id: string;
  name: string;
  bio?: string;
  avatar?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface SEOData {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  structuredData?: any;
}

export interface SearchResult {
  articles: Article[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}