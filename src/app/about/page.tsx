import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GradientText from "@/components/ui/GradientText";
import CTABanner from "@/components/sections/CTABanner";
import StatsBar from "@/components/sections/StatsBar";
import TestimonialGrid from "@/components/sections/TestimonialGrid";
import Button from "@/components/ui/Button";

export const metadata: Metadata = buildMetadata({
  title: "About Woofer Digital | U.S. Media Buying Agency | Founded 2018",
  description:
    "Woofer Digital is a U.S. media buying & performance marketing agency founded in 2018. Meet our team, our values & our data-driven approach to paid advertising.",
  path: "/about",
});

const TEAM = [
  { name: "Alex Rivera", title: "CEO & Co-Founder", initials: "AR", bio: "Former Head of Paid Media at two Inc. 500 agencies. 15 years driving performance advertising for brands from startup to enterprise." },
  { name: "Jennifer Walsh", title: "Head of Strategy", initials: "JW", bio: "10 years leading paid media strategy for Fortune 500 brands and high-growth DTC companies. Google and Meta certified." },
  { name: "Marcus Chen", title: "VP of Programmatic", initials: "MC", bio: "Ex-The Trade Desk. Built programmatic programs for major financial services and healthcare brands with $100M+ in managed spend." },
  { name: "Sarah Kim", title: "Head of Ecommerce", initials: "SK", bio: "Former Head of Paid Social at a $500M DTC brand. Expert in Shopify, Meta, and Google Shopping for consumer brands." },
  { name: "David Torres", title: "VP of Client Success", initials: "DT", bio: "Client retention specialist with 98% satisfaction scores. Ensures every client relationship delivers on its growth objectives." },
  { name: "Rachel Green", title: "Head of Analytics", initials: "RG", bio: "Data science background with expertise in multi-touch attribution, incrementality testing, and marketing mix modeling." },
];

const VALUES = [
  { icon: "📊", title: "Data Over Intuition", description: "Every decision is grounded in data. We don't guess — we test, measure, and optimize based on actual performance evidence." },
  { icon: "🎯", title: "Results, Not Vanity Metrics", description: "We optimize for the metrics that matter to your business: revenue, leads, CAC, LTV — not impressions or engagement." },
  { icon: "🔍", title: "Radical Transparency", description: "You see everything: your accounts, your data, your reporting. No black boxes, no hidden markups, no surprises." },
  { icon: "🏆", title: "Senior-Only Execution", description: "Your account is managed by senior specialists with 7+ years experience — not by junior staff learning on your budget." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy bg-gradient-hero dot-pattern py-20">
        <div className="container-xl text-center">
          <div className="inline-flex items-center gap-2 bg-electric/15 border border-electric/25 text-electric-light text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Founded in 2018 · New York, NY
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            We&apos;re the Agency Built for <GradientText>Performance</GradientText>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Woofer Digital was founded with a singular mission: build the media buying agency we always wished existed — one where results matter more than promises, transparency is non-negotiable, and every account gets senior-level attention every day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">Get Your Free Audit</Button>
            <Button href="/case-studies" variant="ghost" size="lg">See Our Results</Button>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-electric font-semibold text-sm uppercase tracking-widest mb-4">Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
                Making World-Class Media Buying Accessible to Every Growth Brand
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For too long, the most sophisticated paid advertising strategies were reserved for brands with eight-figure marketing budgets and Fortune 500 resources. Enterprise brands had access to the best media buyers, the deepest data, and the most advanced attribution tools — while growth-stage companies made do with generalist agencies and junior teams.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Woofer Digital exists to change that. We bring enterprise-grade media buying expertise, senior-level execution, and institutional-quality data infrastructure to brands at every stage of growth. Whether you&apos;re investing $5,000 or $5 million per month in paid advertising, you get the same depth of expertise, the same transparency, and the same obsession with measurable results.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Since 2018, we&apos;ve helped 500+ brands scale their revenue through paid advertising — managing over $2 billion in cumulative ad spend with a 98% client retention rate. We&apos;re proud of those numbers, but we&apos;re prouder of the businesses we&apos;ve helped grow.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {VALUES.map((v) => (
                <div key={v.title} className="bg-light-gray rounded-2xl p-6">
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <h3 className="font-display font-bold text-navy text-base mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-light-gray">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="text-electric font-semibold text-sm uppercase tracking-widest mb-3">Leadership</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy">
              Meet the <GradientText>Leadership Team</GradientText>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-card transition-shadow">
                <div className="w-16 h-16 bg-gradient-electric rounded-2xl flex items-center justify-center text-white font-display font-bold text-xl mb-4">
                  {member.initials}
                </div>
                <h3 className="font-display font-bold text-navy text-lg">{member.name}</h3>
                <p className="text-electric text-sm font-medium mb-3">{member.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="container-xl text-center">
          <p className="text-electric font-semibold text-sm uppercase tracking-widest mb-4">Certifications & Awards</p>
          <h2 className="text-3xl font-display font-bold text-navy mb-10">Recognized for Excellence</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["Google Premier Partner", "Meta Business Partner", "TikTok Marketing Partner", "Shopify Partner", "IAB Member", "Inc. 5000 Agency", "Forbes Agency Council", "BBB A+ Rated"].map((cert) => (
              <div key={cert} className="bg-light-gray rounded-xl px-5 py-3 font-semibold text-sm text-gray-600">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialGrid />

      <CTABanner
        headline="Ready to Work With a Team That's Obsessed With Your Growth?"
        subheadline="Let's start with a free media audit. We'll analyze your current advertising strategy and show you exactly where we can improve performance."
      />
    </>
  );
}
