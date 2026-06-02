import AnimatedCounter from "@/components/ui/AnimatedCounter";

const STATS = [
  { value: 500, suffix: "+", label: "Brands Scaled", prefix: "" },
  { value: 2, suffix: "B+", label: "Annual Ad Spend Managed", prefix: "$" },
  { value: 340, suffix: "%", label: "Average ROAS Improvement", prefix: "" },
  { value: 98, suffix: "%", label: "Client Retention Rate", prefix: "" },
];

export default function StatsBar() {
  return (
    <section className="bg-gradient-navy border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                <AnimatedCounter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-sm text-white/60 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
