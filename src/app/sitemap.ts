import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getAllPosts } from "@/lib/blog";
import { getCaseStudies } from "@/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/case-studies`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/press`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/tools`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/tools/google-ads-roi-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/tools/ad-spend-benchmarks`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = [
    "/services/media-buying",
    "/services/google-ads",
    "/services/facebook-instagram-ads",
    "/services/tiktok-advertising",
    "/services/programmatic-advertising",
    "/services/connected-tv",
    "/services/lead-generation",
    "/services/ecommerce-advertising",
    "/services/reputation-management",
    "/services/ai-seo",
    "/services/marketing-automation",
    "/services/ppc-management",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const industryPages: MetadataRoute.Sitemap = [
    "/industries/healthcare",
    "/industries/law-firm",
    "/industries/dental",
    "/industries/real-estate",
    "/industries/saas",
    "/industries/insurance",
    "/industries/financial-services",
    "/industries/home-services",
    "/industries/automotive",
    "/industries/education",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationPages: MetadataRoute.Sitemap = [
    "/locations/new-york",
    "/locations/los-angeles",
    "/locations/chicago",
    "/locations/houston",
    "/locations/miami",
    "/locations/dallas",
    "/locations/atlanta",
    "/locations/seattle",
    "/locations/boston",
    "/locations/denver",
    "/locations/austin",
    "/locations/phoenix",
    "/locations/philadelphia",
    "/locations/san-antonio",
    "/locations/san-diego",
    "/locations/washington-dc",
    "/locations/islamabad",
    "/locations/rawalpindi",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogCategoryPages: MetadataRoute.Sitemap = [
    "ctv-ott",
    "ecommerce",
    "google-ads",
    "industry-insights",
    "lead-generation",
    "paid-media",
    "programmatic",
    "reputation-management",
    "seo",
    "social-advertising",
  ].map((category) => ({
    url: `${SITE_URL}/blog/category/${category}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const blogPostPages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = getCaseStudies().map((study) => ({
    url: `${SITE_URL}/case-studies/${study.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...locationPages,
    ...blogCategoryPages,
    ...blogPostPages,
    ...caseStudyPages,
  ];
}
