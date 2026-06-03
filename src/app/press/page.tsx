import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Press Releases & News | Woofer Digital",
  description:
    "Latest press releases and news from Woofer Digital — a leading U.S. digital marketing agency specializing in Google Ads, reputation management, AI SEO, and marketing automation.",
  path: "/press",
});

const releases = [
  {
    date: "June 3, 2025",
    slug: "woofer-digital-launches-ai-seo-reputation-management",
    headline: "Woofer Digital Launches AI SEO, Online Reputation Management, and Marketing Automation Services",
    subhead: "Leading U.S. paid media agency expands into three high-growth service categories to deliver full-funnel digital marketing solutions for U.S. businesses",
    body: [
      "Woofer Digital, a leading U.S. digital marketing and paid media agency, today announced the launch of three new service lines: AI SEO, Online Reputation Management, and Marketing Automation. The expansion positions Woofer Digital as a comprehensive digital marketing partner for businesses seeking to dominate search engine rankings, protect and grow their online reputation, and automate their marketing and sales workflows.",
      "The new AI SEO service leverages artificial intelligence and machine learning to deliver search engine optimization that works in alignment with Google's own AI-driven ranking algorithms. Woofer Digital's ai-powered seo agents perform continuous site monitoring, competitive analysis, content optimization, and technical auditing — creating a compounding ranking advantage that traditional SEO methods cannot match.",
      "The Online Reputation Management service addresses the growing demand from businesses and individuals for professional online reputation management services. The service includes review generation and management, search result suppression, brand authority building, social media reputation monitoring, and white label reputation management for agency partners.",
      "The Marketing Automation service provides businesses with certified automation experts who design, build, and optimize full-funnel automation systems — from email automation and lead scoring to AI business automation and sales automation. Woofer Digital's automation experts serve businesses across the United States, building systems that generate revenue 24/7 without adding headcount.",
      `"These three services represent the areas where we see the most urgent demand from U.S. businesses right now," said a Woofer Digital spokesperson. "Businesses are losing revenue every day to negative search results, under-optimized Google rankings, and manual processes that automation could handle. We've built the expertise, the technology, and the proven methodology to solve all three — and we're making them available to any U.S. business that wants to compete and win online."`,
      "The new services are available immediately to new and existing Woofer Digital clients. All three services include a free initial consultation and performance audit. Woofer Digital continues to offer its existing services including Google Ads management, media buying, lead generation, Facebook and Instagram advertising, programmatic advertising, TikTok advertising, connected TV, and ecommerce advertising.",
    ],
    contacts: [
      { label: "Media Contact", name: "Woofer Digital Communications", email: "press@wooferdigital.com" },
    ],
    about: "Woofer Digital is a full-service digital marketing and paid media agency serving U.S. businesses across every major industry. The agency manages over $2 billion in annual ad spend for 500+ brands and specializes in Google Ads management, media buying, lead generation, AI SEO, reputation management, and marketing automation. Learn more at wooferdigital.com.",
  },
];

export default function PressPage() {
  const release = releases[0];

  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-navy to-navy-dark pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-electric-light text-sm font-semibold uppercase tracking-widest mb-3">Press Room</p>
          <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-4">
            Press Releases & News
          </h1>
          <p className="text-white/60 max-w-2xl">
            For media inquiries, interview requests, or press kit materials, contact{" "}
            <a href="mailto:press@wooferdigital.com" className="text-electric-light hover:underline">
              press@wooferdigital.com
            </a>
          </p>
        </div>
      </section>

      {/* Press release */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">

          {/* PR Header */}
          <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-light-gray px-8 py-5 border-b border-gray-100">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">FOR IMMEDIATE RELEASE</span>
                <span className="text-sm text-gray-500">{release.date}</span>
              </div>
            </div>

            <div className="px-8 py-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-navy mb-3 leading-tight">
                {release.headline}
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">{release.subhead}</p>

              <div className="prose prose-gray max-w-none space-y-5">
                {release.body.map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
                ))}
              </div>

              {/* Boilerplate */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">About Woofer Digital</p>
                <p className="text-sm text-gray-500 leading-relaxed">{release.about}</p>
              </div>

              {/* Contact */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Media Contacts</p>
                {release.contacts.map(({ label, name, email }) => (
                  <div key={email} className="text-sm text-gray-600">
                    <span className="font-semibold">{label}:</span> {name} —{" "}
                    <a href={`mailto:${email}`} className="text-electric hover:underline">{email}</a>
                  </div>
                ))}
              </div>

              {/* Download / copy */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-electric hover:bg-electric-dark text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
                >
                  Request Interview →
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-light-gray hover:bg-gray-200 text-navy font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
                >
                  Company Overview
                </Link>
              </div>
            </div>
          </div>

          {/* Services mentioned */}
          <div className="mt-12">
            <h3 className="text-lg font-bold text-navy mb-5">Services Referenced in This Release</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "AI SEO Services", href: "/services/ai-seo", desc: "AI-powered SEO optimization" },
                { label: "Reputation Management", href: "/services/reputation-management", desc: "Online reputation management services" },
                { label: "Marketing Automation", href: "/services/marketing-automation", desc: "Business & sales automation experts" },
              ].map(({ label, href, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="bg-light-gray rounded-xl p-5 hover:bg-electric/5 hover:border-electric border border-transparent transition-all group"
                >
                  <p className="font-semibold text-navy group-hover:text-electric transition-colors">{label}</p>
                  <p className="text-sm text-gray-400 mt-1">{desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
