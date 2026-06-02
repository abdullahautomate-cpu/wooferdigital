export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishDate: string;
  updatedDate?: string;
  author: string;
  authorTitle?: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  featuredImageAlt?: string;
  readTime: number;
  metaTitle: string;
  metaDescription: string;
  bodyHtml: string;
  relatedPostSlugs: string[];
  relatedServiceSlugs: string[];
}

export interface BlogCategory {
  slug: string;
  label: string;
  description: string;
}
