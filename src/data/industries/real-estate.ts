import type { IndustryPage } from "@/types/industry";

export const realEstateData: IndustryPage = {
  slug: "real-estate",
  industry: "Real Estate",
  metaTitle: "Real Estate Advertising Agency | Realtor & Brokerage Marketing",
  metaDescription:
    "Expert real estate advertising for agents, teams, and brokerages. Buyer & seller lead generation via Google Ads, Facebook, and programmatic. Free real estate ad audit.",
  breadcrumbs: [{ label: "Industries", href: "/industries" }, { label: "Real Estate", href: "/industries/real-estate" }],
  heroHeadline: "Real Estate Advertising That Generates Buyer & Seller Leads at Scale",
  heroSubheadline:
    "Proven paid advertising strategies for real estate agents, teams, and brokerages — delivering high-intent buyer and seller leads at competitive cost-per-lead.",
  heroCTAText: "Get Free Real Estate Ad Audit",
  introText: "Real estate advertising has been transformed by digital advertising. Where agents once relied on newspaper ads, yard signs, and referrals, today's top-producing agents and teams use systematic paid advertising across Google, Facebook, Instagram, and YouTube to consistently generate buyer and seller leads at predictable costs. Woofer Digital has managed real estate advertising campaigns for individual agents, large teams, and regional brokerages — with particular expertise in buyer lead generation, seller listing presentation funnels, and geographic farming campaigns.",
  challenges: [
    { title: "Lead Quality Variance", description: "Real estate leads range from 'just browsing' to 'closing in 30 days.' Differentiating and nurturing leads based on intent is critical for ROI." },
    { title: "Buyer vs. Seller Campaigns", description: "Buyer and seller leads require completely different campaign strategies, creative approaches, and landing page experiences." },
    { title: "Geographic Precision", description: "Real estate is hyper-local. Campaigns must target specific neighborhoods, ZIP codes, or school districts — not broad metro areas." },
    { title: "Lead Nurture Complexity", description: "Real estate buyers and sellers often take 3-12 months to transact. Campaigns must feed into CRM nurture sequences to maximize conversion." },
  ],
  solutions: [
    { service: "Google Ads Management", description: "Buyer search campaigns for specific property types, neighborhoods, and price ranges.", href: "/services/google-ads" },
    { service: "Facebook & Instagram Ads", description: "Seller lead campaigns with home valuation funnels and buyer search campaigns with visual property content.", href: "/services/facebook-instagram-ads" },
    { service: "Lead Generation", description: "Integrated buyer and seller lead gen with CRM connections and automated nurture sequences.", href: "/services/lead-generation" },
  ],
  stats: [
    { value: "$22", label: "Avg. Cost Per Buyer Lead" },
    { value: "$45", label: "Avg. Cost Per Seller Lead" },
    { value: "3.8x", label: "Avg. Lead Volume Increase" },
    { value: "18%", label: "Avg. Lead-to-Listing Rate" },
  ],
  contentSections: [
    {
      heading: "Real Estate Advertising Strategies That Work",
      body: `<p><strong>Buyer Lead Generation:</strong> Search campaigns targeting neighborhood-specific and property-type queries ("3BR homes for sale in [city]," "condos near downtown [city]") capture buyers in active search mode. We complement search with Facebook targeting based on life event signals (recent marriage, new job, growing family) that indicate home-buying intent.</p>
<p><strong>Seller Lead Generation:</strong> The most valuable real estate leads are motivated sellers. Our seller campaigns use home valuation offers ("What's Your Home Worth?"), market report offers, and direct seller intent keywords ("sell my house fast," "list my home"). Facebook Lead Ads with instant home valuation forms generate seller leads at $30-70 CPL.</p>
<p><strong>Geographic Farming:</strong> Digital geographic farming — targeting specific neighborhoods repeatedly with relevant content — builds brand awareness and top-of-mind presence in your target market. CTV, programmatic display, and social advertising can replace expensive direct mail with more precise and measurable alternatives.</p>`,
    },
  ],
  faqs: [
    {
      question: "What's the best platform for real estate lead generation?",
      answer: "Facebook generates the most cost-effective seller leads through home valuation funnels. Google Search captures high-intent buyer leads actively searching for specific properties. We recommend combining both for maximum reach and lead quality.",
    },
    {
      question: "How do you qualify real estate leads?",
      answer: "We use qualifying questions in lead forms (timeline to purchase/sell, pre-approval status for buyers, motivation for sellers) and landing page messaging that naturally filters out low-intent contacts. CRM integration with lead scoring helps your team prioritize follow-up.",
    },
  ],
  relevantServices: [
    { label: "Google Ads Management", href: "/services/google-ads", description: "Buyer search campaigns" },
    { label: "Facebook & Instagram Ads", href: "/services/facebook-instagram-ads", description: "Seller lead campaigns" },
    { label: "Lead Generation", href: "/services/lead-generation", description: "Integrated buyer/seller lead gen" },
  ],
  relatedLocations: [
    { label: "Real Estate Advertising New York", href: "/locations/new-york" },
    { label: "Real Estate Advertising Los Angeles", href: "/locations/los-angeles" },
    { label: "Real Estate Advertising Miami", href: "/locations/miami" },
    { label: "Real Estate Advertising Dallas", href: "/locations/dallas" },
    { label: "Real Estate Advertising Austin", href: "/locations/austin" },
  ],
  featuredTestimonialIds: ["t7", "t12"],
  featuredCaseStudyIds: ["medbridge-health-google-ads"],
  schemaType: "RealEstateAgent",
};
