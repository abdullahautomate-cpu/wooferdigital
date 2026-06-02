export interface CaseStudyResult {
  metric: string;
  value: string;
  improvement: string;
}

export interface CaseStudy {
  slug: string;
  clientName: string;
  clientIndustry: string;
  logoPlaceholder: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  testimonial?: string;
  testimonialAuthor?: string;
  testimonialTitle?: string;
  servicesUsed: string[];
  metaTitle: string;
  metaDescription: string;
  fullBody: string;
}
