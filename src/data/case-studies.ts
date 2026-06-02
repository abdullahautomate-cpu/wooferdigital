import type { CaseStudy } from "@/types/case-study";

const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "medbridge-health-google-ads",
    clientName: "MedBridge Health",
    clientIndustry: "Healthcare",
    logoPlaceholder: "MBH",
    challenge:
      "MedBridge Health, a multi-location urgent care network, was spending $85,000/month on Google Ads with a cost-per-lead of $280 and declining lead volume. Their previous agency had used a broad keyword strategy with no negative keyword management, resulting in massive wasted spend.",
    solution:
      "Woofer Digital rebuilt the Google Ads account from scratch using a tight keyword architecture organized by location and service type. We implemented aggressive negative keyword lists, restructured ad groups around intent signals, created location-specific landing pages, and layered in audience targeting to maximize quality traffic.",
    results: [
      { metric: "Cost Per Lead", value: "$134", improvement: "52% reduction" },
      { metric: "Monthly Lead Volume", value: "3.2x", improvement: "increase" },
      { metric: "Conversion Rate", value: "8.4%", improvement: "up from 2.1%" },
      { metric: "Ad Spend Efficiency", value: "+127%", improvement: "improvement" },
    ],
    testimonial:
      "Woofer Digital transformed our Google Ads account. Within 60 days, our cost-per-lead dropped by 52% and our lead volume tripled.",
    testimonialAuthor: "Sarah Mitchell",
    testimonialTitle: "VP of Marketing, MedBridge Health",
    servicesUsed: ["google-ads", "lead-generation"],
    metaTitle: "MedBridge Health Case Study | 52% CPL Reduction | Woofer Digital",
    metaDescription:
      "See how Woofer Digital reduced cost-per-lead by 52% and tripled lead volume for a multi-location urgent care network using strategic Google Ads management.",
    fullBody: `
      <h2>The Challenge</h2>
      <p>MedBridge Health came to Woofer Digital in a difficult position. Despite spending $85,000 per month on Google Ads, their patient acquisition numbers were declining and costs were climbing. A comprehensive audit revealed the root causes: a bloated keyword list targeting irrelevant queries, zero negative keyword management, landing pages with poor conversion architecture, and bid strategies misaligned with their actual conversion goals.</p>
      <h2>Our Strategy</h2>
      <p>We took a complete rebuild approach rather than attempting to patch the existing campaign structure. The new account architecture featured tightly themed ad groups organized by service type (urgent care, occupational health, telehealth) and geography (individual clinic locations). We created custom landing pages for each service/location combination, implemented call tracking, and built a negative keyword list of 2,000+ terms in the first two weeks.</p>
      <h2>Execution & Optimization</h2>
      <p>After launching the rebuilt campaigns, our team monitored performance daily and made optimizations based on actual patient acquisition data. We tested 8 different headline combinations per ad group, identified the top performers, and scaled budget toward the highest-converting location/service combinations. Within 30 days, CPL dropped by 31%. By day 60, we had achieved the 52% reduction target.</p>
      <h2>The Results</h2>
      <p>The results speak for themselves. MedBridge Health now acquires new patients at $134 CPL — down from $280 — with 3.2x the monthly lead volume. The overall conversion rate jumped from 2.1% to 8.4%, and the account now generates positive ROI on a budget that previously was burning cash. MedBridge has since expanded our engagement to manage their Facebook Ads and programmatic display campaigns.</p>
    `,
  },
  {
    slug: "apex-fitness-meta-ecommerce",
    clientName: "Apex Fitness Gear",
    clientIndustry: "Ecommerce",
    logoPlaceholder: "AFG",
    challenge:
      "Apex Fitness Gear, a direct-to-consumer fitness equipment brand, was generating a 1.8x ROAS on Meta despite having strong products and a 4.2-star review average. Their creative was stale, their audience targeting was too broad, and they had no retargeting infrastructure in place.",
    solution:
      "Woofer Digital designed a full-funnel Meta strategy with distinct creative approaches for cold, warm, and hot audiences. We built a structured creative testing framework, implemented pixel-based retargeting with 7, 14, and 30-day windows, and created dynamic product ads for cart abandonment recovery.",
    results: [
      { metric: "Meta ROAS", value: "6.2x", improvement: "up from 1.8x" },
      { metric: "Revenue from Paid Social", value: "+244%", improvement: "increase" },
      { metric: "CAC", value: "$34", improvement: "down from $89" },
      { metric: "Retargeting ROAS", value: "12.4x", improvement: "new channel" },
    ],
    testimonial:
      "None of our previous agencies came close to the ROI we've seen. Our Facebook and Instagram ROAS went from 1.8x to 6.2x in five months.",
    testimonialAuthor: "James Kowalski",
    testimonialTitle: "CEO, Apex Fitness Gear",
    servicesUsed: ["facebook-instagram-ads", "ecommerce-advertising"],
    metaTitle: "Apex Fitness Gear Case Study | 6.2x Meta ROAS | Woofer Digital",
    metaDescription:
      "How Woofer Digital grew Apex Fitness Gear's Meta ROAS from 1.8x to 6.2x and increased paid social revenue by 244% in 5 months.",
    fullBody: `
      <h2>Starting Point</h2>
      <p>Apex Fitness Gear was an emerging DTC brand with great products but a paid social strategy that wasn't capitalizing on their potential. At 1.8x ROAS, they were barely profitable on Meta after accounting for product costs and fulfillment. The core problems: the same creative running for 6+ months with massive audience fatigue, no segmentation between cold and warm audiences, and no systematic way to recapture cart abandoners.</p>
      <h2>The Full-Funnel Rebuild</h2>
      <p>We rebuilt the Meta account around three distinct stages. At the top of funnel, we ran interest-based and lookalike audience campaigns featuring educational content about product features and comparison creative. Mid-funnel warm audiences saw social proof creative — real customer reviews, UGC, and before/after content. Bottom of funnel retargeting featured direct product ads, scarcity messaging, and personalized dynamic product ads.</p>
      <h2>Creative Testing at Scale</h2>
      <p>Creative is the variable that moves the needle most in Meta advertising. We ran a disciplined creative testing framework: launching 12-15 new creative concepts every two weeks, letting the algorithm run for 7 days, then scaling the top performers and cutting the losers. This continuous creative refresh prevented audience fatigue and kept CPMs down throughout the engagement.</p>
      <h2>Results</h2>
      <p>Five months after launch, Apex Fitness Gear's Meta ROAS sits at 6.2x — nearly 4x where they started. Monthly revenue from paid social increased 244%. Customer acquisition cost dropped from $89 to $34. The retargeting program alone achieves 12.4x ROAS. Apex has since expanded their monthly ad budget from $45K to $180K based on the consistent returns Woofer Digital delivers.</p>
    `,
  },
  {
    slug: "nexus-saas-programmatic",
    clientName: "Nexus SaaS Platform",
    clientIndustry: "SaaS",
    logoPlaceholder: "NSP",
    challenge:
      "Nexus, a B2B project management platform, needed to generate high-quality free trial signups at a scalable cost. Their previous programmatic campaigns had terrible targeting, leading to low-quality leads from non-ideal company profiles.",
    solution:
      "Woofer Digital implemented a precision programmatic strategy using intent data, firmographic targeting, and account-based marketing audiences through a premium DSP. We layered behavioral signals with job title and company size data to reach decision-makers at companies actively researching project management software.",
    results: [
      { metric: "Lead Quality Score", value: "+68%", improvement: "improvement" },
      { metric: "Trial-to-Paid Rate", value: "34%", improvement: "up from 12%" },
      { metric: "Cost Per Trial", value: "$48", improvement: "down from $120" },
      { metric: "Pipeline Influenced", value: "$2.4M", improvement: "in 6 months" },
    ],
    testimonial:
      "The programmatic campaigns Woofer Digital built are generating qualified leads at a cost 40% below our industry benchmark.",
    testimonialAuthor: "Rebecca Tran",
    testimonialTitle: "Director of Growth, Nexus SaaS",
    servicesUsed: ["programmatic-advertising", "lead-generation"],
    metaTitle: "Nexus SaaS Case Study | 68% Lead Quality Improvement | Woofer Digital",
    metaDescription:
      "How Woofer Digital's programmatic strategy improved lead quality by 68% and drove $2.4M in pipeline for a B2B SaaS company.",
    fullBody: `
      <h2>The B2B Programmatic Challenge</h2>
      <p>B2B programmatic advertising is notoriously difficult to execute well. Nexus had tried programmatic before with poor results — low-quality leads, high bounce rates from their landing pages, and a trial-to-paid conversion rate of just 12%. The fundamental issue was audience targeting: their previous campaigns reached broad "tech professional" audiences without any account-level qualification.</p>
      <h2>Intent Data Strategy</h2>
      <p>We rebuilt the programmatic strategy around intent signals. Using third-party intent data from Bombora and Demandbase, we identified companies actively researching project management solutions. We then layered in firmographic filters — company size 50-500 employees, technology stack signals indicating growth-stage companies — and targeted specific job titles in the decision-making chain: VP of Operations, Director of Project Management, CTO at SMB level.</p>
      <h2>Creative & Landing Page Alignment</h2>
      <p>We created personalized ad creative for each audience segment, with messaging tailored to specific pain points. The VP of Operations saw ROI and efficiency messaging; the CTO saw integration and security content. Each ad led to a corresponding landing page variant with matching messaging — a crucial alignment that most programmatic campaigns miss.</p>
      <h2>Performance Results</h2>
      <p>The precision approach delivered dramatic improvements. Lead quality score (as measured by Nexus's internal scoring model) improved 68%. Trial-to-paid conversion rate nearly tripled, from 12% to 34%. Cost per trial dropped from $120 to $48. Over six months, the campaign influenced $2.4M in pipeline — a 5.1x return on ad spend when accounting for closed revenue.</p>
    `,
  },
  {
    slug: "reyes-law-firm-lead-gen",
    clientName: "Reyes & Associates Law",
    clientIndustry: "Legal",
    logoPlaceholder: "RAL",
    challenge:
      "This personal injury law firm was spending $30K/month on Google Ads with a cost-per-case-lead of $450 — far above the industry average. They were bidding on generic keywords with fierce competition and losing ground to competitors with much larger budgets.",
    solution:
      "We repositioned the keyword strategy around practice-specific and case-type terms with high buyer intent and lower competition. We implemented bid modifiers by time-of-day and day-of-week based on historical conversion data, created mobile-optimized landing pages, and set up call tracking to capture phone leads often missed in analytics.",
    results: [
      { metric: "Cost Per Lead", value: "$162", improvement: "64% reduction" },
      { metric: "Monthly Leads", value: "+3.8x", improvement: "increase" },
      { metric: "Call-Only Leads", value: "+210%", improvement: "via click-to-call" },
      { metric: "Signed Cases", value: "+4x", improvement: "in 90 days" },
    ],
    testimonial:
      "Our law firm has been running ads for years with mediocre results. Woofer Digital overhauled our entire strategy and now we're getting 3-4x more qualified case leads every month.",
    testimonialAuthor: "Daniel Reyes",
    testimonialTitle: "Managing Partner, Reyes & Associates Law",
    servicesUsed: ["google-ads", "lead-generation"],
    metaTitle: "Reyes Law Firm Case Study | 64% CPL Reduction | Woofer Digital",
    metaDescription:
      "How Woofer Digital reduced cost-per-lead by 64% and quadrupled signed cases for a personal injury law firm using strategic Google Ads management.",
    fullBody: `
      <h2>The Legal Advertising Problem</h2>
      <p>Legal is one of the most competitive and expensive industries in Google Ads. Terms like "personal injury attorney" and "car accident lawyer" routinely cost $80-200+ per click. Reyes & Associates had been competing on these broad terms and hemorrhaging budget on clicks that never converted into consultations. With a $30K monthly budget and $450 cost per lead, the math simply didn't work.</p>
      <h2>Keyword Strategy Repositioning</h2>
      <p>The core of our strategy was moving away from generic attorney keywords toward specific case type and situation keywords with clear intent. Instead of "personal injury attorney," we targeted "dog bite injury lawyer [city]," "slip and fall lawyer near me," and "auto accident settlement attorney [city]" — terms with lower competition and higher case-conversion intent. We also implemented an extensive negative keyword list to block irrelevant queries.</p>
      <h2>Landing Page & Conversion Optimization</h2>
      <p>We created dedicated landing pages for each practice area with one clear goal: booking a free consultation. Mobile optimization was critical — 73% of legal ad clicks come from mobile devices. We added click-to-call buttons, simplified contact forms to three fields, and incorporated social proof (settlements won, reviews, case results) to build trust immediately.</p>
      <h2>The Outcome</h2>
      <p>Within 90 days, cost-per-lead dropped from $450 to $162 — a 64% reduction. Monthly lead volume increased 3.8x. Click-to-call leads (often the highest-quality leads for law firms) increased 210%. Most importantly, signed cases quadrupled. The firm has since doubled their Google Ads budget with Woofer Digital managing the scale responsibly.</p>
    `,
  },
  {
    slug: "lifestyle-apparel-tiktok",
    clientName: "LifeStyle Apparel Co.",
    clientIndustry: "Ecommerce",
    logoPlaceholder: "LAC",
    challenge:
      "LifeStyle Apparel was launching a new summer collection and needed to generate rapid awareness and sales among 18-35 year-old fashion-conscious consumers. Their Meta costs had increased significantly due to iOS changes, and they wanted to diversify into TikTok.",
    solution:
      "Woofer Digital built a comprehensive TikTok advertising strategy including TopView ads for maximum awareness, In-Feed ads with native-style creative, Spark Ads amplifying organic creator content, and a retargeting layer to capture high-intent viewers.",
    results: [
      { metric: "Launch Month Revenue", value: "$800K", improvement: "from TikTok" },
      { metric: "TikTok ROAS", value: "4.5x", improvement: "campaign average" },
      { metric: "Video Views", value: "12M+", improvement: "in 30 days" },
      { metric: "New Customer Acquisition", value: "+320%", improvement: "vs. benchmark" },
    ],
    testimonial:
      "We launched a new product line and Woofer Digital's TikTok strategy drove $800K in sales in the first 30 days — at a 4.5x ROAS.",
    testimonialAuthor: "Tyler Brooks",
    testimonialTitle: "Founder, LifeStyle Apparel Co.",
    servicesUsed: ["tiktok-advertising", "ecommerce-advertising"],
    metaTitle: "LifeStyle Apparel TikTok Case Study | $800K Launch Month | Woofer Digital",
    metaDescription:
      "How Woofer Digital's TikTok advertising strategy drove $800K in revenue in a single month at a 4.5x ROAS for a DTC apparel brand.",
    fullBody: `
      <h2>The TikTok Opportunity</h2>
      <p>LifeStyle Apparel had 50,000 organic TikTok followers and strong product-market fit with younger consumers — but they'd never run paid TikTok advertising. The combination of owned audience, great product aesthetics, and the platform's relatively lower CPMs compared to Meta presented a significant opportunity for their summer launch.</p>
      <h2>Creative Strategy: Native First</h2>
      <p>TikTok advertising lives or dies on creative. The biggest mistake brands make is running traditional ad creative on TikTok — polished, produced content that screams "ad" and gets scrolled past immediately. Our creative team developed concepts that looked and felt like native TikTok content: trends participation, duets with creators, behind-the-scenes production content, and user-style reviews of the new collection.</p>
      <h2>Layered Campaign Architecture</h2>
      <p>We structured the campaign in three phases. Phase 1 (days 1-7): TopView and Brand Takeover for maximum awareness, targeting fashion-interested 18-35 year-olds across the U.S. Phase 2 (days 8-21): In-Feed and Spark Ads for consideration, retargeting video viewers with product-focused content. Phase 3 (ongoing): Dynamic Showcase Ads for conversion, serving personalized product ads to engaged users.</p>
      <h2>Results</h2>
      <p>The summer collection launch exceeded all projections. In the first 30 days, TikTok campaigns generated $800K in revenue at a 4.5x ROAS. Videos accumulated 12+ million views. New customer acquisition from TikTok was 320% above the brand's historical baseline for new product launches. LifeStyle Apparel now allocates 35% of their total ad budget to TikTok.</p>
    `,
  },
  {
    slug: "luxe-beauty-shopify-scale",
    clientName: "Luxe Beauty Studio",
    clientIndustry: "Ecommerce",
    logoPlaceholder: "LBS",
    challenge:
      "Luxe Beauty Studio was a promising Shopify beauty brand stuck at $200K annual revenue. They had strong organic sales and good reviews, but couldn't crack the paid advertising code to scale beyond word-of-mouth.",
    solution:
      "Woofer Digital implemented a comprehensive multi-channel paid strategy: Google Shopping for high-intent buyers, Meta for visual discovery and retargeting, and email marketing integration for lifecycle campaigns. We rebuilt their Shopify analytics to get accurate attribution data.",
    results: [
      { metric: "Annual Revenue", value: "$1.8M", improvement: "up from $200K" },
      { metric: "Google Shopping ROAS", value: "7.2x", improvement: "average" },
      { metric: "Meta ROAS", value: "5.1x", improvement: "average" },
      { metric: "Repeat Purchase Rate", value: "42%", improvement: "up from 18%" },
    ],
    testimonial:
      "We scaled from $200K to $1.8M in annual revenue in one year. Woofer Digital's paid media strategy was the primary growth driver.",
    testimonialAuthor: "Chloe Nguyen",
    testimonialTitle: "Co-Founder, Luxe Beauty Studio",
    servicesUsed: ["google-ads", "facebook-instagram-ads", "ecommerce-advertising"],
    metaTitle: "Luxe Beauty Studio Case Study | $200K to $1.8M Revenue | Woofer Digital",
    metaDescription:
      "How Woofer Digital helped a Shopify beauty brand scale from $200K to $1.8M in annual revenue using Google Shopping, Meta Ads, and ecommerce strategy.",
    fullBody: `
      <h2>From Plateau to Scale</h2>
      <p>Luxe Beauty Studio had the fundamentals right — quality products, great photography, strong reviews — but couldn't break through the revenue plateau that traps many early-stage ecommerce brands. The missing piece was a systematic paid advertising approach with proper tracking infrastructure.</p>
      <h2>Foundation: Fixing the Data</h2>
      <p>Before running a single ad, we spent two weeks getting the analytics right. We set up server-side tracking to recover the purchase data lost to iOS 14+ privacy changes, implemented GA4 with enhanced ecommerce, and connected all ad platforms to a single attribution dashboard. Accurate data is non-negotiable for scaling ecommerce advertising effectively.</p>
      <h2>Channel Strategy</h2>
      <p>Google Shopping captured in-market buyers actively searching for beauty products — the highest-intent traffic available. We optimized the product feed, segmented campaigns by margin and category, and used Smart Shopping for catalog expansion. On Meta, we focused on visual discovery — Instagram Feed and Reels are ideal for beauty — with heavy creative testing to find the formats and messaging that resonated with their target customer profile.</p>
      <h2>The Numbers</h2>
      <p>Over twelve months, Luxe Beauty Studio scaled from $200K to $1.8M in annual revenue. Google Shopping averaged 7.2x ROAS. Meta averaged 5.1x ROAS across all campaign objectives. Repeat purchase rate jumped from 18% to 42% as we implemented retargeting sequences aligned with their natural repurchase cycle. Luxe Beauty Studio is now scaling toward $5M with Woofer Digital managing their growth.</p>
    `,
  },
];

export function getCaseStudies(): CaseStudy[] {
  return CASE_STUDIES;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function getCaseStudiesByIds(ids: string[]): CaseStudy[] {
  return CASE_STUDIES.filter((c) => ids.includes(c.slug));
}
