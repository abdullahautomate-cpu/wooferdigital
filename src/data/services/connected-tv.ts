import type { ServicePage } from "@/types/service";

export const connectedTvData: ServicePage = {
  slug: "connected-tv",
  title: "Connected TV (CTV) Advertising Agency",
  metaTitle: "Connected TV Advertising Agency | CTV & OTT Advertising Services",
  metaDescription:
    "Reach cord-cutters on Hulu, Roku, Peacock & 40+ streaming platforms. Expert CTV and OTT advertising management with precise audience targeting. Get your free CTV audit.",
  breadcrumbs: [{ label: "Services", href: "/services" }, { label: "Connected TV", href: "/services/connected-tv" }],
  heroHeadline: "Connected TV Advertising That Reaches Cord-Cutters with Precision",
  heroSubheadline:
    "Measurable CTV and OTT campaigns on Hulu, Roku, Peacock, Paramount+, and 40+ premium streaming platforms — with the targeting precision digital was always supposed to deliver.",
  heroCTAText: "Get Free CTV Strategy Call",
  heroCTAHref: "/contact",
  badge: "Premium CTV Advertising Partner",
  introText:
    "Connected TV advertising is the most significant shift in media buying since the rise of social media. With over 100 million cord-cutters in the United States — a number growing by millions each year — traditional linear TV advertising is reaching fewer and fewer target consumers, while CTV advertising reaches precisely the households brands care about most. CTV combines the emotional power of television advertising with the targeting precision of digital: you can reach specific demographic, behavioral, and geographic audience segments across premium streaming content, with frequency capping, attribution reporting, and real-time optimization. Woofer Digital manages CTV campaigns across all major streaming platforms, helping brands reach their audiences in the moments of highest engagement — leaned back, watching on the big screen.",
  stats: [
    { value: "100M+", label: "US CTV Households Reachable", suffix: "" },
    { value: "78%", label: "Avg. Brand Awareness Lift", suffix: "" },
    { value: "40+", label: "Premium Streaming Platforms", suffix: "" },
    { value: "95%", label: "Video Completion Rate", suffix: "" },
  ],
  contentSections: [
    {
      heading: "CTV & OTT Platforms We Advertise On",
      body: `<p>We access premium streaming inventory across the full landscape of U.S. connected TV platforms:</p>`,
      subSections: [
        {
          heading: "Hulu Advertising",
          body: `<p>Hulu reaches 50+ million subscribers and is one of the most coveted CTV advertising environments — premium content, highly engaged viewers, and strong brand safety controls. We manage Hulu campaigns through both direct Hulu Select buys and programmatic CTV access, with targeting by demographics, interests, viewing history, and geographic location.</p>`,
        },
        {
          heading: "Roku Advertising",
          body: `<p>Roku is the largest smart TV operating system in the U.S., with 80+ million active accounts. The Roku OneView platform provides access to Roku's owned-and-operated channels plus thousands of third-party streaming apps, with industry-leading attribution capabilities that tie CTV exposure to online and offline conversions.</p>`,
        },
        {
          heading: "Peacock, Paramount+, and FAST Channels",
          body: `<p>NBCUniversal's Peacock, Paramount+, Tubi, Pluto TV, and the growing ecosystem of Free Ad-Supported Streaming TV (FAST) channels provide additional reach at competitive CPMs. We access this inventory programmatically and through direct channel partnerships, with rigorous content adjacency controls.</p>`,
        },
        {
          heading: "Amazon Fire TV & Prime Video",
          body: `<p>Amazon's streaming advertising products — including Prime Video Ads and Fire TV app inventory — combine the scale of Amazon's audience with the targeting power of Amazon's first-party purchase intent data. For retail and consumer brands, Amazon CTV provides unparalleled audience quality.</p>`,
        },
      ],
    },
    {
      heading: "CTV Advertising Targeting Capabilities",
      body: `<p>The targeting capabilities available through modern CTV advertising go far beyond what linear TV has ever offered. We can target CTV ads using:</p>
<ul>
<li><strong>Demographic Targeting:</strong> Age, gender, household income, education level, and household composition.</li>
<li><strong>Geographic Targeting:</strong> National, DMA, state, ZIP code, and even household-level targeting using IP-based identification.</li>
<li><strong>Behavioral & Interest Segments:</strong> Third-party audience data covering purchase behavior, category interests, life events, and more.</li>
<li><strong>First-Party Data:</strong> Your customer lists and CRM data can be matched to CTV households for targeting, suppression, or sequential messaging.</li>
<li><strong>Lookalike Audiences:</strong> Model new audiences based on the characteristics of your best customers.</li>
<li><strong>Competitive Conquesting:</strong> Target households that have shown interest in competing brands or services.</li>
</ul>`,
    },
    {
      heading: "CTV Attribution: Measuring the Impact of Streaming Ads",
      body: `<p>One of the most significant advantages of CTV advertising over linear TV is the ability to measure actual business impact — not just reach and frequency estimates. CTV attribution capabilities include:</p>
<p><strong>Website Visit Attribution:</strong> Measure website visits driven by CTV ad exposure using household IP matching and deterministic cross-device linking.</p>
<p><strong>Foot Traffic Attribution:</strong> For brick-and-mortar businesses, measure physical store visits from viewers who saw your CTV ads.</p>
<p><strong>Search Lift:</strong> Measure increases in branded and category search queries from CTV-exposed households.</p>
<p><strong>Conversion Attribution:</strong> Tie CTV exposure to online purchases, form fills, phone calls, and app installs using cross-device matching.</p>
<p>Our CTV attribution reporting integrates with your existing analytics stack to provide a unified view of CTV's contribution to your marketing mix.</p>`,
    },
    {
      heading: "CTV Creative Requirements & Best Practices",
      body: `<p>Connected TV ads must be produced to broadcast-quality standards. Unlike social advertising where lo-fi content often outperforms, CTV viewers are in a lean-back, high-attention environment and expect polished, high-quality creative.</p>
<p>We advise clients on CTV creative requirements: 15 and 30-second spots are most common; ads must be non-skippable (guaranteed impression); clear brand identification in the first 5 seconds; call-to-action with URL or QR code in the final frame. We partner with video production teams to develop CTV-ready creative or work with your existing broadcast assets to adapt them for the streaming environment.</p>`,
    },
  ],
  processSteps: [
    { number: "01", title: "Audience Research", description: "Define CTV audience segments using demographic, behavioral, and first-party data for maximum reach efficiency." },
    { number: "02", title: "Platform Strategy", description: "Select optimal streaming platforms and inventory sources based on your audience and budget." },
    { number: "03", title: "Campaign Launch", description: "Creative trafficking, frequency capping, brand safety controls, and attribution tracking setup." },
    { number: "04", title: "Measure & Optimize", description: "Multi-touch attribution reporting, reach/frequency analysis, and continuous performance optimization." },
  ],
  faqs: [
    {
      question: "What is Connected TV (CTV) advertising?",
      answer:
        "CTV advertising refers to ads delivered on internet-connected television screens through streaming apps and services like Hulu, Roku, Peacock, and Amazon Fire TV. Unlike linear TV, CTV ads can be targeted to specific audience segments and measured for actual business impact beyond reach and frequency estimates.",
    },
    {
      question: "What is the difference between CTV and OTT advertising?",
      answer:
        "OTT (Over-The-Top) refers to streaming content delivered over the internet without a traditional cable or satellite subscription. CTV specifically refers to OTT content viewed on a television screen (as opposed to mobile or desktop). Most of the industry uses CTV and OTT interchangeably in the advertising context.",
    },
    {
      question: "How much does CTV advertising cost?",
      answer:
        "CTV CPMs typically range from $15-45 CPM for programmatic access, with premium content and specific platforms like Hulu commanding higher rates. We recommend minimum budgets of $15,000-25,000/month to achieve meaningful reach and frequency in target markets. National campaigns typically require $50,000+ monthly for effective reach.",
    },
    {
      question: "Can I target specific geographic markets with CTV ads?",
      answer:
        "Yes. CTV advertising supports DMA-level, state, ZIP code, and even household-level geographic targeting — making it ideal for regional and local advertisers who previously couldn't afford national television advertising. A local dealership, regional hospital system, or multi-location restaurant chain can run CTV campaigns targeted precisely to their service areas.",
    },
    {
      question: "How do you measure the effectiveness of CTV campaigns?",
      answer:
        "We measure CTV effectiveness using a combination of household IP-based attribution, cross-device conversion tracking, search lift studies, website visit attribution, and foot traffic measurement for brick-and-mortar businesses. We integrate CTV attribution data into your existing analytics stack for unified marketing mix reporting.",
    },
  ],
  featuredTestimonialIds: ["t5", "t10", "t7"],
  featuredCaseStudyIds: ["nexus-saas-programmatic"],
  relatedServices: [
    { label: "Programmatic Advertising", href: "/services/programmatic-advertising" },
    { label: "Media Buying Services", href: "/services/media-buying" },
    { label: "Google Ads — YouTube", href: "/services/google-ads" },
  ],
  relatedIndustries: [
    { label: "Financial Services Advertising", href: "/industries/financial-services" },
    { label: "Healthcare Advertising", href: "/industries/healthcare" },
    { label: "Automotive Advertising", href: "/industries/automotive" },
    { label: "Insurance Advertising", href: "/industries/insurance" },
  ],
  relatedLocations: [
    { label: "CTV Advertising Agency New York", href: "/locations/new-york" },
    { label: "CTV Advertising Agency Los Angeles", href: "/locations/los-angeles" },
    { label: "CTV Advertising Agency Chicago", href: "/locations/chicago" },
  ],
  serviceSchema: {
    serviceType: "Connected TV Advertising",
    areaServed: ["United States"],
    description:
      "CTV and OTT advertising management on Hulu, Roku, Peacock, Amazon and 40+ premium streaming platforms with advanced audience targeting and attribution.",
  },
};
