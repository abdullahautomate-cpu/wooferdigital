import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCaseStudies } from "@/data/case-studies";
import GradientText from "@/components/ui/GradientText";
import Button from "@/components/ui/Button";

interface CaseStudyTeaserProps {
  ids?: string[];
}

export default function CaseStudyTeaser({ ids }: CaseStudyTeaserProps) {
  const all = getCaseStudies();
  const studies = ids
    ? all.filter((c) => ids.includes(c.slug)).slice(0, 3)
    : all.slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-electric font-semibold text-sm uppercase tracking-widest mb-3">
              Proven Results
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy">
              Real Brands, <GradientText>Real Growth</GradientText>
            </h2>
          </div>
          <Button href="/case-studies" variant="secondary" size="md">
            View All Case Studies
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group bg-navy rounded-2xl p-6 hover:bg-navy-light transition-colors"
            >
              <div className="text-xs text-electric-light font-semibold uppercase tracking-widest mb-3">
                {study.clientIndustry}
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-3 group-hover:text-electric-light transition-colors">
                {study.clientName}
              </h3>
              <p className="text-white/60 text-sm mb-5 line-clamp-2">{study.challenge}</p>

              {/* Key results */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {study.results.slice(0, 2).map((r) => (
                  <div key={r.metric} className="bg-white/10 rounded-xl p-3">
                    <p className="text-xl font-bold text-white">{r.value}</p>
                    <p className="text-xs text-white/50 mt-0.5">{r.metric}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-electric-light text-sm font-semibold group-hover:gap-3 transition-all">
                Read Case Study <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
