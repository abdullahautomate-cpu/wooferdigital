import type { IndustryPage } from "@/types/industry";

export const financialServicesData: IndustryPage = {
  slug: "financial-services",
  industry: "Financial Services",
  metaTitle: "Financial Services Marketing Agency",
  metaDescription:
    "Compliant financial services advertising for banks, RIAs, lenders & fintech. Google Ads, Meta, CTV & programmatic for regulated financial brands. Free audit.",
  breadcrumbs: [{ label: "Industries", href: "/industries" }, { label: "Financial Services", href: "/industries/financial-services" }],
  heroHeadline: "Financial Services Advertising That Builds Trust and Drives Conversions",
  heroSubheadline: "Compliant paid advertising for banks, credit unions, RIAs, mortgage lenders, and fintech companies — driving account openings, loan applications, and AUM growth.",
  heroCTAText: "Get Free Finance Ad Audit",
  introText: "Financial services advertising sits at the intersection of strict regulatory compliance, high-stakes consumer decisions, and intense competitive pressure. From FINRA rules governing investment advisor advertising to TILA requirements for lending disclosures to SEC regulations for fund marketing, the regulatory landscape is complex and unforgiving. Woofer Digital has built a specialized financial services practice that delivers exceptional advertising results while navigating these compliance requirements with confidence.",
  challenges: [
    { title: "Heavy Regulatory Environment", description: "Financial advertising is governed by FINRA, SEC, CFPB, FTC, and state regulations. Non-compliant ads can result in fines, regulatory action, and reputational damage." },
    { title: "Consumer Trust Deficit", description: "Financial services brands must overcome inherent consumer skepticism. Advertising must build credibility and trust before asking for high-commitment actions like account openings or investment consultations." },
    { title: "Rate & Offer Sensitivity", description: "Interest rate advertising requires rate disclosures, and rate changes can make existing creative obsolete quickly. Dynamic creative strategies accommodate rate volatility." },
    { title: "Long Decision Cycles for Investment Products", description: "Wealth management and investment advertising involves long nurture cycles. Multi-touch campaigns across channels are necessary for conversion." },
  ],
  solutions: [
    { service: "Google Ads Management", description: "High-intent search campaigns for loan applications, account openings, and financial advisor searches.", href: "/services/google-ads" },
    { service: "Connected TV Advertising", description: "Brand-building CTV campaigns that reach affluent households on premium streaming platforms.", href: "/services/connected-tv" },
    { service: "Programmatic Advertising", description: "Precision programmatic targeting reaching high-net-worth individuals and small business owners.", href: "/services/programmatic-advertising" },
    { service: "Facebook & Instagram Ads", description: "Life event targeting for mortgage refinancing, retirement planning, and investment account openings.", href: "/services/facebook-instagram-ads" },
  ],
  stats: [
    { value: "78%", label: "Avg. Brand Awareness Lift via CTV" },
    { value: "3.4x", label: "Avg. Lead Volume Increase" },
    { value: "$2.4M", label: "AUM Generated Per Campaign" },
    { value: "42%", label: "Avg. Application Conversion Rate" },
  ],
  contentSections: [
    {
      heading: "Financial Services Advertising by Sector",
      body: `<p><strong>Banking & Credit Unions:</strong> Account opening campaigns for checking, savings, and CD products. Google Search captures high-intent searches ("best high-yield savings account," "free checking near me"). Member acquisition campaigns for credit unions with geographic and SEG-based targeting.</p>
<p><strong>Mortgage & Lending:</strong> Rate-driven search campaigns for purchase and refinance mortgages, home equity loans, and personal loans. Dynamic creative updates accommodate rate changes. Pre-approval application campaigns with qualifying questions for lead quality.</p>
<p><strong>Wealth Management & RIAs:</strong> Affluent audience targeting through programmatic, LinkedIn, and CTV for investment advisory services. Trust-building content promotion and event registration campaigns for financial advisor lead generation.</p>
<p><strong>Fintech & Digital Finance:</strong> App install and account opening campaigns for neobanks, digital investment platforms, and financial wellness apps. Cost-per-install and cost-per-funded-account optimization.</p>`,
    },
  ],
  faqs: [
    {
      question: "How do you ensure compliance in financial advertising?",
      answer: "Our financial services team has experience with FINRA, SEC, CFPB, and state regulations. We have compliance review processes for all creative and conduct pre-launch audits. For investment advisor clients, we can coordinate with your compliance officer before any campaign goes live.",
    },
    {
      question: "What's the best channel for financial services lead generation?",
      answer: "Google Search is highly effective for bottom-funnel financial products where consumers are actively comparing options (mortgages, savings accounts, investments). CTV and programmatic excel for brand building and reaching affluent demographics. LinkedIn works well for B2B financial products and wealth management firms targeting executives.",
    },
  ],
  relevantServices: [
    { label: "Google Ads Management", href: "/services/google-ads", description: "Financial search campaigns" },
    { label: "Connected TV Advertising", href: "/services/connected-tv", description: "Brand building for financial firms" },
    { label: "Programmatic Advertising", href: "/services/programmatic-advertising", description: "Affluent audience targeting" },
  ],
  relatedLocations: [
    { label: "Financial Services Advertising New York", href: "/locations/new-york" },
    { label: "Financial Services Advertising Chicago", href: "/locations/chicago" },
    { label: "Financial Services Advertising Boston", href: "/locations/boston" },
    { label: "Financial Services Advertising San Francisco", href: "/locations/san-diego" },
  ],
  featuredTestimonialIds: ["t5", "t10"],
  featuredCaseStudyIds: ["nexus-saas-programmatic"],
  schemaType: "FinancialService",
};
