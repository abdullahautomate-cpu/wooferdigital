"use client";

import { useState, useMemo } from "react";

const INDUSTRY_DATA: Record<string, { cpc: number; convRate: number; label: string }> = {
  legal:         { cpc: 28,  convRate: 0.055, label: "Legal / Law Firms" },
  insurance:     { cpc: 19,  convRate: 0.050, label: "Insurance" },
  finance:       { cpc: 15,  convRate: 0.050, label: "Finance / Banking" },
  healthcare:    { cpc: 9,   convRate: 0.060, label: "Healthcare / Medical" },
  dental:        { cpc: 8,   convRate: 0.080, label: "Dental Practices" },
  real_estate:   { cpc: 4.5, convRate: 0.070, label: "Real Estate" },
  home_services: { cpc: 6.5, convRate: 0.090, label: "Home Services (HVAC, Plumbing, Roofing)" },
  saas:          { cpc: 5.5, convRate: 0.040, label: "SaaS / Technology" },
  ecommerce:     { cpc: 1.8, convRate: 0.030, label: "Ecommerce / Retail" },
  education:     { cpc: 4,   convRate: 0.055, label: "Education" },
  automotive:    { cpc: 3.5, convRate: 0.060, label: "Automotive" },
  b2b:           { cpc: 6,   convRate: 0.035, label: "B2B / Enterprise" },
  other:         { cpc: 4.5, convRate: 0.050, label: "Other Industry" },
};

function formatCurrency(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}K`;
  return `$${Math.round(n).toLocaleString()}`;
}

function formatNumber(n: number) {
  return Math.round(n).toLocaleString();
}

export default function GoogleAdsCalculator() {
  const [budget, setBudget]         = useState(5000);
  const [industry, setIndustry]     = useState("home_services");
  const [customerValue, setCustomerValue] = useState(2000);
  const [closeRate, setCloseRate]   = useState(20);

  const results = useMemo(() => {
    const { cpc, convRate } = INDUSTRY_DATA[industry];
    const clicks      = budget / cpc;
    const leads       = clicks * convRate;
    const customers   = leads * (closeRate / 100);
    const revenue     = customers * customerValue;
    const profit      = revenue - budget;
    const roas        = budget > 0 ? revenue / budget : 0;
    const roi         = budget > 0 ? (profit / budget) * 100 : 0;
    const cpl         = leads > 0 ? budget / leads : 0;
    return { clicks, leads, customers, revenue, profit, roas, roi, cpl };
  }, [budget, industry, customerValue, closeRate]);

  const roiColor = results.roi >= 200 ? "text-green-400" : results.roi >= 0 ? "text-yellow-400" : "text-red-400";

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Inputs */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">
            Monthly Google Ads Budget
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
            <input
              type="number"
              min={500}
              max={500000}
              step={500}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl text-navy font-semibold focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent"
            />
          </div>
          <input
            type="range"
            min={500}
            max={50000}
            step={500}
            value={Math.min(budget, 50000)}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full mt-2 accent-electric"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>$500</span><span>$50,000+</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy mb-2">Your Industry</label>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-navy font-medium focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent bg-white"
          >
            {Object.entries(INDUSTRY_DATA).map(([key, { label }]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
          <p className="text-xs text-gray-400 mt-1.5">
            Avg CPC for your industry: <strong className="text-navy">${INDUSTRY_DATA[industry].cpc}</strong>
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy mb-2">
            Average Customer / Job Value
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
            <input
              type="number"
              min={100}
              max={100000}
              step={100}
              value={customerValue}
              onChange={(e) => setCustomerValue(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl text-navy font-semibold focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy mb-2">
            Lead-to-Customer Close Rate: <span className="text-electric">{closeRate}%</span>
          </label>
          <input
            type="range"
            min={1}
            max={80}
            step={1}
            value={closeRate}
            onChange={(e) => setCloseRate(Number(e.target.value))}
            className="w-full accent-electric"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>1%</span><span>80%</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {/* Hero ROI */}
        <div className="bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-7 text-white">
          <p className="text-xs font-semibold text-electric-light uppercase tracking-widest mb-1">Projected Monthly ROI</p>
          <p className={`text-5xl font-display font-black mb-1 ${roiColor}`}>
            {results.roi >= 0 ? "+" : ""}{Math.round(results.roi)}%
          </p>
          <p className="text-white/60 text-sm">
            {results.profit >= 0 ? "Estimated profit: " : "Estimated loss: "}
            <strong className="text-white">{formatCurrency(Math.abs(results.profit))}</strong> on a {formatCurrency(budget)} budget
          </p>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Est. Monthly Clicks",    value: formatNumber(results.clicks),    sub: `@ $${INDUSTRY_DATA[industry].cpc} avg CPC` },
            { label: "Est. Monthly Leads",     value: formatNumber(results.leads),     sub: `${(INDUSTRY_DATA[industry].convRate * 100).toFixed(1)}% conv. rate` },
            { label: "Est. New Customers",     value: formatNumber(results.customers), sub: `${closeRate}% close rate` },
            { label: "Est. Monthly Revenue",   value: formatCurrency(results.revenue), sub: `@ ${formatCurrency(customerValue)}/customer` },
            { label: "Cost Per Lead (CPL)",    value: formatCurrency(results.cpl),     sub: "your blended CPL" },
            { label: "Return on Ad Spend",     value: `${results.roas.toFixed(1)}x`,   sub: "ROAS" },
          ].map(({ label, value, sub }) => (
            <div key={label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
              <p className="text-xs text-gray-400 mb-1">{label}</p>
              <p className="text-xl font-display font-bold text-navy">{value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 text-center px-2">
          Estimates based on 2025 industry average CPCs and conversion rates. Actual results vary based on campaign quality, competition, and landing page performance.
        </p>

        <a
          href="/contact"
          className="block w-full text-center bg-electric hover:bg-electric-dark text-white font-bold py-4 rounded-xl transition-colors"
        >
          Get a Free Google Ads Audit — See Your Real Numbers →
        </a>
      </div>
    </div>
  );
}
