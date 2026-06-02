import type { FAQ, ServiceStat, ContentSection, InternalLink } from "./service";

export interface IndustryChallenge {
  title: string;
  description: string;
}

export interface IndustrySolution {
  service: string;
  description: string;
  href: string;
}

export type IndustrySchemaType =
  | "MedicalOrganization"
  | "LegalService"
  | "LocalBusiness"
  | "Organization"
  | "AutomotiveBusiness"
  | "EducationalOrganization"
  | "FinancialService"
  | "InsuranceAgency"
  | "RealEstateAgent";

export interface IndustryPage {
  slug: string;
  industry: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumbs: { label: string; href: string }[];
  heroHeadline: string;
  heroSubheadline: string;
  heroCTAText: string;
  introText: string;
  challenges: IndustryChallenge[];
  solutions: IndustrySolution[];
  stats: ServiceStat[];
  contentSections: ContentSection[];
  faqs: FAQ[];
  relevantServices: InternalLink[];
  relatedLocations: InternalLink[];
  featuredTestimonialIds: string[];
  featuredCaseStudyIds: string[];
  schemaType: IndustrySchemaType;
}
