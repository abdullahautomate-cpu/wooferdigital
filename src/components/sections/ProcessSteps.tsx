import GradientText from "@/components/ui/GradientText";

const STEPS = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "We deep-dive into your business, audience, competitors, and existing ad accounts. Every engagement starts with a comprehensive performance audit to uncover hidden inefficiencies and untapped opportunities.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Strategy & Media Planning",
    description:
      "Our strategists build a custom media plan tailored to your goals, budget, and target audience. We map out the full funnel — from awareness through conversion — and select the exact channels and placements to deliver maximum ROI.",
    icon: "📋",
  },
  {
    number: "03",
    title: "Launch & Optimize",
    description:
      "We execute with precision, setting up campaigns with best-in-class structure, tracking, and creative. From day one, our team monitors performance daily and optimizes continuously — adjusting bids, audiences, creatives, and placements in real time.",
    icon: "🚀",
  },
  {
    number: "04",
    title: "Report & Scale",
    description:
      "Transparent reporting delivered weekly and monthly with the metrics that matter. As performance data accumulates, we scale what's working, cut what isn't, and reinvest budget into the highest-returning channels and campaigns.",
    icon: "📈",
  },
];

export default function ProcessSteps() {
  return (
    <section className="section-padding bg-white">
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="text-electric font-semibold text-sm uppercase tracking-widest mb-3">
            How We Work
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
            A Proven Process for <GradientText>Predictable Growth</GradientText>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every Woofer Digital engagement follows our battle-tested four-phase framework, designed to maximize ROAS from day one and compound results over time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-electric/20 via-electric to-electric/20" />

          {STEPS.map((step, idx) => (
            <div key={step.number} className="relative">
              {/* Number badge */}
              <div className="w-20 h-20 bg-gradient-electric rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-electric-glow relative z-10">
                <span className="text-white font-display font-bold text-xl">{step.number}</span>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="font-display font-bold text-navy text-xl mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
