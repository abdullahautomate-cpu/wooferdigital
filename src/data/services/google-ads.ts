import type { ServicePage } from "@/types/service";

export const googleAdsData: ServicePage = {
  slug: "google-ads",
  title: "Google Ads Management Services",
  metaTitle: "Google Ads Management Agency | PPC Management Services",
  metaDescription:
    "Expert Google Ads management from certified PPC specialists. Search, Display, Shopping, YouTube, and Performance Max campaigns. Get your free Google Ads audit today.",
  breadcrumbs: [{ label: "Services", href: "/services" }, { label: "Google Ads", href: "/services/google-ads" }],
  heroHeadline: "Google Ads Management That Delivers Measurable Revenue Growth",
  heroSubheadline:
    "Certified Google Ads specialists managing Search, Display, Shopping, YouTube, and Performance Max campaigns — with a singular focus on your ROI.",
  heroCTAText: "Get Free Google Ads Audit",
  heroCTAHref: "/contact",
  badge: "Google Premier Partner Agency",
  introText:
    "Google Ads remains the most powerful intent-based advertising platform on the internet. When someone searches for your product or service, they're raising their hand — and a well-executed Google Ads campaign puts your brand directly in front of that high-intent prospect at the exact moment they're ready to act. But the gap between a mediocre Google Ads account and a high-performing one is enormous. Poor account structure, wasted spend on irrelevant keywords, weak ad copy, and misaligned landing pages can drain thousands of dollars per month with minimal results. Woofer Digital's Google Ads specialists build and manage accounts designed from the ground up to maximize conversion volume and minimize wasted spend.",
  stats: [
    { value: "52%", label: "Avg. CPL Reduction", suffix: "" },
    { value: "340%", label: "Avg. ROAS Improvement", suffix: "" },
    { value: "$500M+", label: "Google Ads Spend Managed", suffix: "" },
    { value: "98%", label: "Client Satisfaction Score", suffix: "" },
  ],
  contentSections: [
    {
      heading: "Complete Google Ads Management Services",
      body: `<p>Our Google Ads management covers every campaign type and objective, from direct response lead generation to ecommerce sales, brand awareness, and video marketing.</p>`,
      subSections: [
        {
          heading: "Google Search Ads",
          body: `<p>Search campaigns are the foundation of most Google Ads strategies. We build tightly structured campaigns with exact-match keyword targeting, comprehensive negative keyword lists, compelling ad copy, and high-converting landing pages. Every element is tested systematically to improve Quality Score, lower CPCs, and increase conversion rates. Our search campaigns consistently achieve Quality Scores of 7-10, which translates directly to lower costs and better ad positions.</p>`,
        },
        {
          heading: "Google Display Advertising",
          body: `<p>The Google Display Network reaches over 90% of internet users across millions of websites, apps, and Gmail. We use Display campaigns strategically for brand awareness, retargeting, and audience development — with rigorous placement exclusion lists to ensure your ads never appear on low-quality or brand-unsafe inventory. Our Display campaigns use custom audiences, affinity segments, and in-market audience targeting to reach the right people with compelling creative.</p>`,
        },
        {
          heading: "Google Shopping Campaigns",
          body: `<p>For ecommerce brands, Google Shopping is often the highest-ROI advertising channel available. We optimize product feeds, structure Shopping campaigns for maximum control and performance, and continuously refine bidding strategies based on product-level profitability data. Our Shopping campaign management consistently achieves ROAS of 5x-12x for ecommerce clients across categories including apparel, home goods, electronics, beauty, and sporting goods.</p>`,
        },
        {
          heading: "YouTube Ads",
          body: `<p>YouTube is the second-largest search engine in the world and one of the most underutilized advertising channels for U.S. brands. We produce and manage YouTube ad campaigns using skippable in-stream, non-skippable, bumper, and Discovery ad formats. YouTube advertising excels for brand awareness, consideration, and retargeting prospects who have previously engaged with your brand or website.</p>`,
        },
        {
          heading: "Performance Max Campaigns",
          body: `<p>Google's Performance Max campaigns use AI to serve ads across all Google inventory — Search, Display, YouTube, Gmail, Maps, and Discover — with a single campaign. When set up and managed correctly, PMax campaigns can dramatically expand reach and conversion volume. Our team builds PMax campaigns with high-quality asset groups, custom audience signals, and proper attribution setup to ensure Google's algorithm has the best possible data to optimize toward your goals.</p>`,
        },
        {
          heading: "Google Remarketing",
          body: `<p>Remarketing campaigns target people who have previously visited your website, engaged with your app, or appear in your customer lists. These audiences convert at significantly higher rates than cold audiences — often 2-5x higher. We build sophisticated remarketing sequences based on pages visited, time spent, products viewed, and actions taken, creating personalized ad experiences that efficiently convert warm prospects into customers.</p>`,
        },
      ],
    },
    {
      heading: "Our Google Ads Optimization Methodology",
      body: `<p>Great Google Ads management is about systematic, data-driven optimization — not gut feelings or one-time setup. Our team follows a rigorous weekly and monthly optimization cadence that drives continuous improvement across every account we manage.</p>
<p><strong>Weekly optimizations include:</strong> search term analysis and negative keyword additions, bid adjustments by device, location, time-of-day, and audience segment, ad copy testing rotations, Quality Score monitoring and improvement, budget pacing and reallocation, and landing page conversion rate analysis.</p>
<p><strong>Monthly deep dives include:</strong> comprehensive performance review, competitive landscape analysis, audience expansion testing, campaign restructuring where needed, creative refresh recommendations, and strategic planning for the next 30 days.</p>
<p>This combination of tactical weekly work and strategic monthly review ensures accounts always improve — never stagnate.</p>`,
    },
    {
      heading: "Google Ads Account Audit: What We Typically Find",
      body: `<p>When we audit a new client's Google Ads account, we almost always find the same categories of issues — regardless of industry or whether they've been running ads for 6 months or 6 years.</p>
<p><strong>Wasted spend on irrelevant queries:</strong> Most accounts we audit are matching to thousands of irrelevant search terms. A law firm appearing for "law school applications." A dental practice showing up for "dental school programs." We typically find 30-60% of an account's spend going to queries that can never convert.</p>
<p><strong>Poor campaign structure:</strong> Overcrowded ad groups with dozens of keywords per group make it impossible to write highly relevant ad copy or properly manage bids. Our rebuilt accounts use a theme-based structure with 1-5 closely related keywords per ad group.</p>
<p><strong>Weak ad copy:</strong> Generic ads that could run for any competitor don't differentiate your brand or compel action. Every ad we write is specific, benefit-focused, and tested systematically against alternatives.</p>
<p><strong>Conversion tracking issues:</strong> Roughly 40% of accounts we audit have broken or inaccurate conversion tracking — meaning the algorithm is optimizing toward the wrong goals. We fix this before spending a single dollar.</p>`,
    },
    {
      heading: "Google Ads Management Pricing",
      body: `<p>Woofer Digital's Google Ads management pricing is transparent and straightforward. Our management fee is typically 15-20% of managed ad spend, with a minimum monthly management fee for smaller accounts. We don't mark up ad spend or take kickbacks from Google — every dollar of your ad budget goes directly to your campaigns.</p>
<p>Our typical client invests between $10,000 and $500,000 per month in Google Ads, with management fees scaled accordingly. Custom pricing is available for enterprise clients and accounts with complex multi-channel requirements.</p>`,
    },
  ],
  processSteps: [
    { number: "01", title: "Account Audit", description: "Full review of your existing Google Ads account, identifying waste, structure problems, and quick wins." },
    { number: "02", title: "Strategy & Restructure", description: "Campaign architecture rebuild with proper keyword strategy, ad groups, and tracking setup." },
    { number: "03", title: "Launch & Test", description: "Disciplined campaign launch with A/B testing protocols for ads, landing pages, and bidding strategies." },
    { number: "04", title: "Optimize & Scale", description: "Weekly optimizations, monthly strategic reviews, and systematic scaling toward your ROAS targets." },
  ],
  faqs: [
    {
      question: "How much does Google Ads management cost?",
      answer:
        "Woofer Digital charges a management fee of 15-20% of your monthly Google Ads spend, with a minimum monthly management fee of $1,500. This covers full campaign management, optimization, reporting, and strategy. Your ad spend goes directly to Google — we don't mark it up.",
    },
    {
      question: "How quickly can I see results from Google Ads?",
      answer:
        "Search campaigns typically begin generating leads within 1-2 weeks of launch. However, the first 30-60 days are a learning and optimization period where performance improves significantly. Most clients see the strongest results at the 90-day mark when our optimization data is most robust.",
    },
    {
      question: "Do I need a Google Ads account before working with you?",
      answer:
        "No. We can create a new Google Ads account for you or take over management of your existing account. We recommend keeping existing accounts when possible to preserve historical data and Quality Scores.",
    },
    {
      question: "What industries do you manage Google Ads for?",
      answer:
        "We manage Google Ads for virtually every major industry including healthcare, legal, financial services, ecommerce, SaaS, real estate, home services, dental, automotive, and education. We have specialists familiar with the compliance requirements and best practices specific to your industry.",
    },
    {
      question: "Can you help if my Google Ads account is performing poorly?",
      answer:
        "Absolutely — this is our most common starting point. We conduct a comprehensive audit of your existing account, identify the root causes of poor performance, and rebuild or optimize accordingly. Most clients see meaningful improvement within the first 60 days of our management.",
    },
    {
      question: "Do you offer Google Analytics and tracking setup?",
      answer:
        "Yes. Accurate conversion tracking and analytics setup is the foundation of effective Google Ads management. We set up or audit Google Analytics 4, implement server-side tracking where needed, configure conversion actions, and build custom reporting dashboards as part of every engagement.",
    },
  ],
  featuredTestimonialIds: ["t1", "t4", "t8"],
  featuredCaseStudyIds: ["medbridge-health-google-ads", "reyes-law-firm-lead-gen"],
  relatedServices: [
    { label: "Media Buying Services", href: "/services/media-buying" },
    { label: "Lead Generation", href: "/services/lead-generation" },
    { label: "Ecommerce Advertising", href: "/services/ecommerce-advertising" },
    { label: "Programmatic Advertising", href: "/services/programmatic-advertising" },
  ],
  relatedIndustries: [
    { label: "Healthcare Google Ads", href: "/industries/healthcare" },
    { label: "Law Firm Advertising", href: "/industries/law-firm" },
    { label: "Ecommerce Advertising", href: "/industries/ecommerce-advertising" },
    { label: "Dental Advertising", href: "/industries/dental" },
  ],
  relatedLocations: [
    { label: "Google Ads Agency New York", href: "/locations/new-york" },
    { label: "Google Ads Agency Los Angeles", href: "/locations/los-angeles" },
    { label: "Google Ads Agency Chicago", href: "/locations/chicago" },
    { label: "Google Ads Agency Houston", href: "/locations/houston" },
    { label: "Google Ads Agency Dallas", href: "/locations/dallas" },
  ],
  serviceSchema: {
    serviceType: "Google Ads Management",
    areaServed: ["United States"],
    description:
      "Expert Google Ads management services including Search, Display, Shopping, YouTube, Performance Max, and Remarketing campaigns for U.S. businesses.",
  },
};
