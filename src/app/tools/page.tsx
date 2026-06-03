import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Free Digital Marketing Tools | Calculators",
  description:
    "Free digital marketing tools: Google Ads ROI calculator, ad spend benchmarks by industry & more. Built by performance marketing specialists. No signup required.",
  path: "/tools",
});

const tools = [
  {
    slug: "/tools/google-ads-roi-calculator",
    badge: "Most Popular",
    badgeColor: "bg-electric text-white",
    title: "Google Ads ROI Calculator",
    description:
      "Enter your monthly budget, industry, customer value, and close rate to instantly estimate clicks, leads, revenue, and return on ad spend. Based on 2025 industry benchmarks.",
    cta: "Calculate My Google Ads ROI →",
    stats: ["13 industries", "2025 CPC data", "Instant results"],
  },
  {
    slug: "/tools/ad-spend-benchmarks",
    badge: "Data Report",
    badgeColor: "bg-navy text-white",
    title: "Ad Spend Benchmarks by Industry 2025",
    description:
      "Comprehensive CPC, CPL, CTR, conversion rate, and ROAS benchmarks for 20+ industries. See how your Google Ads performance compares to industry averages.",
    cta: "View Benchmarks →",
    stats: ["20+ industries", "CPC + CPL + ROAS", "Updated June 2025"],
  },
];

const comingSoon = [
  { title: "Facebook Ads ROI Calculator", description: "Estimate Meta advertising returns based on your audience size, industry, and customer value." },
  { title: "CPL Benchmark Calculator", description: "Find your maximum profitable cost per lead based on customer LTV and close rate." },
  { title: "Media Budget Planner", description: "Allocate your ad budget across channels based on your goals and industry benchmarks." },
  { title: "Reputation Score Checker", description: "Audit your online reputation across major review platforms and search results." },
];

export default function ToolsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-dark pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-electric/20 border border-electric/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-electric rounded-full animate-pulse"></span>
            <span className="text-electric-light text-sm font-semibold">100% Free — No Signup Required</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-4">
            Free Digital Marketing Tools
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            ROI calculators, industry benchmarks, and planning tools built by performance marketing specialists. Use them, share them, embed them.
          </p>
        </div>
      </section>

      {/* Tools grid */}
      <section className="bg-light-gray py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={tool.slug}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-electric/30 transition-all p-7 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${tool.badgeColor}`}>
                    {tool.badge}
                  </span>
                </div>
                <h2 className="text-xl font-display font-bold text-navy group-hover:text-electric transition-colors mb-3">
                  {tool.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                  {tool.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {tool.stats.map((s) => (
                    <span key={s} className="text-xs bg-light-gray text-gray-500 px-3 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
                <span className="text-electric font-semibold text-sm group-hover:underline">
                  {tool.cta}
                </span>
              </Link>
            ))}
          </div>

          {/* Coming soon */}
          <h2 className="text-lg font-bold text-navy mb-5">Coming Soon</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {comingSoon.map(({ title, description }) => (
              <div key={title} className="bg-white rounded-xl border border-dashed border-gray-200 p-5 opacity-60">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-navy">{title}</h3>
                  <span className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">Soon</span>
                </div>
                <p className="text-sm text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why we built these */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-navy mb-4">Built by Performance Marketing Specialists</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            These tools exist because we believe businesses deserve transparent data before they spend a dollar on advertising. Too many agencies pitch vague promises — we believe in showing you the math first. Every calculator and benchmark here is built from our team&apos;s experience managing over $2 billion in ad spend across 500+ client accounts.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Use these tools freely. Share them with your team, your clients, or anyone who needs help thinking through their digital marketing investment. No signup, no email required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-electric hover:bg-electric-dark text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
              Get a Free Audit →
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 bg-light-gray hover:bg-gray-200 text-navy font-bold px-7 py-3.5 rounded-xl transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
