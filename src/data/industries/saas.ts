import type { IndustryPage } from "@/types/industry";

export const saasData: IndustryPage = {
  slug: "saas",
  industry: "SaaS & Technology",
  metaTitle: "SaaS Advertising Agency | B2B Tech",
  metaDescription:
    "Expert SaaS & B2B tech advertising for demand generation, trial acquisition & pipeline growth. Google Ads, LinkedIn, programmatic & ABM. Free SaaS audit.",
  breadcrumbs: [{ label: "Industries", href: "/industries" }, { label: "SaaS", href: "/industries/saas" }],
  heroHeadline: "SaaS Advertising Agency That Drives Pipeline, Not Just Clicks",
  heroSubheadline:
    "Demand generation and direct response advertising for SaaS and B2B tech companies — focused on pipeline quality, trial conversion, and CAC efficiency.",
  heroCTAText: "Get Free SaaS Ad Audit",
  introText: "SaaS advertising requires a fundamentally different approach than consumer or local business advertising. The buying committee, long sales cycles, high deal values, and SaaS-specific metrics (CAC, LTV, ARR, NRR) create a unique set of challenges and opportunities. At Woofer Digital, we have deep expertise in SaaS demand generation, including free trial acquisition, demo request campaigns, product-led growth advertising, and account-based marketing for enterprise SaaS companies.",
  challenges: [
    { title: "Long Sales Cycles", description: "B2B SaaS deals can take 30-180 days to close. Advertising must create touchpoints throughout the funnel, not just at the bottom." },
    { title: "Multi-Stakeholder Decisions", description: "SaaS purchases involve multiple decision-makers. Campaigns must address different personas with different messaging." },
    { title: "Proving Paid Media ROI", description: "Long attribution windows and multi-touch journeys make it difficult to connect paid media spend to closed revenue without sophisticated attribution." },
    { title: "Rising CAC Pressure", description: "VC-backed SaaS companies face intense CAC efficiency pressure. Advertising must deliver qualified pipeline, not just MQLs." },
  ],
  solutions: [
    { service: "Google Ads Management", description: "Bottom-funnel search campaigns capturing buyers actively researching solutions in your category.", href: "/services/google-ads" },
    { service: "Programmatic Advertising", description: "ABM and intent-based programmatic targeting specific companies and personas at scale.", href: "/services/programmatic-advertising" },
    { service: "Facebook & Instagram Ads", description: "Awareness and retargeting campaigns for top-of-funnel demand generation.", href: "/services/facebook-instagram-ads" },
    { service: "Lead Generation", description: "Free trial, demo, and content offer campaigns with CRM integration.", href: "/services/lead-generation" },
  ],
  stats: [
    { value: "68%", label: "Avg. Lead Quality Improvement" },
    { value: "34%", label: "Avg. Trial-to-Paid Rate Increase" },
    { value: "$2.4M", label: "Pipeline Generated Per Engagement" },
    { value: "5.1x", label: "Avg. Ad Spend ROI" },
  ],
  contentSections: [
    {
      heading: "SaaS Advertising Across the Funnel",
      body: `<p><strong>Top-of-Funnel Demand Generation:</strong> For SaaS companies with limited brand awareness, demand creation campaigns build category awareness and introduce your solution to target personas. Content offer campaigns (ebooks, webinars, templates), podcast advertising, and LinkedIn thought leadership promotion reach your ICP before they're actively searching.</p>
<p><strong>Mid-Funnel Consideration:</strong> Comparison ads, case study promotions, and product-benefit-focused content target prospects who are aware of the problem and evaluating solutions. Retargeting sequences serve sequential messaging that moves prospects through the consideration stage.</p>
<p><strong>Bottom-of-Funnel Conversion:</strong> Demo request campaigns, free trial acquisition, and branded search campaigns capture high-intent prospects ready to evaluate your product. Google Search is particularly effective here for categories with established search demand.</p>
<p><strong>Account-Based Marketing (ABM):</strong> For enterprise SaaS targeting specific named accounts, programmatic ABM campaigns serve targeted ads to individual companies' IP ranges and job titles, dramatically increasing brand recall and conversion rates from target accounts.</p>`,
    },
  ],
  faqs: [
    {
      question: "Which advertising channels work best for SaaS?",
      answer: "Google Search captures bottom-funnel prospects actively searching for solutions. LinkedIn excels for B2B personas with job title and company targeting. Programmatic ABM reaches target accounts across the web. The optimal mix depends on your ACV, buyer persona, and sales cycle length.",
    },
    {
      question: "How do you attribute revenue to paid advertising in SaaS?",
      answer: "We implement multi-touch attribution using your CRM (HubSpot, Salesforce) connected to ad platforms. We report on both MQL volume and quality-adjusted pipeline, with opportunity creation rate and pipeline-to-revenue tracking as primary optimization signals.",
    },
  ],
  relevantServices: [
    { label: "Google Ads Management", href: "/services/google-ads", description: "Bottom-funnel SaaS search campaigns" },
    { label: "Programmatic Advertising", href: "/services/programmatic-advertising", description: "ABM and intent-based targeting" },
    { label: "Lead Generation", href: "/services/lead-generation", description: "Trial and demo acquisition campaigns" },
  ],
  relatedLocations: [
    { label: "SaaS Advertising San Francisco", href: "/locations/san-diego" },
    { label: "SaaS Advertising New York", href: "/locations/new-york" },
    { label: "SaaS Advertising Austin", href: "/locations/austin" },
    { label: "SaaS Advertising Seattle", href: "/locations/seattle" },
    { label: "SaaS Advertising Boston", href: "/locations/boston" },
  ],
  featuredTestimonialIds: ["t3", "t5"],
  featuredCaseStudyIds: ["nexus-saas-programmatic"],
  schemaType: "Organization",
};
