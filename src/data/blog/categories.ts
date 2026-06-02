import type { BlogCategory } from "@/types/blog";

export const BLOG_CATEGORIES: BlogCategory[] = [
  { slug: "paid-media", label: "Paid Media Strategy", description: "Expert insights on media buying, campaign strategy, and maximizing advertising ROI." },
  { slug: "google-ads", label: "Google Ads", description: "Google Ads tips, strategies, and best practices for Search, Shopping, YouTube, and Performance Max." },
  { slug: "social-advertising", label: "Social Advertising", description: "Facebook, Instagram, TikTok, and LinkedIn advertising strategies and case studies." },
  { slug: "programmatic", label: "Programmatic & DSP", description: "Programmatic advertising, real-time bidding, DSP strategy, and data-driven targeting." },
  { slug: "ctv-ott", label: "CTV & OTT", description: "Connected TV and over-the-top advertising strategies, measurement, and best practices." },
  { slug: "lead-generation", label: "Lead Generation", description: "Paid lead generation tactics, CPL optimization, and lead quality improvement strategies." },
  { slug: "ecommerce", label: "Ecommerce Advertising", description: "Ecommerce advertising strategies for Google Shopping, Meta, TikTok, and DTC brands." },
  { slug: "industry-insights", label: "Industry Insights", description: "Healthcare, legal, financial services, and other industry-specific advertising guides." },
];

export function getAllCategories(): BlogCategory[] {
  return BLOG_CATEGORIES;
}

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((c) => c.slug === slug);
}
