import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GoogleAdsCalculator from "@/components/tools/GoogleAdsCalculator";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Free Google Ads ROI Calculator 2025 | Estimate Your Returns",
  description:
    "Calculate your Google Ads ROI instantly. Enter your monthly budget, industry, customer value, and close rate to see estimated clicks, leads, revenue, and return on ad spend. Free tool from Woofer Digital.",
  path: "/tools/google-ads-roi-calculator",
});

const faqs = [
  {
    q: "How accurate is this Google Ads ROI calculator?",
    a: "This calculator uses 2025 industry-average CPC and conversion rate benchmarks to generate realistic projections. Actual results vary based on campaign quality, ad copy, landing page performance, competition, and geographic targeting. A well-optimized campaign managed by experienced Google Ads specialists can significantly outperform these averages — which is why we recommend getting a free audit alongside using this tool.",
  },
  {
    q: "What is a good ROAS for Google Ads?",
    a: "A good ROAS (Return on Ad Spend) for Google Ads typically starts at 2x–3x for most service businesses, meaning you generate $2–3 in revenue for every $1 spent on ads. For ecommerce, 4x–8x is common for well-run campaigns. For high-ticket services (legal, healthcare, home services), ROAS of 5x–20x is achievable because the customer value is high relative to CPC. The key metric isn't ROAS in isolation — it's whether the revenue generated exceeds your total costs including ad spend, management fees, and cost of goods.",
  },
  {
    q: "What is a good cost per lead (CPL) for Google Ads?",
    a: "A good CPL depends entirely on your customer lifetime value. A home services business with a $500 average job can sustain a $40–60 CPL. A law firm with a $10,000+ case value can sustain a $200–400 CPL. Rule of thumb: your acceptable CPL = (average customer value × close rate from lead). If your customer value is $2,000 and you close 20% of leads, your maximum profitable CPL is $400.",
  },
  {
    q: "How much should I spend on Google Ads?",
    a: "Most service businesses need a minimum of $1,500–3,000/month in ad spend to generate meaningful data and results. High-competition industries (legal, insurance, finance) require $5,000–20,000+/month to compete. Start with enough budget to generate at least 100–200 clicks per month in your target market — that's the minimum needed to make data-driven optimization decisions.",
  },
  {
    q: "Should I manage Google Ads myself or hire an agency?",
    a: "Google Ads self-management can work for simple campaigns, but most businesses find that a certified Google Ads agency generates significantly better results — typically 30–60% lower cost per lead and 2–4x better ROAS — because of campaign structure expertise, continuous optimization, Quality Score management, and access to advanced bidding strategies. The management fee (typically 15–20% of ad spend) usually pays for itself within the first 30–60 days.",
  },
];

export default function GoogleAdsROICalculatorPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-dark pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-electric/20 border border-electric/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-electric rounded-full"></span>
            <span className="text-electric-light text-sm font-semibold">Free Google Ads Tool</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-4 leading-tight">
            Google Ads ROI Calculator
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-3">
            Enter your budget, industry, and customer value to instantly estimate your clicks, leads, revenue, and return on ad spend.
          </p>
          <p className="text-sm text-white/40">
            Based on 2025 Google Ads benchmarks across 13 industries · Updated monthly
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-light-gray py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <GoogleAdsCalculator />
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-navy mb-8 text-center">How This Calculator Works</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { step: "01", title: "Industry Avg CPC", body: "We use verified 2025 average cost-per-click benchmarks for 13 major industries to estimate how many clicks your budget buys." },
              { step: "02", title: "Conversion Rate", body: "Industry-average landing page conversion rates estimate how many of those clicks become leads or inquiries." },
              { step: "03", title: "Your Business Math", body: "Your close rate and customer value turn leads into projected revenue, profit, and ROI specific to your business." },
            ].map(({ step, title, body }) => (
              <div key={step} className="bg-light-gray rounded-2xl p-6">
                <div className="text-4xl font-display font-black text-electric/20 mb-2">{step}</div>
                <h3 className="font-bold text-navy mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{body}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-display font-bold text-navy mb-6">Google Ads ROI: Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border border-gray-100 rounded-xl p-6">
                <h3 className="font-bold text-navy mb-2">{q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Want to See Your <em>Real</em> Numbers?
          </h2>
          <p className="text-white/60 mb-8">
            This calculator uses industry averages. A free Google Ads audit from Woofer Digital shows you exactly what your specific account, keywords, and market can achieve — with real data, not estimates.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-electric hover:bg-electric-dark text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            Get My Free Google Ads Audit →
          </Link>
        </div>
      </section>

      {/* Related tools */}
      <section className="bg-light-gray py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-navy mb-5">More Free Tools & Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/tools/ad-spend-benchmarks" className="bg-white rounded-xl border border-gray-100 p-5 hover:border-electric transition-colors group">
              <p className="font-bold text-navy group-hover:text-electric transition-colors">Ad Spend Benchmarks by Industry →</p>
              <p className="text-sm text-gray-400 mt-1">CPC, CPL, and ROAS benchmarks across 20+ industries</p>
            </Link>
            <Link href="/services/google-ads" className="bg-white rounded-xl border border-gray-100 p-5 hover:border-electric transition-colors group">
              <p className="font-bold text-navy group-hover:text-electric transition-colors">Google Ads Management Services →</p>
              <p className="text-sm text-gray-400 mt-1">See how our Google Ads specialists improve these numbers</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
