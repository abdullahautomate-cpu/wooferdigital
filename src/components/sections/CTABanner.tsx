import Button from "@/components/ui/Button";
import { PHONE } from "@/lib/constants";

interface CTABannerProps {
  variant?: "electric" | "dark";
  headline?: string;
  subheadline?: string;
  primaryCTA?: string;
  primaryHref?: string;
  secondaryCTA?: string;
  showPhone?: boolean;
}

export default function CTABanner({
  variant = "electric",
  headline = "Ready to Scale Your Paid Media Performance?",
  subheadline = "Get a free, no-obligation media audit from our team of certified performance marketing specialists.",
  primaryCTA = "Book Your Free Strategy Call",
  primaryHref = "/contact",
  secondaryCTA = "View Case Studies",
  showPhone = true,
}: CTABannerProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`py-16 md:py-20 relative ${
        isDark ? "bg-gradient-navy" : "bg-gradient-electric"
      }`}
    >
      {/* Decoratives isolated so they don't affect layout */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
          {headline}
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">{subheadline}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={primaryHref} variant="white" size="lg">
            {primaryCTA}
          </Button>
          <Button href="/case-studies" variant="ghost" size="lg">
            {secondaryCTA}
          </Button>
        </div>

        {showPhone && (
          <p className="mt-8 text-white/60 text-sm">
            Or call us directly:{" "}
            <a href={`tel:${PHONE}`} className="text-white font-semibold hover:text-white/80 transition-colors">
              {PHONE}
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
