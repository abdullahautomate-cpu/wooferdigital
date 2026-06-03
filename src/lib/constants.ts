export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://wooferdigital.com";
export const SITE_NAME = "Woofer Digital";
export const PHONE = "[PHONE]";
export const EMAIL = "[EMAIL]";
export const ADDRESS = "[ADDRESS]";

export const COLORS = {
  navy: "#0D1B3E",
  navyDark: "#060f22",
  navyLight: "#1a2f5a",
  electric: "#2563EB",
  electricLight: "#3b82f6",
  electricDark: "#1d4ed8",
  white: "#FFFFFF",
  lightGray: "#F8FAFC",
} as const;

export const NAV_SERVICES = [
  { label: "Media Buying", href: "/services/media-buying", description: "Strategic media planning & placement" },
  { label: "Google Ads", href: "/services/google-ads", description: "Search, Display, YouTube & Shopping" },
  { label: "Facebook & Instagram Ads", href: "/services/facebook-instagram-ads", description: "Meta advertising management" },
  { label: "TikTok Advertising", href: "/services/tiktok-advertising", description: "Performance-driven TikTok campaigns" },
  { label: "Programmatic Advertising", href: "/services/programmatic-advertising", description: "DSP management & real-time bidding" },
  { label: "Connected TV (CTV)", href: "/services/connected-tv", description: "OTT & streaming TV advertising" },
  { label: "Lead Generation", href: "/services/lead-generation", description: "B2B lead generation at scale" },
  { label: "Ecommerce Advertising", href: "/services/ecommerce-advertising", description: "DTC & ecommerce growth campaigns" },
  { label: "Reputation Management", href: "/services/reputation-management", description: "Online reputation & review management" },
  { label: "AI SEO", href: "/services/ai-seo", description: "AI-powered SEO optimization" },
  { label: "Marketing Automation", href: "/services/marketing-automation", description: "AI & sales automation experts" },
] as const;

export const NAV_INDUSTRIES = [
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Law Firms", href: "/industries/law-firm" },
  { label: "Dental Practices", href: "/industries/dental" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "SaaS & Tech", href: "/industries/saas" },
  { label: "Insurance", href: "/industries/insurance" },
  { label: "Financial Services", href: "/industries/financial-services" },
  { label: "Home Services", href: "/industries/home-services" },
  { label: "Automotive", href: "/industries/automotive" },
  { label: "Education", href: "/industries/education" },
] as const;

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/wooferdigital",
  twitter: "https://twitter.com/wooferdigital",
  facebook: "https://facebook.com/wooferdigital",
  instagram: "https://instagram.com/wooferdigital",
} as const;
