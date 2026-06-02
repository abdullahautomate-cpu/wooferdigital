export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceStat {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface SubSection {
  heading: string;
  body: string;
}

export interface ContentSection {
  heading: string;
  body: string;
  subSections?: SubSection[];
}

export interface InternalLink {
  label: string;
  href: string;
  description?: string;
}

export interface ServiceSchemaData {
  serviceType: string;
  areaServed: string[];
  description: string;
}

export interface ServicePage {
  slug: string;
  title: string;
  badge?: string;
  parentService?: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle?: string;
  ogDescription?: string;
  breadcrumbs: { label: string; href: string }[];
  heroHeadline: string;
  heroSubheadline: string;
  heroCTAText: string;
  heroCTAHref: string;
  heroSecondaryText?: string;
  heroSecondaryHref?: string;
  introText: string;
  stats: ServiceStat[];
  contentSections: ContentSection[];
  processSteps: ProcessStep[];
  faqs: FAQ[];
  featuredTestimonialIds: string[];
  featuredCaseStudyIds: string[];
  relatedServices: InternalLink[];
  relatedIndustries: InternalLink[];
  relatedLocations: InternalLink[];
  serviceSchema: ServiceSchemaData;
}
