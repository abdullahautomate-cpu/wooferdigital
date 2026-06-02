import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { getCaseStudies } from "@/data/case-studies";
import GradientText from "@/components/ui/GradientText";
import CTABanner from "@/components/sections/CTABanner";
import Badge from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies | Client Results & Performance Marketing Success Stories",
  description:
    "Real results from real clients. Explore Woofer Digital case studies featuring measurable outcomes across Google Ads, Meta, TikTok, programmatic, and media buying campaigns.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const caseStudies = getCaseStudies();

  return (
    <>
      <section className="bg-navy bg-gradient-hero dot-pattern py-16">
        <div className="container-xl text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Real Brands, <GradientText>Real Results</GradientText>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            We let our numbers speak for themselves. Explore detailed case studies from our client portfolio across industries, channels, and budget levels.
          </p>
        </div>
      </section>

      <section className="section-padding bg-light-gray">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                {/* Header */}
                <div className="bg-navy p-6">
                  <div className="w-12 h-12 bg-electric/20 rounded-xl flex items-center justify-center text-white font-bold text-sm mb-4">
                    {study.logoPlaceholder}
                  </div>
                  <Badge variant="white" className="mb-3">{study.clientIndustry}</Badge>
                  <h2 className="font-display font-bold text-white text-xl group-hover:text-electric-light transition-colors">
                    {study.clientName}
                  </h2>
                </div>

                {/* Results */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {study.results.slice(0, 2).map((r) => (
                      <div key={r.metric} className="bg-light-gray rounded-xl p-3">
                        <p className="text-xl font-bold text-navy">{r.value}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{r.metric}</p>
                        <p className="text-xs text-green-600 font-medium">{r.improvement}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4">{study.challenge}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.servicesUsed.slice(0, 2).map((s) => (
                      <Badge key={s} variant="blue">{s.replace(/-/g, " ")}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-electric text-sm font-semibold group-hover:gap-3 transition-all">
                    Read Full Case Study <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline="Want Results Like These?" subheadline="Start with a free media audit and let's map out how Woofer Digital can drive similar outcomes for your brand." />
    </>
  );
}
