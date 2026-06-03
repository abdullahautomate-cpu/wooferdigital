import type { IndustryPage } from "@/types/industry";

export const automotiveData: IndustryPage = {
  slug: "automotive",
  industry: "Automotive",
  metaTitle: "Automotive Advertising Agency | Car Ads",
  metaDescription:
    "Expert automotive advertising for dealerships, auto groups & automotive brands. Google, Meta, programmatic & CTV campaigns. Free automotive ad audit.",
  breadcrumbs: [{ label: "Industries", href: "/industries" }, { label: "Automotive", href: "/industries/automotive" }],
  heroHeadline: "Automotive Advertising Agency That Drives Showroom Visits and VDP Views",
  heroSubheadline: "Performance advertising for automotive dealerships, auto groups, and automotive brands — driving inventory views, test drive requests, and service department growth.",
  heroCTAText: "Get Free Auto Ad Audit",
  introText: "Automotive advertising has undergone a complete transformation in the digital age. The typical car buyer now spends 14+ hours researching online before visiting a dealership, and the brand that appears most prominently across that research journey wins the showroom visit. Woofer Digital manages automotive advertising across the full digital ecosystem, with particular expertise in OEM-compliant tier 2 and tier 3 campaigns, VDP (vehicle detail page) traffic optimization, and service department customer acquisition.",
  challenges: [
    { title: "Inventory Volatility", description: "Dealership inventory changes constantly. Advertising must reflect available vehicles in real time, or you drive traffic for cars you don't have." },
    { title: "OEM Compliance", description: "Franchise dealers must comply with OEM advertising guidelines and co-op requirements. Campaigns must balance brand compliance with local dealership differentiation." },
    { title: "Multi-Platform Research Journey", description: "Auto shoppers research across Google, YouTube, Facebook, third-party listing sites, and manufacturer websites. A coordinated multi-platform strategy is essential." },
    { title: "Service vs. Sales Campaigns", description: "Sales (new and used vehicle acquisition) and service (oil changes, tires, repairs) have completely different audiences, messaging, and profitability profiles." },
  ],
  solutions: [
    { service: "Google Ads Management", description: "Make/model specific search campaigns, dynamic inventory ads, and YouTube pre-roll for automotive brand awareness.", href: "/services/google-ads" },
    { service: "Facebook & Instagram Ads", description: "Dynamic vehicle catalog ads, trade-in offer campaigns, and service department acquisition.", href: "/services/facebook-instagram-ads" },
    { service: "Programmatic Advertising", description: "In-market shopper targeting using automotive intent data from third-party providers and OEM first-party data.", href: "/services/programmatic-advertising" },
    { service: "Connected TV Advertising", description: "Broadcast-quality CTV campaigns reaching in-market car buyers during streaming TV viewing.", href: "/services/connected-tv" },
  ],
  stats: [
    { value: "30%", label: "Avg. Below-Market CPM via Negotiated Buys" },
    { value: "3.6x", label: "Avg. VDP Traffic Increase" },
    { value: "42%", label: "Avg. Service Appointments Increase" },
    { value: "78%", label: "Avg. Brand Awareness Lift via CTV" },
  ],
  contentSections: [
    {
      heading: "Automotive Advertising Strategy",
      body: `<p><strong>New Vehicle Sales:</strong> Make/model-specific Google Search campaigns, dynamic vehicle ads on Facebook, and YouTube pre-roll targeting in-market shoppers. OEM co-op integration and compliance review included.</p>
<p><strong>Used & CPO Inventory:</strong> Dynamic inventory ads that automatically update creative based on current lot inventory. Competitive make/model conquesting to capture shoppers considering competing brands.</p>
<p><strong>Service Department:</strong> Retention campaigns targeting past customers for oil changes, tires, and scheduled maintenance. Conquest campaigns reaching competitor brand owners in your service area. Customer reactivation campaigns for lapsed service customers.</p>
<p><strong>Finance & Special Offers:</strong> Rate-sensitive campaigns promoting APR offers, lease specials, and incentive programs. Dynamic creative that updates as offers change. Trade-in campaigns using home equity and vehicle valuation offers.</p>`,
    },
  ],
  faqs: [
    {
      question: "Can you handle OEM co-op compliance for franchise dealers?",
      answer: "Yes. We have experience working within OEM co-op advertising guidelines for major manufacturers including Ford, GM, Toyota, Honda, and others. We can submit creative for OEM approval and structure campaigns to maximize co-op reimbursement eligibility.",
    },
    {
      question: "How do you advertise dynamic inventory that changes daily?",
      answer: "We use dynamic inventory feed integrations that pull your current DMS inventory data to populate vehicle-specific ads automatically. As inventory is sold or acquired, ads update within 24 hours to reflect your actual lot.",
    },
  ],
  relevantServices: [
    { label: "Google Ads Management", href: "/services/google-ads", description: "Make/model search campaigns" },
    { label: "Facebook & Instagram Ads", href: "/services/facebook-instagram-ads", description: "Dynamic vehicle catalog ads" },
    { label: "Programmatic Advertising", href: "/services/programmatic-advertising", description: "In-market shopper targeting" },
    { label: "Connected TV Advertising", href: "/services/connected-tv", description: "Automotive CTV campaigns" },
  ],
  relatedLocations: [
    { label: "Automotive Advertising New York", href: "/locations/new-york" },
    { label: "Automotive Advertising Los Angeles", href: "/locations/los-angeles" },
    { label: "Automotive Advertising Houston", href: "/locations/houston" },
    { label: "Automotive Advertising Dallas", href: "/locations/dallas" },
  ],
  featuredTestimonialIds: ["t10", "t7"],
  featuredCaseStudyIds: ["nexus-saas-programmatic"],
  schemaType: "AutomotiveBusiness",
};
