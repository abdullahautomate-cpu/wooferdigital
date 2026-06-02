import type { IndustryPage } from "@/types/industry";

export const healthcareData: IndustryPage = {
  slug: "healthcare",
  industry: "Healthcare",
  metaTitle: "Healthcare Advertising Agency | Medical Practice Marketing",
  metaDescription:
    "HIPAA-compliant healthcare advertising for hospitals, medical practices, urgent care, telehealth, and specialty providers. Google Ads, Meta Ads, programmatic. Free audit.",
  breadcrumbs: [{ label: "Industries", href: "/industries" }, { label: "Healthcare", href: "/industries/healthcare" }],
  heroHeadline: "Healthcare Advertising Agency Trusted by Medical Practices Nationwide",
  heroSubheadline:
    "HIPAA-compliant paid advertising that drives patient acquisition for hospitals, specialty practices, urgent care networks, and telehealth platforms across the U.S.",
  heroCTAText: "Get Free Healthcare Ad Audit",
  introText:
    "Healthcare advertising requires a combination of clinical understanding, compliance expertise, and performance marketing precision that most agencies simply don't possess. At Woofer Digital, we have built one of the most experienced healthcare advertising teams in the country, managing patient acquisition campaigns for multi-location hospital systems, specialty practices, urgent care networks, mental health providers, dental groups, and telehealth platforms. Our campaigns are fully HIPAA-compliant, using compliant tracking architecture, approved landing page structures, and adherence to Meta and Google healthcare advertising policies.",
  challenges: [
    { title: "Strict Compliance Requirements", description: "Healthcare advertising on Google and Meta has extensive policy restrictions around medical claims, before/after imagery, and data handling. Non-compliant ads get rejected or accounts get suspended." },
    { title: "High Competition & CPCs", description: "Healthcare keywords are among the most expensive in Google Ads — often $15-50+ per click. Without a disciplined keyword strategy, budgets evaporate quickly without results." },
    { title: "Patient Privacy & HIPAA", description: "Standard pixel tracking can violate HIPAA by passing patient health information to ad platforms. Proper compliant tracking architecture is essential." },
    { title: "Long Patient Decision Journey", description: "Patients often research for weeks before booking. Campaigns must address users at different stages of the decision journey, not just bottom-of-funnel." },
  ],
  solutions: [
    { service: "Google Ads Management", description: "High-intent search campaigns targeting patients actively seeking your services, with HIPAA-compliant conversion tracking.", href: "/services/google-ads" },
    { service: "Facebook & Instagram Ads", description: "Awareness and consideration campaigns reaching target demographics in your service area — compliant with Meta healthcare policies.", href: "/services/facebook-instagram-ads" },
    { service: "Lead Generation", description: "Patient inquiry campaigns with HIPAA-compliant forms, call tracking, and CRM integration for appointment scheduling.", href: "/services/lead-generation" },
    { service: "Programmatic Advertising", description: "Reach healthcare consumers on premium publisher sites using anonymized behavioral targeting that respects patient privacy.", href: "/services/programmatic-advertising" },
  ],
  stats: [
    { value: "52%", label: "Avg. CPL Reduction" },
    { value: "3.2x", label: "Avg. Patient Lead Volume Increase" },
    { value: "100%", label: "HIPAA-Compliant Campaigns" },
    { value: "8.4%", label: "Avg. Landing Page Conversion Rate" },
  ],
  contentSections: [
    {
      heading: "Healthcare Advertising Services We Offer",
      body: `<p>Our healthcare advertising team manages patient acquisition campaigns across all major digital channels, with deep expertise in the compliance requirements unique to the healthcare industry.</p>
<p><strong>Patient Acquisition via Google Search:</strong> We target patients using high-commercial-intent keywords at the moment they're searching for a doctor, specialist, or healthcare service. Our healthcare search campaigns achieve average CPLs of $80-150 for specialty care and $40-80 for urgent care and primary care.</p>
<p><strong>Brand Awareness for Hospital Systems:</strong> Programmatic display and CTV campaigns build awareness and consideration for hospital systems and regional healthcare brands across their service areas, complementing direct response campaigns with upper-funnel visibility.</p>
<p><strong>Telehealth Patient Acquisition:</strong> The rapid growth of telehealth has created significant advertising opportunities. We build multi-channel campaigns for telehealth platforms focused on free consultation funnels, condition-specific targeting, and insurance acceptance messaging.</p>`,
    },
    {
      heading: "HIPAA-Compliant Advertising Architecture",
      body: `<p>Traditional web analytics and advertising tracking can create HIPAA compliance risks when health-related information is passed to Google, Meta, or other ad platforms through URL parameters, cookie data, or behavioral signals. Woofer Digital implements healthcare advertising with a privacy-first tracking architecture designed to maximize performance data collection while maintaining HIPAA compliance.</p>
<p>Our compliant tracking approach includes: server-side event tracking that anonymizes PII before sending to ad platforms, exclusion of condition-specific page tracking from remarketing audiences, BAA agreements with relevant vendors, and use of healthcare-specific consent management platforms where required.</p>`,
    },
    {
      heading: "Healthcare Advertising by Specialty",
      body: `<p>We have successful patient acquisition campaign experience across virtually every healthcare specialty:</p>
<ul>
<li>Primary Care & Internal Medicine</li>
<li>Orthopedics & Sports Medicine</li>
<li>Cardiology & Cardiovascular</li>
<li>Oncology & Cancer Care</li>
<li>Mental Health & Behavioral Health</li>
<li>Plastic Surgery & Aesthetics</li>
<li>Dental & Oral Surgery</li>
<li>Vision Care & Ophthalmology</li>
<li>Women's Health & OB/GYN</li>
<li>Urgent Care & Emergency Medicine</li>
<li>Physical Therapy & Rehabilitation</li>
<li>Telehealth & Digital Health</li>
</ul>`,
    },
  ],
  faqs: [
    {
      question: "Can healthcare practices advertise on Google and Facebook?",
      answer:
        "Yes, with important compliance considerations. Both Google and Meta have healthcare-specific advertising policies that restrict certain claims, before/after imagery, and audience targeting based on health conditions. Our team is expert in navigating these policies to run effective campaigns that don't risk account suspension.",
    },
    {
      question: "How do you ensure HIPAA compliance in healthcare advertising?",
      answer:
        "We implement a privacy-first tracking architecture: server-side conversion tracking that anonymizes patient data before sending to ad platforms, careful audience segmentation that doesn't expose condition information, and compliance review of all ad creative and landing pages before launch.",
    },
    {
      question: "What's a typical cost per patient lead for healthcare advertising?",
      answer:
        "CPL varies significantly by specialty and market. General urgent care and primary care: $30-80 CPL. Specialty care (orthopedics, cardiology, etc.): $80-200 CPL. Elective procedures (plastic surgery, LASIK, dental implants): $100-300 CPL. These are starting benchmarks — our campaigns typically achieve 30-50% below market benchmarks.",
    },
  ],
  relevantServices: [
    { label: "Google Ads Management", href: "/services/google-ads", description: "High-intent patient search campaigns" },
    { label: "Lead Generation", href: "/services/lead-generation", description: "Patient inquiry campaigns with HIPAA-compliant tracking" },
    { label: "Facebook & Instagram Ads", href: "/services/facebook-instagram-ads", description: "Awareness and retargeting for healthcare brands" },
    { label: "Programmatic Advertising", href: "/services/programmatic-advertising", description: "Contextual targeting on health publisher sites" },
  ],
  relatedLocations: [
    { label: "Healthcare Advertising New York", href: "/locations/new-york" },
    { label: "Healthcare Advertising Los Angeles", href: "/locations/los-angeles" },
    { label: "Healthcare Advertising Chicago", href: "/locations/chicago" },
    { label: "Healthcare Advertising Houston", href: "/locations/houston" },
    { label: "Healthcare Advertising Miami", href: "/locations/miami" },
  ],
  featuredTestimonialIds: ["t1", "t8"],
  featuredCaseStudyIds: ["medbridge-health-google-ads"],
  schemaType: "MedicalOrganization",
};
