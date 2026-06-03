import type { IndustryPage } from "@/types/industry";

export const educationData: IndustryPage = {
  slug: "education",
  industry: "Education",
  metaTitle: "Education Advertising Agency | Enroll",
  metaDescription:
    "Expert education advertising for universities, colleges, trade schools & online learning. Google Ads, Meta & programmatic for student enrollment. Free audit.",
  breadcrumbs: [{ label: "Industries", href: "/industries" }, { label: "Education", href: "/industries/education" }],
  heroHeadline: "Education Advertising Agency That Fills Enrollment Pipelines",
  heroSubheadline: "Data-driven paid advertising for universities, community colleges, trade schools, and online learning platforms — driving inquiry volume and enrollment at competitive CPL.",
  heroCTAText: "Get Free Education Ad Audit",
  introText: "Higher education advertising faces a unique combination of challenges: increasing competition for a shrinking pool of traditional-age students, rapidly growing adult learner and workforce development markets, strict FTC regulations around education advertising, and the complexity of advertising across multiple programs, campuses, and geographic markets simultaneously. Woofer Digital brings deep higher education advertising expertise to institutions seeking to grow enrollment through paid media.",
  challenges: [
    { title: "FTC & Regulatory Compliance", description: "Education advertising, particularly for for-profit institutions, is subject to FTC regulations and Department of Education marketing guidelines. Compliance is non-negotiable." },
    { title: "Program-Level Targeting", description: "A university with 50+ degree programs requires highly segmented campaigns — different audiences, messaging, and landing pages for each program or school." },
    { title: "Long Enrollment Decision Cycle", description: "Prospective students research for months before applying. Multi-touch nurture campaigns across email, retargeting, and content are essential for conversion." },
    { title: "Geographic & Demographic Complexity", description: "Reaching traditional students (18-22), adult learners (25-45), and workforce development candidates (all ages) requires fundamentally different targeting strategies." },
  ],
  solutions: [
    { service: "Google Ads Management", description: "Program-specific search campaigns capturing students actively searching for degree and certificate programs.", href: "/services/google-ads" },
    { service: "Facebook & Instagram Ads", description: "Social campaigns targeting prospective students by age, interests, and educational intent signals.", href: "/services/facebook-instagram-ads" },
    { service: "Programmatic Advertising", description: "Data-driven programmatic targeting reaching prospective students across premium educational publisher sites.", href: "/services/programmatic-advertising" },
    { service: "Lead Generation", description: "Request-for-information (RFI) campaigns with multi-step qualification and CRM integration.", href: "/services/lead-generation" },
  ],
  stats: [
    { value: "45%", label: "Avg. CPL Reduction" },
    { value: "2.8x", label: "Avg. RFI Volume Increase" },
    { value: "32%", label: "Avg. RFI-to-Application Rate" },
    { value: "28%", label: "Avg. Enrollment Conversion Rate" },
  ],
  contentSections: [
    {
      heading: "Education Advertising by Institution Type",
      body: `<p><strong>Universities & Four-Year Colleges:</strong> Undergraduate and graduate program campaigns across Google, Meta, and programmatic. Geographic targeting for regional recruitment, national campaigns for competitive programs, and international student acquisition.</p>
<p><strong>Community Colleges:</strong> Local focus with strong geographic targeting. Certificate and Associate degree campaigns. Adult learner messaging emphasizing career advancement and flexibility. Financial aid and transfer pathway campaigns.</p>
<p><strong>Trade Schools & Vocational Programs:</strong> Career-outcome focused messaging targeting high-school graduates and career-changers. Specific trade campaigns (welding, HVAC, medical assisting, coding bootcamps). Employer partnership and job placement messaging.</p>
<p><strong>Online Learning Platforms:</strong> National and global scale campaigns for online degree programs and professional certifications. Competitive keyword strategies and content marketing amplification. Subscription and enrollment funnel optimization.</p>`,
    },
  ],
  faqs: [
    {
      question: "What's a typical cost per enrollment inquiry for education?",
      answer: "For undergraduate programs, CPLs typically range from $50-150. Graduate programs range from $80-200. Online programs vary widely by competition and brand recognition. We typically achieve CPLs 30-45% below industry benchmarks through superior keyword strategy and landing page optimization.",
    },
    {
      question: "How do you handle multi-program campaigns for large universities?",
      answer: "We build campaign architectures with school-level and program-level segmentation, each with tailored landing pages, messaging, and audience targeting. This granular approach dramatically outperforms generic institutional campaigns.",
    },
  ],
  relevantServices: [
    { label: "Google Ads Management", href: "/services/google-ads", description: "Program-specific search campaigns" },
    { label: "Facebook & Instagram Ads", href: "/services/facebook-instagram-ads", description: "Prospective student social campaigns" },
    { label: "Lead Generation", href: "/services/lead-generation", description: "Enrollment inquiry campaigns" },
  ],
  relatedLocations: [
    { label: "Education Advertising New York", href: "/locations/new-york" },
    { label: "Education Advertising Los Angeles", href: "/locations/los-angeles" },
    { label: "Education Advertising Boston", href: "/locations/boston" },
    { label: "Education Advertising Chicago", href: "/locations/chicago" },
  ],
  featuredTestimonialIds: ["t3", "t7"],
  featuredCaseStudyIds: ["nexus-saas-programmatic"],
  schemaType: "EducationalOrganization",
};
