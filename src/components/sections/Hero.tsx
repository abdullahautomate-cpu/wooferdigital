import Link from "next/link";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import BookingCalendar from "@/components/forms/BookingCalendar";
import StatsBar from "./StatsBar";
import TrustLogos from "./TrustLogos";

export default function Hero() {
  return (
    <>
      <section className="hero-mesh dot-pattern relative overflow-hidden">
        {/* Glow orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-electric/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-electric/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-electric/15 border border-electric/25 text-electric-light text-sm font-medium px-4 py-1.5 rounded-full mb-8">
              <span className="w-2 h-2 bg-electric-light rounded-full animate-pulse-slow" />
              #1 Performance Media Buying Agency in the U.S.
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-6">
              Scale Your Brand With{" "}
              <GradientText>Media Buying</GradientText>{" "}
              That Actually Delivers
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Woofer Digital manages $2B+ in annual ad spend for growth-focused brands. We combine data-driven strategy, elite media buying, and relentless optimization to maximize your ROAS.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button href="/contact" variant="primary" size="lg">
                Get Your Free Media Audit
              </Button>
              <Button href="/case-studies" variant="ghost" size="lg">
                View Our Results →
              </Button>
            </div>

            {/* Booking Calendar */}
            <div className="bg-white rounded-2xl shadow-2xl mb-10 text-left">
              <BookingCalendar />
            </div>

            {/* Social proof micro-stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
              {[
                { num: "500+", label: "brands scaled" },
                { num: "$2B+", label: "ad spend managed" },
                { num: "340%", label: "avg. ROAS improvement" },
                { num: "98%", label: "client retention" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-1.5">
                  <span className="font-bold text-electric-light">{stat.num}</span>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustLogos />
      <StatsBar />
    </>
  );
}
