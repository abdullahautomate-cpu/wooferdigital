import type { ContentSection } from "@/types/service";

interface ServiceContentBodyProps {
  intro: string;
  sections: ContentSection[];
}

export default function ServiceContentBody({ intro, sections }: ServiceContentBodyProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-xl">
        <div className="max-w-3xl mx-auto">
          {/* Intro */}
          <p className="text-lg text-gray-600 leading-relaxed mb-10 pb-10 border-b border-gray-100">
            {intro}
          </p>

          {/* Content sections */}
          <div className="space-y-10">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-display font-bold text-navy mb-4">
                  {section.heading}
                </h2>
                <div
                  className="prose-navy"
                  dangerouslySetInnerHTML={{ __html: section.body }}
                />
                {section.subSections && section.subSections.length > 0 && (
                  <div className="mt-6 space-y-5 ml-4 border-l-2 border-electric/20 pl-6">
                    {section.subSections.map((sub, subIdx) => (
                      <div key={subIdx}>
                        <h3 className="text-xl font-display font-semibold text-navy mb-2">
                          {sub.heading}
                        </h3>
                        <div
                          className="prose-navy"
                          dangerouslySetInnerHTML={{ __html: sub.body }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
