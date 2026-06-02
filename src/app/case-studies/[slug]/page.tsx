import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudies, getCaseStudyBySlug } from "@/data/case-studies";
import { buildMetadata } from "@/lib/seo";
import { buildArticleSchema } from "@/lib/schema";
import SchemaOrg from "@/components/seo/SchemaOrg";
import CTABanner from "@/components/sections/CTABanner";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Star } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const studies = getCaseStudies();
  return studies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return {};
  return buildMetadata({
    title: study.metaTitle,
    description: study.metaDescription,
    path: `/case-studies/${study.slug}`,
    type: "article",
  });
}

export default function CaseStudyPage({ params }: Props) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.clientName + " Case Study",
    description: study.metaDescription,
    author: { "@type": "Organization", name: "Woofer Digital" },
    publisher: { "@type": "Organization", name: "Woofer Digital" },
  };

  return (
    <>
      <SchemaOrg schema={schema} />

      {/* Hero */}
      <section className="bg-gradient-hero dot-pattern pt-8 pb-16">
        <div className="container-xl">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="white">{study.clientIndustry}</Badge>
              {study.servicesUsed.map((s) => (
                <Badge key={s} variant="white">{s.replace(/-/g, " ")}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              {study.clientName}: {study.results[0]?.improvement} {study.results[0]?.metric}
            </h1>
            <p className="text-xl text-white/70">{study.challenge.substring(0, 160)}...</p>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {study.results.map((r) => (
              <div key={r.metric} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-electric mb-1">
                  {r.value}
                </div>
                <p className="text-sm font-semibold text-navy">{r.metric}</p>
                <p className="text-xs text-green-600 font-medium mt-0.5">{r.improvement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section-padding bg-light-gray">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card">
              <div
                className="prose-navy"
                dangerouslySetInnerHTML={{ __html: study.fullBody }}
              />
            </div>

            {/* Testimonial */}
            {study.testimonial && (
              <div className="mt-8 bg-navy rounded-2xl p-8 text-white">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-amber-400 fill-amber-400" />)}
                </div>
                <blockquote className="text-xl font-medium mb-6 text-white/90">
                  &ldquo;{study.testimonial}&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold text-white">{study.testimonialAuthor}</p>
                  <p className="text-white/60 text-sm">{study.testimonialTitle}</p>
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Get Similar Results for Your Brand
              </Button>
              <Button href="/case-studies" variant="secondary" size="lg">
                View All Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner headline="Ready to Be Our Next Success Story?" subheadline="Schedule a free media audit and let's discuss how Woofer Digital can drive similar outcomes for your brand." />
    </>
  );
}
