import type { IndustryPage } from "@/types/industry";

export const lawFirmData: IndustryPage = {
  slug: "law-firm",
  industry: "Law Firms",
  metaTitle: "Law Firm Advertising Agency | Legal Marketing Services",
  metaDescription:
    "Expert law firm advertising for personal injury, criminal defense, family law, and business litigation attorneys. Google Ads, Facebook, lead gen. Get your free legal ad audit.",
  breadcrumbs: [{ label: "Industries", href: "/industries" }, { label: "Law Firms", href: "/industries/law-firm" }],
  heroHeadline: "Law Firm Advertising Agency That Fills Your Docket with Qualified Cases",
  heroSubheadline:
    "Ethical, high-performance paid advertising for personal injury, criminal defense, family law, and business litigation firms — delivering qualified case leads at competitive CPLs.",
  heroCTAText: "Get Free Legal Ad Audit",
  introText:
    "Legal advertising is one of the most competitive and high-stakes verticals in digital marketing. A single signed case from Google Ads or Facebook can be worth $5,000 to $500,000+ in contingency fees. Getting paid advertising right for law firms requires understanding legal advertising ethics rules, platform policies around legal claims, the specific intent signals that indicate serious case inquiries versus curiosity, and the conversion psychology of someone dealing with a legal crisis. Woofer Digital has managed paid advertising for hundreds of law firms across the country — from solo practitioners to national multi-office firms — delivering consistent, qualified case leads at CPLs that make financial sense.",
  challenges: [
    { title: "Extreme Competition & CPCs", description: "Personal injury keywords can cost $50-200 per click. Without expert keyword strategy and account structure, budgets are wasted on expensive clicks that never convert." },
    { title: "Lead Quality Variability", description: "Not all law firm leads are equal. The difference between a contingency fee case and a frivolous inquiry is enormous. Quality control at the campaign level is critical." },
    { title: "Bar Association Compliance", description: "Legal advertising is regulated by state bar associations with rules around testimonials, case results, and certain types of claims. Non-compliant ads can create ethical problems." },
    { title: "After-Hours & Weekend Leads", description: "Legal crises happen 24/7. Campaigns must be optimized for after-hours lead capture, with call forwarding and intake systems that convert urgent inquiries." },
  ],
  solutions: [
    { service: "Google Ads Management", description: "Intent-based search campaigns targeting people actively searching for legal help — capturing the highest-quality case inquiries.", href: "/services/google-ads" },
    { service: "Lead Generation", description: "Case inquiry campaigns with qualifying forms, call tracking, and after-hours intake optimization.", href: "/services/lead-generation" },
    { service: "Facebook & Instagram Ads", description: "Awareness and education campaigns reaching accident victims, defendants, and people navigating legal situations.", href: "/services/facebook-instagram-ads" },
    { service: "Programmatic Advertising", description: "Reach people recently involved in accidents or legal situations through contextual and intent-based programmatic targeting.", href: "/services/programmatic-advertising" },
  ],
  stats: [
    { value: "64%", label: "Avg. CPL Reduction" },
    { value: "4x", label: "Avg. Signed Cases Increase" },
    { value: "$162", label: "Avg. Cost Per Case Lead" },
    { value: "210%", label: "Avg. Click-to-Call Increase" },
  ],
  contentSections: [
    {
      heading: "Law Firm Practice Areas We Serve",
      body: `<p>We have specialized campaign experience across every major law firm practice area:</p>
<ul>
<li><strong>Personal Injury:</strong> Car accidents, slip and fall, truck accidents, motorcycle accidents, medical malpractice. Highest-volume and highest-CPL practice area.</li>
<li><strong>Criminal Defense:</strong> DUI, drug offenses, assault, white collar crime. Time-sensitive leads that require immediate response.</li>
<li><strong>Family Law:</strong> Divorce, child custody, adoption, domestic violence. Emotionally sensitive campaigns requiring appropriate tone.</li>
<li><strong>Business Litigation:</strong> Contract disputes, employment law, real estate litigation. B2B-oriented campaigns targeting business owners and executives.</li>
<li><strong>Immigration Law:</strong> Visa applications, green cards, asylum. Increasingly competitive with strong Spanish-language targeting opportunities.</li>
<li><strong>Estate Planning & Probate:</strong> Wills, trusts, probate. Lower competition than injury law with strong returns for estate planning firms.</li>
<li><strong>Workers' Compensation:</strong> Workplace injury claims. High search volume with motivated plaintiff inquiries.</li>
</ul>`,
    },
    {
      heading: "Maximizing Law Firm Lead Quality",
      body: `<p>For law firms, lead quality matters more than lead volume. A high volume of poor-quality inquiries wastes intake staff time and drives up cost-per-signed-case. Our law firm campaigns use multiple strategies to improve lead quality:</p>
<p><strong>Qualifying Keywords:</strong> We target keywords that signal case intent ("after car accident," "hurt in slip and fall," "need DUI lawyer tonight") rather than informational queries ("what is personal injury").</p>
<p><strong>Pre-Qualifying Forms:</strong> Lead forms include qualifying questions about accident date, injury type, and at-fault party — screening out inquiries that don't meet your case criteria before they reach intake.</p>
<p><strong>Call Quality Monitoring:</strong> We use call tracking with recording and keyword analysis to score lead quality by source and campaign, enabling optimization toward your highest-quality case types.</p>`,
    },
  ],
  faqs: [
    {
      question: "What's the best advertising channel for law firms?",
      answer:
        "Google Search is typically the highest-converting channel for law firms because it captures people actively searching for legal help — the highest intent signals available. Facebook works well for awareness campaigns and can generate leads at lower CPL, though quality varies. The best results come from combining both channels.",
    },
    {
      question: "Are there restrictions on legal advertising?",
      answer:
        "Yes. State bar association rules govern what attorneys can say in advertising, including rules around case results, testimonials, and certain types of claims. Google and Meta also have policies around legal services advertising. Our team is familiar with these requirements and ensures all creative is compliant.",
    },
    {
      question: "How do you measure success for law firm advertising?",
      answer:
        "The primary metric is cost-per-signed-case — not cost-per-lead. We track the full funnel from ad click through intake consultation to retained client, enabling true ROI calculation. Secondary metrics include CPL by practice area, call-to-consultation rate, and consultation-to-retained rate.",
    },
  ],
  relevantServices: [
    { label: "Google Ads Management", href: "/services/google-ads", description: "High-intent case inquiry search campaigns" },
    { label: "Lead Generation", href: "/services/lead-generation", description: "Qualified case leads with pre-screening" },
    { label: "Facebook & Instagram Ads", href: "/services/facebook-instagram-ads", description: "Awareness and education for legal issues" },
  ],
  relatedLocations: [
    { label: "Law Firm Advertising New York", href: "/locations/new-york" },
    { label: "Law Firm Advertising Los Angeles", href: "/locations/los-angeles" },
    { label: "Law Firm Advertising Chicago", href: "/locations/chicago" },
    { label: "Law Firm Advertising Houston", href: "/locations/houston" },
    { label: "Law Firm Advertising Miami", href: "/locations/miami" },
  ],
  featuredTestimonialIds: ["t4", "t1"],
  featuredCaseStudyIds: ["reyes-law-firm-lead-gen"],
  schemaType: "LegalService",
};
