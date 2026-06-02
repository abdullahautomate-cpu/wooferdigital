import { Star } from "lucide-react";
import type { Testimonial } from "@/types/testimonial";
import { getAllTestimonials } from "@/data/testimonials";
import GradientText from "@/components/ui/GradientText";

interface TestimonialGridProps {
  ids?: string[];
  title?: string;
}

export default function TestimonialGrid({
  ids,
  title = "What Our Clients Say",
}: TestimonialGridProps) {
  const all = getAllTestimonials();
  const testimonials = ids
    ? all.filter((t) => ids.includes(t.id)).slice(0, 3)
    : all.slice(0, 3);

  return (
    <section className="section-padding bg-light-gray">
      <div className="container-xl">
        <div className="text-center mb-12">
          <p className="text-electric font-semibold text-sm uppercase tracking-widest mb-3">
            Client Results
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
            <GradientText>{title}</GradientText>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t: Testimonial) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-electric rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">{t.author}</p>
                  <p className="text-xs text-gray-400">{t.title}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
