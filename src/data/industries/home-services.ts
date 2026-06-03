import type { IndustryPage } from "@/types/industry";

export const homeServicesData: IndustryPage = {
  slug: "home-services",
  industry: "Home Services",
  metaTitle: "Home Services Advertising Agency USA",
  metaDescription:
    "Expert home services advertising for HVAC, plumbing, roofing & remodeling. Local Google Ads, Facebook & LSA management. Free home services ad audit.",
  breadcrumbs: [{ label: "Industries", href: "/industries" }, { label: "Home Services", href: "/industries/home-services" }],
  heroHeadline: "Home Services Advertising That Keeps Your Phone Ringing",
  heroSubheadline: "Local paid advertising for HVAC, plumbing, roofing, electrical, remodeling, and home services contractors — driving service calls and estimate requests at profitable CPLs.",
  heroCTAText: "Get Free Home Services Audit",
  introText: "Home services is one of the most consistent and high-ROI categories for local paid advertising. When a homeowner's AC breaks down in July, their water heater fails, or their roof starts leaking, they reach for Google immediately — and the business that appears first gets the call. Woofer Digital manages advertising campaigns for home services contractors across the United States, from solo operators to multi-location service companies with fleets of technicians.",
  challenges: [
    { title: "Seasonality", description: "HVAC demand spikes in summer and winter. Roofing peaks after storm season. Campaigns must anticipate seasonal demand and adjust budgets proactively." },
    { title: "Service Area Management", description: "Contractors have specific geographic service areas. Every wasted click outside the service area is pure waste. Precise geographic targeting is non-negotiable." },
    { title: "Emergency vs. Planned Service", description: "Emergency service calls (broken AC, burst pipe) and planned projects (kitchen remodel, HVAC replacement) require completely different campaign strategies." },
    { title: "Review & Reputation Dependency", description: "Home services is heavily review-driven. Advertising drives calls, but conversion rates depend on online reputation. We help clients maximize review velocity alongside advertising." },
  ],
  solutions: [
    { service: "Google Ads Management", description: "Local search and Local Services Ads (LSA) for maximum service area visibility when homeowners search for your services.", href: "/services/google-ads" },
    { service: "Facebook & Instagram Ads", description: "Before/after project campaigns, seasonal promotions, and maintenance plan acquisition for home services brands.", href: "/services/facebook-instagram-ads" },
    { service: "Lead Generation", description: "Service inquiry campaigns with click-to-call optimization and 24/7 lead capture for emergency services.", href: "/services/lead-generation" },
  ],
  stats: [
    { value: "$38", label: "Avg. Cost Per Service Lead" },
    { value: "4.2x", label: "Avg. Service Call Volume Increase" },
    { value: "86%", label: "Avg. Phone Lead Rate" },
    { value: "92%", label: "Service Area Call Accuracy" },
  ],
  contentSections: [
    {
      heading: "Home Services Advertising by Specialty",
      body: `<p><strong>HVAC Advertising:</strong> Seasonal campaigns maximizing budget during peak demand (summer cooling, winter heating) with year-round maintenance plan acquisition. Local Services Ads (LSA) combined with traditional Google Search for maximum SERP coverage. Typical CPL: $25-60.</p>
<p><strong>Plumbing Advertising:</strong> Emergency service campaigns with strong call-to-action and 24/7 call routing. Separate campaigns for emergency plumbing, drain cleaning, water heater replacement, and remodeling services. Typical CPL: $30-70.</p>
<p><strong>Roofing Advertising:</strong> Storm-triggered and seasonal campaigns with geo-targeted storm response advertising after major weather events. Insurance replacement and retail replacement campaigns with different messaging. Typical CPL: $40-90.</p>
<p><strong>Remodeling & Renovation:</strong> Longer-consideration purchase with estimate request funnels, portfolio showcasing, and project-type targeting (kitchen, bathroom, addition). Typical CPL: $50-120.</p>
<p><strong>Electrical Contracting:</strong> Emergency service and planned project campaigns targeting homeowners and property managers. Panel upgrades, EV charger installation, and smart home campaigns. Typical CPL: $25-55.</p>`,
    },
  ],
  faqs: [
    {
      question: "What's the best advertising platform for home services contractors?",
      answer: "Google Local Services Ads (LSA) and Google Search typically deliver the best CPL for home services because they capture homeowners actively seeking help. Facebook works well for seasonal promotions and maintenance plan acquisition. We recommend starting with Google and adding Facebook once Google is optimized.",
    },
    {
      question: "How do you handle after-hours leads?",
      answer: "We optimize campaigns for 24/7 lead capture using call routing setups, automated text response for form submissions after hours, and campaign scheduling adjustments for emergency vs. planned service campaigns. After-hours call optimization can significantly increase lead conversion rates.",
    },
  ],
  relevantServices: [
    { label: "Google Ads Management", href: "/services/google-ads", description: "Local search and LSA campaigns" },
    { label: "Lead Generation", href: "/services/lead-generation", description: "Service inquiry campaigns" },
    { label: "Facebook & Instagram Ads", href: "/services/facebook-instagram-ads", description: "Seasonal promotions" },
  ],
  relatedLocations: [
    { label: "Home Services Advertising New York", href: "/locations/new-york" },
    { label: "Home Services Advertising Houston", href: "/locations/houston" },
    { label: "Home Services Advertising Phoenix", href: "/locations/phoenix" },
    { label: "Home Services Advertising Dallas", href: "/locations/dallas" },
  ],
  featuredTestimonialIds: ["t7", "t8"],
  featuredCaseStudyIds: ["medbridge-health-google-ads"],
  schemaType: "LocalBusiness",
};
