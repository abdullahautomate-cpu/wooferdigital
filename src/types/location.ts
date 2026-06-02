import type { FAQ, ServiceStat, ContentSection, InternalLink } from "./service";

export interface LocalBusinessSchemaData {
  addressLocality: string;
  addressRegion: string;
  postalCode?: string;
  telephone: string;
  areaServed: string[];
  latitude?: number;
  longitude?: number;
}

export interface LocationPage {
  slug: string;
  city: string;
  state: string;
  stateFullName: string;
  metroPopulation?: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumbs: { label: string; href: string }[];
  heroHeadline: string;
  heroSubheadline: string;
  heroCTAText: string;
  introText: string;
  localMarketInsights: string;
  stats: ServiceStat[];
  contentSections: ContentSection[];
  faqs: FAQ[];
  servicesOffered: InternalLink[];
  featuredIndustries: InternalLink[];
  featuredTestimonialIds: string[];
  localBusinessSchema: LocalBusinessSchemaData;
}
