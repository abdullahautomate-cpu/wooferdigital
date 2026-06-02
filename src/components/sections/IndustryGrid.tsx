import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GradientText from "@/components/ui/GradientText";

const INDUSTRIES = [
  { name: "Healthcare", href: "/industries/healthcare", icon: "🏥", desc: "HIPAA-compliant campaigns for hospitals, clinics & practices" },
  { name: "Law Firms", href: "/industries/law-firm", icon: "⚖️", desc: "High-value case lead generation for attorneys" },
  { name: "Dental Practices", href: "/industries/dental", icon: "🦷", desc: "Local patient acquisition for dental offices" },
  { name: "Real Estate", href: "/industries/real-estate", icon: "🏠", desc: "Buyer & seller lead generation for agents and brokerages" },
  { name: "SaaS & Tech", href: "/industries/saas", icon: "💻", desc: "Demand generation and free trial acquisition" },
  { name: "Insurance", href: "/industries/insurance", icon: "🛡️", desc: "Compliant insurance lead campaigns at scale" },
  { name: "Financial Services", href: "/industries/financial-services", icon: "📊", desc: "Lead gen for RIAs, lenders & financial advisors" },
  { name: "Home Services", href: "/industries/home-services", icon: "🔧", desc: "Local service area advertising for contractors" },
  { name: "Automotive", href: "/industries/automotive", icon: "🚗", desc: "Dealership & automotive brand advertising" },
  { name: "Education", href: "/industries/education", icon: "🎓", desc: "Student enrollment & lead generation for institutions" },
];

export default function IndustryGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-xl">
        <div className="text-center mb-12">
          <p className="text-electric font-semibold text-sm uppercase tracking-widest mb-3">
            Industries
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
            Specialized Expertise <GradientText>Across Every Vertical</GradientText>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We bring deep industry knowledge to every campaign, understanding the compliance requirements, competitive landscape, and buyer psychology unique to your market.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {INDUSTRIES.map((ind) => (
            <Link
              key={ind.href}
              href={ind.href}
              className="group bg-light-gray hover:bg-navy rounded-2xl p-5 transition-all duration-300 hover:shadow-card-hover"
            >
              <div className="text-3xl mb-3">{ind.icon}</div>
              <h3 className="font-display font-bold text-navy group-hover:text-white text-base mb-1 transition-colors">
                {ind.name}
              </h3>
              <p className="text-xs text-gray-500 group-hover:text-white/60 transition-colors leading-relaxed">
                {ind.desc}
              </p>
              <div className="flex items-center gap-1 mt-3 text-electric group-hover:text-electric-light text-xs font-semibold transition-colors">
                Learn more <ArrowRight size={10} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
