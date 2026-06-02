export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  industry: string[];
  services: string[];
  rating: number;
  initials: string;
  accentColor?: string;
}
