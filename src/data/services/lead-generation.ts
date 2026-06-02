import type { ServicePage } from "@/types/service";

export const leadGenerationData: ServicePage = {
  slug: "lead-generation",
  title: "Lead Generation Advertising Services",
  metaTitle: "Lead Generation Agency | Paid Lead Generation Services USA",
  metaDescription:
    "Expert paid lead generation services across Google, Meta, programmatic & more. B2B, healthcare, legal, real estate, and home services lead gen. Free audit available.",
  breadcrumbs: [{ label: "Services", href: "/services" }, { label: "Lead Generation", href: "/services/lead-generation" }],
  heroHeadline: "Lead Generation Advertising That Delivers Quality Leads at Scale",
  heroSubheadline:
    "Data-driven paid lead generation across every major platform — engineered to lower your cost per lead while increasing lead quality and conversion rates.",
  heroCTAText: "Get Free Lead Gen Audit",
  heroCTAHref: "/contact",
  badge: "Performance Lead Generation Agency",
  introText:
    "Lead generation is the lifeblood of service businesses, professional practices, and B2B companies across every industry. But the difference between a lead generation campaign that produces high-cost, low-quality inquiries and one that consistently delivers ready-to-buy prospects is enormous — and it determines whether paid advertising becomes a scalable growth engine or a money pit. Woofer Digital has built and optimized lead generation campaigns across virtually every service industry: legal, healthcare, financial services, insurance, real estate, home services, dental, SaaS, and B2B technology. Our approach combines platform expertise, audience precision, conversion-optimized landing pages, and continuous data-driven optimization to deliver leads that actually convert to paying customers.",
  stats: [
    { value: "64%", label: "Avg. CPL Reduction", suffix: "" },
    { value: "3.8x", label: "Avg. Lead Volume Increase", suffix: "" },
    { value: "42%", label: "Avg. Lead-to-Close Rate", suffix: "" },
    { value: "50+", label: "Industries Served", suffix: "" },
  ],
  contentSections: [
    {
      heading: "Our Lead Generation Services by Channel",
      body: `<p>Effective lead generation rarely happens on a single platform. We build multi-channel lead gen programs that reach prospects at different stages of their buying journey.</p>`,
      subSections: [
        {
          heading: "Google Ads Lead Generation",
          body: `<p>Google Search captures the highest-intent leads in any industry — people actively searching for solutions to their problems right now. We build keyword-targeted campaigns around high-commercial-intent queries, with landing pages designed for one purpose: converting visitors into qualified leads. Our Google lead gen campaigns achieve 20-60% lower CPLs than industry benchmarks through superior keyword strategy, ad copy, and landing page optimization.</p>`,
        },
        {
          heading: "Facebook & Instagram Lead Generation",
          body: `<p>Meta's targeting capabilities make it ideal for reaching audiences with demographic and interest profiles that match your ideal customer. Facebook Lead Generation campaigns use native forms that convert at 2-3x the rate of website landing pages — because users never leave the app. We use Facebook for both volume-focused and quality-focused lead gen, building audience segments that deliver the leads most likely to convert to customers.</p>`,
        },
        {
          heading: "B2B Lead Generation",
          body: `<p>B2B lead generation requires targeting precision that consumer platforms often can't match. For B2B clients, we combine LinkedIn Ads (targeting by company, industry, job title, and seniority), programmatic ABM (account-based marketing targeting specific companies), and Google Search (capturing bottom-funnel B2B queries). Our B2B campaigns focus on pipeline quality rather than raw lead volume, with lead scoring and CRM integration built in from the start.</p>`,
        },
        {
          heading: "Industry-Specific Lead Gen: Healthcare, Legal, Real Estate",
          body: `<p>High-value service verticals like healthcare, legal, and real estate require specialized knowledge of compliance requirements, audience behavior, and the specific lead quality factors that correlate with closed business. We bring deep expertise in healthcare HIPAA compliance, legal advertising ethical restrictions, real estate buyer/seller intent signals, and the specific metrics (cost-per-consultation, cost-per-appointment, cost-per-signed-case) that matter in each industry.</p>`,
        },
        {
          heading: "Landing Page Optimization for Lead Gen",
          body: `<p>The landing page is where most lead generation campaigns succeed or fail. We build and continuously optimize landing pages for lead gen using proven frameworks: minimal navigation, benefit-focused headline, social proof above the fold, simple forms (3 fields maximum for initial capture), clear privacy reassurance, and prominent click-to-call for mobile visitors. Our landing pages average conversion rates of 8-15% — 3-5x the industry average.</p>`,
        },
      ],
    },
    {
      heading: "Lead Quality vs. Lead Volume: Finding the Right Balance",
      body: `<p>One of the most important conversations in lead generation is about quality vs. quantity. It's easy to generate high volumes of cheap leads — but if those leads don't convert to customers, high volume is worthless. Conversely, if lead quality is excellent but volume is too low to sustain the business, you haven't built a real growth channel.</p>
<p>Our approach starts with understanding your actual business economics: What does a lead need to look like to be worth pursuing? What's the typical close rate from qualified leads? What's the lifetime value of a new customer? With these inputs, we work backward to determine what CPL is acceptable and what quality filters we should build into the campaign (qualifying questions, intent signals, pre-screening steps).</p>
<p>We integrate with your CRM to track lead quality through the funnel — not just lead volume — and use downstream conversion data to optimize campaigns toward the leads most likely to become customers, not just the leads most likely to fill out a form.</p>`,
    },
    {
      heading: "Lead Generation for Service Businesses by Industry",
      body: `<p>Every industry has its own lead generation dynamics, compliance requirements, and cost benchmarks. Our specialized experience includes:</p>
<ul>
<li><strong>Healthcare Lead Generation:</strong> Patient acquisition for hospitals, specialty practices, and telehealth platforms. HIPAA-compliant landing pages and lead handling. Typical CPL: $50-150.</li>
<li><strong>Legal Lead Generation:</strong> Case leads for personal injury, criminal defense, family law, and business litigation firms. Qualifying lead forms and call tracking. Typical CPL: $80-250.</li>
<li><strong>Real Estate Lead Generation:</strong> Buyer and seller leads for individual agents, teams, and brokerages. Property valuation and listing presentation funnels. Typical CPL: $20-60.</li>
<li><strong>Insurance Lead Generation:</strong> Exclusive, high-intent insurance leads for auto, home, life, and health insurance carriers and agents. Typical CPL: $30-80.</li>
<li><strong>Home Services Lead Generation:</strong> Service inquiry leads for HVAC, plumbing, roofing, remodeling, and other home services. Local geographic targeting and call-focused campaigns. Typical CPL: $20-60.</li>
<li><strong>SaaS Lead Generation:</strong> Free trial signups, demo requests, and qualified pipeline for SaaS companies. Integration with HubSpot, Salesforce, and other CRM platforms.</li>
</ul>`,
    },
  ],
  processSteps: [
    { number: "01", title: "Lead Quality Analysis", description: "Understand your ideal customer profile, conversion rates, and lead-to-sale economics to set the right CPL target." },
    { number: "02", title: "Channel & Funnel Strategy", description: "Select the right channels and build conversion-optimized landing pages with qualifying logic." },
    { number: "03", title: "CRM Integration", description: "Connect lead generation with your CRM to track quality and enable downstream conversion optimization." },
    { number: "04", title: "Optimize for Revenue", description: "Use downstream conversion data to optimize campaigns toward revenue, not just lead volume." },
  ],
  faqs: [
    {
      question: "What is a good cost per lead?",
      answer:
        "A good cost per lead depends entirely on your industry and the lifetime value of a customer. For home services, $30-80 CPL is typical. For legal, $100-300 is common. For healthcare, $50-150. The right CPL isn't the cheapest possible — it's the one that makes economic sense given your close rate and customer LTV.",
    },
    {
      question: "How do you improve lead quality?",
      answer:
        "Lead quality improvement starts with upstream targeting (better audience selection) and continues through qualifying questions in lead forms, optimized landing page messaging that sets accurate expectations, pre-screening steps for high-value verticals, and CRM integration to feed downstream conversion data back into campaign optimization.",
    },
    {
      question: "Which platform is best for lead generation?",
      answer:
        "The best platform depends on your industry and audience. Google Search captures the highest-intent leads (people actively searching for solutions). Meta reaches large audiences with demographic targeting. LinkedIn excels for B2B. We typically recommend testing 2-3 platforms simultaneously and scaling the ones that deliver the best leads relative to cost.",
    },
    {
      question: "How long does it take to see lead generation results?",
      answer:
        "Google Search campaigns typically generate leads within 1-2 weeks of launch. Meta lead gen campaigns often start generating leads within days. However, optimizing toward lead quality — not just volume — takes 30-90 days as we gather conversion data and refine audience and keyword targeting.",
    },
    {
      question: "Can you integrate with our CRM?",
      answer:
        "Yes. We integrate lead generation campaigns with all major CRM platforms including Salesforce, HubSpot, Zoho, GoHighLevel, and custom CRM systems. CRM integration is essential for tracking lead quality and using downstream conversion data to optimize campaigns toward actual business results.",
    },
  ],
  featuredTestimonialIds: ["t1", "t4", "t12"],
  featuredCaseStudyIds: ["medbridge-health-google-ads", "reyes-law-firm-lead-gen"],
  relatedServices: [
    { label: "Google Ads Management", href: "/services/google-ads" },
    { label: "Facebook & Instagram Ads", href: "/services/facebook-instagram-ads" },
    { label: "Programmatic Advertising", href: "/services/programmatic-advertising" },
    { label: "Media Buying Services", href: "/services/media-buying" },
  ],
  relatedIndustries: [
    { label: "Healthcare Lead Generation", href: "/industries/healthcare" },
    { label: "Law Firm Advertising", href: "/industries/law-firm" },
    { label: "Real Estate Lead Generation", href: "/industries/real-estate" },
    { label: "Insurance Lead Generation", href: "/industries/insurance" },
    { label: "Home Services Advertising", href: "/industries/home-services" },
  ],
  relatedLocations: [
    { label: "Lead Generation Agency New York", href: "/locations/new-york" },
    { label: "Lead Generation Agency Los Angeles", href: "/locations/los-angeles" },
    { label: "Lead Generation Agency Chicago", href: "/locations/chicago" },
    { label: "Lead Generation Agency Houston", href: "/locations/houston" },
    { label: "Lead Generation Agency Miami", href: "/locations/miami" },
  ],
  serviceSchema: {
    serviceType: "Lead Generation Advertising",
    areaServed: ["United States"],
    description:
      "Paid lead generation services across Google, Meta, LinkedIn, and programmatic channels for B2B, healthcare, legal, real estate, and service businesses.",
  },
};
