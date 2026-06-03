import type { IndustryPage } from "@/types/industry";

export const dentalData: IndustryPage = {
  slug: "dental",
  industry: "Dental Practices",
  metaTitle: "Dental Advertising Agency | Dentists",
  metaDescription:
    "Expert dental advertising for general dentistry, orthodontics, implants & cosmetic dentistry. Google Ads, Facebook & local targeting. Free dental ad audit.",
  breadcrumbs: [{ label: "Industries", href: "/industries" }, { label: "Dental", href: "/industries/dental" }],
  heroHeadline: "Dental Advertising Agency That Fills Your Schedule with New Patients",
  heroSubheadline:
    "Proven paid advertising for general dentists, orthodontists, oral surgeons, and cosmetic dentistry practices — bringing in new patients at predictable cost.",
  heroCTAText: "Get Free Dental Ad Audit",
  introText: "Dental patient acquisition through paid advertising is one of the most straightforward and measurable return-on-investment opportunities available to practice owners. A single new patient is worth $1,500-5,000 in annual revenue, and a dental implant or Invisalign case can generate $4,000-8,000 or more in a single treatment. Woofer Digital manages new patient acquisition campaigns for dental practices ranging from solo practitioners to DSO groups with 50+ locations, achieving consistent new patient volumes at costs well below industry benchmarks.",
  challenges: [
    { title: "High Local Competition", description: "Every metro area has dozens of competing dental practices bidding on the same local keywords, driving up CPCs and making undifferentiated campaigns expensive." },
    { title: "Insurance & Self-Pay Targeting", description: "Matching ad messaging to insurance acceptance status and reaching self-pay patients for elective procedures requires careful audience and creative strategy." },
    { title: "Procedure-Specific Marketing", description: "Different procedures (emergency care, implants, Invisalign, whitening) require entirely different campaign strategies, landing pages, and pricing messaging." },
    { title: "Appointment No-Shows", description: "Leads that don't show up for appointments waste money. Campaign strategy must include qualification and booking friction to improve appointment quality." },
  ],
  solutions: [
    { service: "Google Ads Management", description: "Local search campaigns targeting patients searching for a dentist in your specific service area.", href: "/services/google-ads" },
    { service: "Facebook & Instagram Ads", description: "Visual campaigns showcasing smile transformations and practice quality to targeted local demographics.", href: "/services/facebook-instagram-ads" },
    { service: "Lead Generation", description: "New patient inquiry campaigns with appointment scheduling integration and call tracking.", href: "/services/lead-generation" },
  ],
  stats: [
    { value: "4.2x", label: "Avg. New Patient Volume Increase" },
    { value: "$62", label: "Avg. Cost Per New Patient Lead" },
    { value: "2-week", label: "Waitlist Achieved for Partner Practices" },
    { value: "9.1%", label: "Avg. Landing Page Conversion Rate" },
  ],
  contentSections: [
    {
      heading: "Dental Advertising by Procedure Type",
      body: `<p>We build procedure-specific campaigns that target patients at the right stage of their decision journey for each treatment type.</p>
<p><strong>General & Family Dentistry:</strong> Local search campaigns targeting "dentist near me" and service-area specific searches. Goal: maximize new patient volume at lowest CPL.</p>
<p><strong>Dental Implants:</strong> High-ticket procedure requiring trust-building creative and multi-step funnels. Targeting: adults 45+ with household income $75K+. CPL target: $80-150.</p>
<p><strong>Invisalign & Clear Aligners:</strong> Visual before/after creative on Instagram and Facebook combined with Google Search. Strong social proof emphasis. Targeting: 18-45 professionals.</p>
<p><strong>Cosmetic Dentistry:</strong> High-aspiration creative focusing on confidence and transformation. Multiple campaign formats including before/after galleries, video, and patient testimonials.</p>
<p><strong>Emergency Dental:</strong> Time-sensitive campaigns with strong call-to-action and prominent click-to-call for mobile users experiencing dental emergencies.</p>`,
    },
    {
      heading: "Local Dental Marketing Strategies",
      body: `<p>Dental advertising is inherently local. Patients choose dentists within a reasonable drive time from their home or work — typically 5-15 miles in suburban areas, 2-5 miles in urban markets. Our local targeting strategy maximizes reach within your service area while minimizing wasted spend on patients too far away to convert.</p>
<p>We use radius targeting, ZIP code targeting, and call area targeting to ensure every dollar of your ad budget is reaching realistic prospective patients. For practices with multiple locations, we build geo-fenced campaigns for each location.</p>`,
    },
  ],
  faqs: [
    {
      question: "What's the best advertising platform for dental practices?",
      answer: "Google Search delivers the highest-intent dental patients — people actively searching for a dentist in your area. Facebook and Instagram work well for high-value procedures like implants and Invisalign that benefit from visual storytelling and social proof. Most practices see the best results combining both channels.",
    },
    {
      question: "What's a typical cost per new dental patient?",
      answer: "For general dentistry, we typically achieve CPLs of $30-80 per new patient inquiry. For implants and cosmetic cases, CPLs of $80-200 are common — but with LTV of $4,000-15,000+ per case, the economics are excellent. Our campaigns consistently achieve CPLs 30-50% below market benchmarks.",
    },
  ],
  relevantServices: [
    { label: "Google Ads Management", href: "/services/google-ads", description: "Local dental search campaigns" },
    { label: "Facebook & Instagram Ads", href: "/services/facebook-instagram-ads", description: "Visual cosmetic dentistry campaigns" },
    { label: "Lead Generation", href: "/services/lead-generation", description: "New patient acquisition" },
  ],
  relatedLocations: [
    { label: "Dental Advertising New York", href: "/locations/new-york" },
    { label: "Dental Advertising Los Angeles", href: "/locations/los-angeles" },
    { label: "Dental Advertising Chicago", href: "/locations/chicago" },
    { label: "Dental Advertising Houston", href: "/locations/houston" },
  ],
  featuredTestimonialIds: ["t8", "t1"],
  featuredCaseStudyIds: ["medbridge-health-google-ads"],
  schemaType: "LocalBusiness",
};
