import type { ServicePage } from "@/types/service";

export const programmaticAdvertisingData: ServicePage = {
  slug: "programmatic-advertising",
  title: "Programmatic Advertising Agency",
  metaTitle: "Programmatic Advertising | DSP Agency",
  metaDescription:
    "Expert programmatic advertising through premium DSPs. Real-time bidding, data-driven audience targeting & full-funnel display campaigns. Free audit.",
  breadcrumbs: [{ label: "Services", href: "/services" }, { label: "Programmatic Advertising", href: "/services/programmatic-advertising" }],
  heroHeadline: "Programmatic Advertising That Reaches Your Exact Audience at Scale",
  heroSubheadline:
    "DSP-powered programmatic media buying with precision audience targeting, real-time bidding optimization, and full-funnel attribution across the open web.",
  heroCTAText: "Get Free Programmatic Audit",
  heroCTAHref: "/contact",
  badge: "Premium DSP Partner",
  introText:
    "Programmatic advertising — also called programmatic media buying — is the automated buying and selling of digital ad inventory across the open web, reaching audiences through sophisticated targeting that goes far beyond what social platforms can offer. Using demand-side platforms (DSPs), we access premium inventory across tens of thousands of publishers, layering in first-party data, third-party intent data, behavioral signals, and AI-powered optimization to serve the right ad to the right person at the right moment — at scale. Programmatic media buying now accounts for over 90% of all digital display ad transactions in the U.S., and the sophistication of available audience data has never been greater. Woofer Digital's programmatic media buying team manages campaigns through industry-leading DSPs including The Trade Desk, DV360, MediaMath, and Amazon DSP.",
  stats: [
    { value: "90%+", label: "US Digital Display Via Programmatic", suffix: "" },
    { value: "68%", label: "Avg. Lead Quality Improvement", suffix: "" },
    { value: "40%", label: "Avg. CPM Savings vs. Direct Buy", suffix: "" },
    { value: "3.4x", label: "Avg. Pipeline ROI", suffix: "" },
  ],
  contentSections: [
    {
      heading: "Programmatic Advertising Channels & Formats",
      body: `<p>Our programmatic capabilities span the full digital ecosystem:</p>`,
      subSections: [
        {
          heading: "Display Advertising",
          body: `<p>Programmatic display puts banner, rich media, and HTML5 ads across premium publisher websites with laser-targeted audience segments. We manage campaigns across all IAB standard sizes, with creative trafficking, brand safety controls, and placement quality monitoring to ensure your brand appears in premium, contextually relevant environments.</p>`,
        },
        {
          heading: "Native Advertising",
          body: `<p>Native advertising delivers promotional content in a format that matches the editorial environment — typically headline + image + description in a content recommendation unit. Native ads earn 3-8x higher engagement rates than conventional display because they don't look like ads. We run native campaigns through platforms like Taboola, Outbrain, and programmatic DSP native inventory for both awareness and conversion objectives.</p>`,
        },
        {
          heading: "Real-Time Bidding (RTB)",
          body: `<p>RTB allows us to evaluate and bid on individual ad impressions in real time based on contextual and audience signals. Every time a target audience member loads a webpage, we evaluate the impression's value and bid accordingly — ensuring your budget only goes to the most valuable opportunities. Our bidding algorithms are tuned for your specific CPA, CPL, or ROAS targets.</p>`,
        },
        {
          heading: "Private Marketplace (PMP) Deals",
          body: `<p>PMP deals give us access to premium, brand-safe publisher inventory that isn't available through the open exchange — at negotiated rates. We curate PMP relationships across premium publishers in your industry's verticals, combining the efficiency of programmatic buying with the quality of direct publisher deals.</p>`,
        },
        {
          heading: "Programmatic Audio",
          body: `<p>Audio advertising on Spotify, Pandora, iHeartRadio, and podcast networks can be purchased programmatically, delivering audio ads to highly targeted audiences based on listening behavior, demographics, and location. Audio programmatic is particularly effective for local and regional advertisers.</p>`,
        },
      ],
    },
    {
      heading: "Advanced Audience Targeting Capabilities",
      body: `<p>The targeting sophistication available through programmatic advertising far exceeds what's possible on social platforms. Our DSP access unlocks:</p>
<ul>
<li><strong>Third-Party Intent Data:</strong> We use data from providers like Bombora, Lotame, and LiveRamp to reach users actively researching products, services, or solutions in your category — reaching buyers earlier in the funnel than keyword targeting allows.</li>
<li><strong>First-Party Data Activation:</strong> Your CRM data, customer lists, and website visitor data can be activated as audience segments for targeting, suppression, and lookalike expansion.</li>
<li><strong>Contextual Targeting:</strong> Advanced contextual targeting places ads on pages with relevant content, reaching users at the moment they're consuming information related to your product or service.</li>
<li><strong>Behavioral Targeting:</strong> Audience segments built from browsing behavior across the open web — including purchase intent, category interests, and life stage signals.</li>
<li><strong>Account-Based Marketing (ABM):</strong> For B2B advertisers, we can target specific companies by IP address, firmographic data, and individual decision-maker profiles.</li>
<li><strong>Location-Based Targeting:</strong> Geofencing, proximity targeting, and visitation data allow hyper-local campaign targeting down to specific venues, ZIP codes, or drive-time radiuses.</li>
</ul>`,
    },
    {
      heading: "Brand Safety & Inventory Quality",
      body: `<p>Brand safety is non-negotiable in programmatic advertising. The open exchange contains millions of publisher sites, and not all of them are appropriate brand environments. Our programmatic campaigns include comprehensive brand safety controls: IAB category exclusions, keyword block lists, placement verification through IAS or DoubleVerify, and post-campaign placement quality reporting.</p>
<p>We run all programmatic campaigns through curated private marketplaces and direct supply agreements with vetted publishers, supplemented by open exchange buying with aggressive quality controls. Your brand will never appear on misinformation sites, adult content, or low-quality inventory.</p>`,
    },
    {
      heading: "Programmatic Reporting & Attribution",
      body: `<p>Measuring the impact of programmatic advertising requires sophisticated attribution modeling that goes beyond last-click. Our reporting infrastructure includes view-through attribution, cross-device tracking, incrementality measurement, and integration with your CRM and analytics platforms to provide a complete picture of programmatic's contribution to your pipeline and revenue.</p>
<p>Our clients receive weekly performance dashboards and monthly comprehensive reports covering reach, frequency, viewability, brand safety metrics, conversion performance, and optimization recommendations.</p>`,
    },
  ],
  processSteps: [
    { number: "01", title: "Audience Architecture", description: "Build precise audience segments using first-party data, third-party intent data, and behavioral signals." },
    { number: "02", title: "DSP Setup & Campaign Build", description: "Campaign structure, creative trafficking, brand safety controls, and bidding strategy configuration." },
    { number: "03", title: "Launch & Optimize", description: "Real-time bidding optimization, placement quality monitoring, and creative rotation management." },
    { number: "04", title: "Measure & Scale", description: "Multi-touch attribution reporting, incrementality testing, and systematic budget scaling toward top performers." },
  ],
  faqs: [
    {
      question: "What is programmatic advertising?",
      answer:
        "Programmatic advertising is the automated buying and selling of digital ad inventory using software and algorithms. Instead of manually negotiating placements with individual publishers, programmatic platforms (DSPs) allow us to buy ad impressions across thousands of publishers simultaneously, with real-time audience targeting and bidding optimization.",
    },
    {
      question: "How is programmatic different from Google Display or Meta Ads?",
      answer:
        "While Google Display and Meta also use automated ad buying, programmatic DSPs provide access to the broader open web beyond those walled gardens — plus far more sophisticated third-party data integrations, private marketplace deals, and audience targeting capabilities. Programmatic excels for B2B targeting, ABM, and reaching niche audiences at scale.",
    },
    {
      question: "What DSPs does Woofer Digital use?",
      answer:
        "We work with The Trade Desk, Google DV360, Amazon DSP, MediaMath, and other platform-specific DSPs based on campaign goals. Platform selection depends on your audience, objectives, and available inventory — we recommend the right DSP for your specific situation.",
    },
    {
      question: "What is the minimum budget for programmatic advertising?",
      answer:
        "Programmatic advertising typically requires a minimum of $10,000-$15,000/month in media spend to generate sufficient impressions for meaningful optimization data. Smaller budgets often struggle to exit the algorithm's learning phase quickly enough to demonstrate ROI.",
    },
    {
      question: "How do you ensure brand safety in programmatic campaigns?",
      answer:
        "We implement multi-layer brand safety controls including IAB category exclusions, keyword block lists, placement verification through IAS or DoubleVerify, curated PMPs, and post-campaign placement quality audits. We can also implement an allowlist-only strategy for brands with strict brand safety requirements.",
    },
  ],
  featuredTestimonialIds: ["t3", "t5", "t10"],
  featuredCaseStudyIds: ["nexus-saas-programmatic"],
  relatedServices: [
    { label: "Connected TV Advertising", href: "/services/connected-tv" },
    { label: "Media Buying Services", href: "/services/media-buying" },
    { label: "Lead Generation", href: "/services/lead-generation" },
  ],
  relatedIndustries: [
    { label: "SaaS Advertising", href: "/industries/saas" },
    { label: "Financial Services Advertising", href: "/industries/financial-services" },
    { label: "Healthcare Advertising", href: "/industries/healthcare" },
    { label: "Automotive Advertising", href: "/industries/automotive" },
  ],
  relatedLocations: [
    { label: "Programmatic Agency New York", href: "/locations/new-york" },
    { label: "Programmatic Agency Los Angeles", href: "/locations/los-angeles" },
    { label: "Programmatic Agency Chicago", href: "/locations/chicago" },
    { label: "Programmatic Agency Boston", href: "/locations/boston" },
  ],
  serviceSchema: {
    serviceType: "Programmatic Advertising",
    areaServed: ["United States"],
    description:
      "Programmatic advertising management through premium DSPs including display, native, real-time bidding, and account-based marketing campaigns.",
  },
};
