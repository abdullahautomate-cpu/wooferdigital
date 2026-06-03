import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Google Ads Benchmarks 2025 | Industry Data",
  description:
    "2025 Google Ads benchmarks: average CPC, cost per lead, CTR & ROAS for 20+ industries. Use these ad spend benchmarks to evaluate your campaign performance.",
  path: "/tools/ad-spend-benchmarks",
});

const benchmarks = [
  { industry: "Legal / Law Firms",             avgCPC: "$25–50",  avgCPL: "$150–400", avgCTR: "4.76%",  avgCVR: "5.5%",  avgROAS: "6–15x",  notes: "Highest CPCs in search advertising. Personal injury and DUI top $80+/click." },
  { industry: "Insurance",                     avgCPC: "$15–25",  avgCPL: "$60–150",  avgCTR: "3.29%",  avgCVR: "5.0%",  avgROAS: "5–12x",  notes: "Competitive vertical. Auto and health insurance drive highest volume." },
  { industry: "Finance / Banking",             avgCPC: "$12–20",  avgCPL: "$80–200",  avgCTR: "2.91%",  avgCVR: "5.0%",  avgROAS: "4–10x",  notes: "Mortgage, loans, and credit card keywords command premium CPCs." },
  { industry: "Healthcare / Medical",          avgCPC: "$6–14",   avgCPL: "$50–150",  avgCTR: "3.27%",  avgCVR: "6.0%",  avgROAS: "5–15x",  notes: "HIPAA compliance required. Telehealth CPCs trending upward." },
  { industry: "Dental Practices",              avgCPC: "$5–12",   avgCPL: "$40–120",  avgCTR: "3.84%",  avgCVR: "8.0%",  avgROAS: "6–18x",  notes: "Cosmetic dentistry (implants, veneers) drives highest LTV and ROI." },
  { industry: "Real Estate",                   avgCPC: "$3–7",    avgCPL: "$25–80",   avgCTR: "3.71%",  avgCVR: "7.0%",  avgROAS: "4–12x",  notes: "Buyer and seller lead quality varies widely. Call tracking essential." },
  { industry: "Home Services",                 avgCPC: "$4–10",   avgCPL: "$30–80",   avgCTR: "4.20%",  avgCVR: "9.0%",  avgROAS: "5–20x",  notes: "HVAC, roofing, and plumbing convert extremely well. Click-to-call critical." },
  { industry: "SaaS / Technology",             avgCPC: "$4–8",    avgCPL: "$60–200",  avgCTR: "2.09%",  avgCVR: "4.0%",  avgROAS: "3–8x",   notes: "Longer sales cycles. Demo requests and trial signups are primary goals." },
  { industry: "Ecommerce / Retail",            avgCPC: "$0.80–3", avgCPL: "N/A",      avgCTR: "2.69%",  avgCVR: "3.0%",  avgROAS: "4–10x",  notes: "Shopping campaigns typically outperform Search for product-level ROAS." },
  { industry: "Education",                     avgCPC: "$3–6",    avgCPL: "$40–120",  avgCTR: "3.78%",  avgCVR: "5.5%",  avgROAS: "4–10x",  notes: "Enrollment seasonality (Jan–Mar, Aug–Sep) drives CPC spikes." },
  { industry: "Automotive Dealerships",        avgCPC: "$2–5",    avgCPL: "$30–90",   avgCTR: "4.00%",  avgCVR: "6.0%",  avgROAS: "5–15x",  notes: "Vehicle inventory campaigns and local targeting essential." },
  { industry: "B2B / Enterprise",              avgCPC: "$5–12",   avgCPL: "$80–300",  avgCTR: "2.55%",  avgCVR: "3.5%",  avgROAS: "3–8x",   notes: "Longer cycles. LinkedIn + Google combined approach maximizes pipeline." },
  { industry: "Restaurant / Food Service",     avgCPC: "$1–3",    avgCPL: "N/A",      avgCTR: "3.58%",  avgCVR: "5.0%",  avgROAS: "3–6x",   notes: "Local search and Google Maps placements drive foot traffic." },
  { industry: "Travel & Hospitality",          avgCPC: "$1.50–4", avgCPL: "N/A",      avgCTR: "3.55%",  avgCVR: "3.5%",  avgROAS: "4–8x",   notes: "Highly seasonal. OTA competition keeps CPCs moderate." },
  { industry: "Fitness & Wellness",            avgCPC: "$1.50–4", avgCPL: "$25–70",   avgCTR: "4.10%",  avgCVR: "6.5%",  avgROAS: "4–12x",  notes: "January spike in competition. Membership value drives ROI." },
  { industry: "Nonprofit",                     avgCPC: "$1–3",    avgCPL: "$25–80",   avgCTR: "2.56%",  avgCVR: "4.0%",  avgROAS: "3–8x",   notes: "Google Ad Grants provides $10,000/month in free search ads." },
  { industry: "Pest Control / Cleaning",       avgCPC: "$3–7",    avgCPL: "$25–60",   avgCTR: "4.50%",  avgCVR: "9.5%",  avgROAS: "6–20x",  notes: "Extremely high intent. Emergency-based queries convert in minutes." },
  { industry: "Veterinary / Pet Services",     avgCPC: "$2–5",    avgCPL: "$30–80",   avgCTR: "3.90%",  avgCVR: "8.0%",  avgROAS: "5–14x",  notes: "Emergency vet queries have highest intent and conversion rates." },
  { industry: "Moving & Storage",              avgCPC: "$3–8",    avgCPL: "$35–90",   avgCTR: "4.30%",  avgCVR: "8.5%",  avgROAS: "5–16x",  notes: "Highly seasonal (spring/summer). Local targeting essential." },
  { industry: "Accounting / Tax Services",     avgCPC: "$5–12",   avgCPL: "$50–150",  avgCTR: "3.50%",  avgCVR: "5.5%",  avgROAS: "5–15x",  notes: "Tax season (Jan–April) drives CPC spikes of 3–5x off-season rates." },
];

const repMetrics = [
  { metric: "Online reputation management", searchVol: "14,800/mo", difficulty: "50/100", avgCPC: "$12–28" },
  { metric: "Google Ads agency",            searchVol: "12,100/mo", difficulty: "35/100", avgCPC: "$18–40" },
  { metric: "AI SEO agency",                searchVol: "1,900/mo",  difficulty: "29/100", avgCPC: "$8–18"  },
  { metric: "B2B lead generation services", searchVol: "5,400/mo",  difficulty: "40/100", avgCPC: "$10–22" },
  { metric: "Media buying agency",          searchVol: "2,900/mo",  difficulty: "25/100", avgCPC: "$8–16"  },
  { metric: "Marketing automation experts", searchVol: "320/mo",    difficulty: "19/100", avgCPC: "$6–14"  },
];

export default function AdSpendBenchmarksPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-dark pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-electric/20 border border-electric/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-electric rounded-full"></span>
            <span className="text-electric-light text-sm font-semibold">2025 Industry Data</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-4 leading-tight">
            Google Ads Benchmarks by Industry 2025
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Average CPC, cost per lead, CTR, conversion rate, and ROAS for 20 industries. Use these benchmarks to evaluate your Google Ads performance and set realistic targets.
          </p>
          <p className="text-sm text-white/30 mt-4">
            Last updated: June 2025 · Based on $2B+ in managed ad spend across 500+ accounts
          </p>
        </div>
      </section>

      {/* Quick stats */}
      <section className="bg-white border-b border-gray-100 py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "20+",   label: "Industries Covered" },
            { value: "$2B+",  label: "Ad Spend Analyzed" },
            { value: "500+",  label: "Accounts Benchmarked" },
            { value: "2025",  label: "Data Updated" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-display font-black text-electric">{value}</p>
              <p className="text-sm text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main benchmarks table */}
      <section className="bg-light-gray py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-navy mb-2">Google Ads Performance Benchmarks by Industry</h2>
          <p className="text-gray-500 mb-8">
            CPL = Cost Per Lead. ROAS = Return on Ad Spend. CVR = Conversion Rate (click-to-lead or click-to-sale). These are averages — well-managed campaigns by a certified <Link href="/services/google-ads" className="text-electric hover:underline">Google Ads agency</Link> typically achieve 30–60% better performance.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-sm">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-navy text-white text-left">
                  <th className="px-5 py-4 font-semibold rounded-tl-2xl">Industry</th>
                  <th className="px-4 py-4 font-semibold">Avg CPC</th>
                  <th className="px-4 py-4 font-semibold">Avg CPL</th>
                  <th className="px-4 py-4 font-semibold">Avg CTR</th>
                  <th className="px-4 py-4 font-semibold">Avg CVR</th>
                  <th className="px-4 py-4 font-semibold">Avg ROAS</th>
                  <th className="px-5 py-4 font-semibold rounded-tr-2xl">Key Notes</th>
                </tr>
              </thead>
              <tbody>
                {benchmarks.map((row, i) => (
                  <tr key={row.industry} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-4 font-semibold text-navy">{row.industry}</td>
                    <td className="px-4 py-4 text-gray-700">{row.avgCPC}</td>
                    <td className="px-4 py-4 text-gray-700">{row.avgCPL}</td>
                    <td className="px-4 py-4 text-gray-700">{row.avgCTR}</td>
                    <td className="px-4 py-4 text-gray-700">{row.avgCVR}</td>
                    <td className="px-4 py-4 font-semibold text-electric">{row.avgROAS}</td>
                    <td className="px-5 py-4 text-gray-400 text-xs max-w-[200px]">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Agency service keyword benchmarks */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-navy mb-2">Digital Marketing Agency Keyword Benchmarks</h2>
          <p className="text-gray-500 mb-8">Search volume and competition data for top digital marketing service keywords (2025).</p>
          <div className="overflow-x-auto rounded-2xl shadow-sm">
            <table className="w-full bg-white text-sm border border-gray-100 rounded-2xl">
              <thead>
                <tr className="bg-light-gray text-left border-b border-gray-100">
                  <th className="px-5 py-4 font-semibold text-navy">Keyword</th>
                  <th className="px-4 py-4 font-semibold text-navy">Monthly Searches</th>
                  <th className="px-4 py-4 font-semibold text-navy">SEO Difficulty</th>
                  <th className="px-5 py-4 font-semibold text-navy">Avg CPC (Paid)</th>
                </tr>
              </thead>
              <tbody>
                {repMetrics.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? "" : "bg-gray-50"}>
                    <td className="px-5 py-4 font-medium text-navy">{row.metric}</td>
                    <td className="px-4 py-4 text-gray-600">{row.searchVol}</td>
                    <td className="px-4 py-4 text-gray-600">{row.difficulty}</td>
                    <td className="px-5 py-4 text-electric font-semibold">{row.avgCPC}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to use these benchmarks */}
      <section className="bg-light-gray py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-navy mb-8">How to Use These Benchmarks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Evaluate Your Current CPC", body: "If your actual CPC is significantly above these benchmarks, your Quality Score needs improvement. Lower Quality Scores mean paying more for the same position. A certified Google Ads specialist can identify and fix Quality Score issues." },
              { title: "Set a Realistic CPL Target", body: "Your maximum profitable CPL = (average customer value × lead-to-close rate). If your actual CPL is above this number, you need to either improve conversion rates, increase customer value, or lower CPC through better campaign structure." },
              { title: "Benchmark Your CTR", body: "CTR below 2% typically signals weak ad copy or poor keyword-to-ad relevance. Strong ad copy with high keyword relevance achieves 5–8% CTR on exact-match search campaigns. If you're below benchmark, ad copy testing is the priority." },
              { title: "Calculate Your ROAS Floor", body: "Your minimum acceptable ROAS = (total costs including ad spend + management) / revenue margin. For most businesses with 40–60% margins, a ROAS of 2.5–4x covers all costs and generates profit. Anything above is pure profit growth." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-navy mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Not Hitting These Benchmarks?
          </h2>
          <p className="text-white/60 mb-8">
            Our Google Ads specialists audit hundreds of accounts every year. In most cases, we find 30–60% of budget being wasted on the wrong keywords, poor campaign structure, or weak landing pages. A free audit shows you exactly where your numbers diverge from these benchmarks and what to fix.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-electric hover:bg-electric-dark text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Get Free Google Ads Audit →
            </Link>
            <Link
              href="/tools/google-ads-roi-calculator"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Calculate My ROI
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
