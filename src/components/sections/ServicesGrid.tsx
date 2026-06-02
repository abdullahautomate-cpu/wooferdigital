import Link from "next/link";
import {
  BarChart2, Search, ThumbsUp, Music2, Globe, Tv, Users, ShoppingBag,
} from "lucide-react";
import GradientText from "@/components/ui/GradientText";

const SERVICES = [
  {
    icon: BarChart2,
    title: "Media Buying",
    description: "Strategic cross-channel media planning and placement to maximize reach and efficiency at every stage of the funnel.",
    href: "/services/media-buying",
    keywords: ["CPM Optimization", "Media Planning", "Cross-Channel"],
  },
  {
    icon: Search,
    title: "Google Ads",
    description: "Search, Display, YouTube, Shopping, and Performance Max campaigns managed by certified Google Ads specialists.",
    href: "/services/google-ads",
    keywords: ["Search Ads", "Shopping", "YouTube Ads"],
  },
  {
    icon: ThumbsUp,
    title: "Facebook & Instagram Ads",
    description: "Full-funnel Meta advertising that drives leads, sales, and brand awareness with creative-led strategies.",
    href: "/services/facebook-instagram-ads",
    keywords: ["Meta Ads", "Retargeting", "Lookalike Audiences"],
  },
  {
    icon: Music2,
    title: "TikTok Advertising",
    description: "Native TikTok campaigns that stop the scroll and convert. Creative strategy + performance buying combined.",
    href: "/services/tiktok-advertising",
    keywords: ["Spark Ads", "TopView", "In-Feed Ads"],
  },
  {
    icon: Globe,
    title: "Programmatic Advertising",
    description: "DSP-powered programmatic buying with advanced audience targeting, real-time bidding, and full-funnel attribution.",
    href: "/services/programmatic-advertising",
    keywords: ["DSP", "RTB", "Data-Driven"],
  },
  {
    icon: Tv,
    title: "Connected TV (CTV)",
    description: "Reach cord-cutters on Hulu, Roku, Peacock, and 40+ streaming platforms with measurable CTV campaigns.",
    href: "/services/connected-tv",
    keywords: ["OTT", "Streaming Ads", "CTV Attribution"],
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "Cost-efficient paid lead generation for B2B, healthcare, legal, real estate, and service businesses.",
    href: "/services/lead-generation",
    keywords: ["B2B Leads", "CPL Reduction", "Lead Quality"],
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce Advertising",
    description: "Proven ecommerce ad strategies for Shopify, WooCommerce, and DTC brands ready to scale past 6 and 7 figures.",
    href: "/services/ecommerce-advertising",
    keywords: ["ROAS", "Dynamic Ads", "Shopping Feeds"],
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-light-gray">
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="text-electric font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
            Full-Spectrum <GradientText>Paid Media Services</GradientText>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From search to streaming, we manage every paid media channel with the same obsession for performance and measurable ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-electric/30 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-electric group-hover:scale-110 transition-all duration-300">
                  <Icon size={22} className="text-electric group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-bold text-navy text-lg mb-2 group-hover:text-electric transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.keywords.map((kw) => (
                    <span key={kw} className="text-xs bg-light-gray text-gray-500 px-2 py-0.5 rounded-md">
                      {kw}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
