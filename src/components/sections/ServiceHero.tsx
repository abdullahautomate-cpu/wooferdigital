import Link from "next/link";
import { ChevronRight } from "lucide-react";
import LeadCaptureForm from "@/components/forms/LeadCaptureForm";
import Button from "@/components/ui/Button";

interface Breadcrumb {
  label: string;
  href: string;
}

interface ServiceHeroProps {
  headline: string;
  subheadline: string;
  ctaText?: string;
  ctaHref?: string;
  breadcrumbs?: Breadcrumb[];
  badge?: string;
  showForm?: boolean;
}

export default function ServiceHero({
  headline,
  subheadline,
  ctaText = "Get Free Media Audit",
  ctaHref = "/contact",
  breadcrumbs = [],
  badge,
  showForm = true,
}: ServiceHeroProps) {
  return (
    <section className="bg-gradient-hero dot-pattern relative overflow-hidden pt-4 pb-16 lg:pb-20">
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-electric/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-white/50 mb-6 pt-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-1">
                <ChevronRight size={12} />
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-white/80">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-4">
          {/* Left: Content */}
          <div>
            {badge && (
              <div className="inline-flex items-center gap-2 bg-electric/15 border border-electric/25 text-electric-light text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-electric-light rounded-full" />
                {badge}
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-6">
              {headline}
            </h1>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">{subheadline}</p>

            <div className="flex flex-wrap gap-4">
              <Button href={ctaHref} variant="primary" size="lg">
                {ctaText}
              </Button>
              <Button href="/case-studies" variant="ghost" size="lg">
                See Our Results
              </Button>
            </div>

            {/* Trust micro-proof */}
            <div className="flex flex-wrap gap-5 mt-8 text-sm text-white/50">
              {[
                "✓ No long-term contracts",
                "✓ Dedicated account manager",
                "✓ Results in 30 days or less",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          {showForm && (
            <div className="lg:sticky lg:top-24">
              <LeadCaptureForm dark />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
