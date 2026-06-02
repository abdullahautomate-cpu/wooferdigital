import type { IndustryPage } from "@/types/industry";

export const insuranceData: IndustryPage = {
  slug: "insurance",
  industry: "Insurance",
  metaTitle: "Insurance Advertising Agency | Insurance Lead Generation Services",
  metaDescription:
    "Expert insurance advertising for auto, home, life, and health insurance carriers and agencies. Compliant paid lead generation at scale. Get your free insurance ad audit.",
  breadcrumbs: [{ label: "Industries", href: "/industries" }, { label: "Insurance", href: "/industries/insurance" }],
  heroHeadline: "Insurance Advertising Agency That Delivers Exclusive, High-Intent Leads",
  heroSubheadline:
    "Compliant paid lead generation for auto, home, life, and health insurance — delivering exclusive, pre-qualified leads at competitive CPLs across all 50 states.",
  heroCTAText: "Get Free Insurance Ad Audit",
  introText: "Insurance is one of the most competitive and compliance-sensitive advertising categories in the United States. Google's insurance advertising policies, state insurance department regulations, and the complex network of carriers, MGAs, and independent agents create a uniquely challenging environment that requires specialized expertise. Woofer Digital manages insurance advertising campaigns for carriers, managing general agents (MGAs), and independent insurance agencies — delivering exclusive, high-intent leads at CPLs that consistently beat industry benchmarks.",
  challenges: [
    { title: "Extreme Google Competition", description: "Insurance keywords are among the 5 most expensive categories in Google Ads, with CPCs often exceeding $40-80+. Wasted spend is catastrophic without expert account management." },
    { title: "Compliance & State Regulations", description: "Insurance advertising must comply with state-specific regulations, carrier guidelines, and FTC rules around endorsements and testimonials." },
    { title: "Lead Exclusivity", description: "Shared lead providers sell the same leads to multiple agents, creating price-competitive situations. Exclusive lead generation through owned advertising is significantly more profitable." },
    { title: "Policy Type Qualification", description: "Auto, home, life, and health leads have very different qualification requirements and conversion economics. Campaigns must be segmented by policy type." },
  ],
  solutions: [
    { service: "Google Ads Management", description: "Intent-based search campaigns capturing active insurance shoppers at the moment they're comparing policies.", href: "/services/google-ads" },
    { service: "Facebook & Instagram Ads", description: "Life event targeting reaching people who recently married, had children, or bought homes — peak insurance need moments.", href: "/services/facebook-instagram-ads" },
    { service: "Lead Generation", description: "Exclusive insurance lead generation with pre-qualifying questions and real-time CRM delivery.", href: "/services/lead-generation" },
    { service: "Programmatic Advertising", description: "Intent data targeting reaching households actively shopping for insurance across the open web.", href: "/services/programmatic-advertising" },
  ],
  stats: [
    { value: "$45", label: "Avg. Cost Per Insurance Lead" },
    { value: "100%", label: "Exclusive Lead Generation" },
    { value: "3.2x", label: "Avg. Lead Volume Increase" },
    { value: "28%", label: "Avg. Quote-to-Bind Rate" },
  ],
  contentSections: [
    {
      heading: "Insurance Advertising by Product Line",
      body: `<p><strong>Auto Insurance:</strong> The largest and most competitive insurance category online. Google Search captures active shoppers comparing quotes. Facebook life-event targeting reaches new car buyers and people who recently moved. CPL target: $20-50.</p>
<p><strong>Home Insurance:</strong> Peak conversion periods include home purchase events and annual renewal cycles. We use geo-targeting around new construction areas and ZIP codes with high refinance activity. CPL target: $25-60.</p>
<p><strong>Life Insurance:</strong> Life stage targeting via Facebook (new parents, recent marriages, approaching retirement) generates high-quality life insurance leads. Google captures "need life insurance" and coverage-specific queries. CPL target: $35-80.</p>
<p><strong>Health Insurance:</strong> Open enrollment periods create massive traffic spikes requiring careful budget management. We build year-round campaigns supplemented by aggressive AEP/OEP strategies. CPL target: $30-75.</p>
<p><strong>Commercial Insurance:</strong> B2B insurance advertising targeting business owners by industry, size, and risk profile through LinkedIn and programmatic channels.</p>`,
    },
  ],
  faqs: [
    {
      question: "How do you generate exclusive insurance leads?",
      answer: "We build and manage insurance companies' own advertising campaigns on Google, Facebook, and other platforms — directing traffic exclusively to your quote forms and landing pages. Unlike lead aggregators who sell the same lead to multiple buyers, our leads are 100% exclusive to your organization.",
    },
    {
      question: "How do you comply with insurance advertising regulations?",
      answer: "We review all creative against applicable state insurance department guidelines, carrier guidelines, and FTC advertising regulations before launch. Our team includes compliance-aware strategists experienced in insurance advertising policy requirements.",
    },
  ],
  relevantServices: [
    { label: "Google Ads Management", href: "/services/google-ads", description: "Insurance search campaigns" },
    { label: "Lead Generation", href: "/services/lead-generation", description: "Exclusive insurance leads" },
    { label: "Facebook & Instagram Ads", href: "/services/facebook-instagram-ads", description: "Life event insurance targeting" },
  ],
  relatedLocations: [
    { label: "Insurance Advertising New York", href: "/locations/new-york" },
    { label: "Insurance Advertising Florida", href: "/locations/miami" },
    { label: "Insurance Advertising Texas", href: "/locations/houston" },
    { label: "Insurance Advertising California", href: "/locations/los-angeles" },
  ],
  featuredTestimonialIds: ["t12", "t5"],
  featuredCaseStudyIds: ["medbridge-health-google-ads"],
  schemaType: "InsuranceAgency",
};
