import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbSchema } from "@/lib/schema";
import SchemaOrg from "@/components/seo/SchemaOrg";
import ServiceHero from "@/components/sections/ServiceHero";
import StatsBar from "@/components/sections/StatsBar";
import ServiceContentBody from "@/components/sections/ServiceContentBody";
import CTABanner from "@/components/sections/CTABanner";
import TestimonialGrid from "@/components/sections/TestimonialGrid";
import CaseStudyTeaser from "@/components/sections/CaseStudyTeaser";
import FAQAccordion from "@/components/sections/FAQAccordion";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { IndustryPage } from "@/types/industry";
import { healthcareData } from "@/data/industries/healthcare";
import { lawFirmData } from "@/data/industries/law-firm";
import { dentalData } from "@/data/industries/dental";
import { realEstateData } from "@/data/industries/real-estate";
import { saasData } from "@/data/industries/saas";
import { insuranceData } from "@/data/industries/insurance";
import { financialServicesData } from "@/data/industries/financial-services";
import { homeServicesData } from "@/data/industries/home-services";
import { automotiveData } from "@/data/industries/automotive";
import { educationData } from "@/data/industries/education";

const INDUSTRIES: Record<string, IndustryPage> = {
  healthcare: healthcareData,
  "law-firm": lawFirmData,
  dental: dentalData,
  "real-estate": realEstateData,
  saas: saasData,
  insurance: insuranceData,
  "financial-services": financialServicesData,
  "home-services": homeServicesData,
  automotive: automotiveData,
  education: educationData,
};

interface Props {
  params: { industry: string };
}

export async function generateStaticParams() {
  return Object.keys(INDUSTRIES).map((slug) => ({ industry: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = INDUSTRIES[params.industry];
  if (!data) return {};
  return buildMetadata({
    title: data.metaTitle,
    description: data.metaDescription,
    path: `/industries/${data.slug}`,
  });
}

export default function IndustryPage({ params }: Props) {
  const data = INDUSTRIES[params.industry];
  if (!data) notFound();

  const breadcrumbSchema = buildBreadcrumbSchema(data.breadcrumbs);

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <ServiceHero
        headline={data.heroHeadline}
        subheadline={data.heroSubheadline}
        ctaText={data.heroCTAText}
        breadcrumbs={data.breadcrumbs}
      />

      {/* Challenges & Solutions */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-display font-bold text-navy mb-6">
                Key Challenges in {data.industry} Advertising
              </h2>
              <div className="space-y-4">
                {data.challenges.map((c, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-light-gray rounded-xl">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-500 shrink-0">
                      ⚠
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">{c.title}</p>
                      <p className="text-gray-500 text-sm mt-1">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-navy mb-6">
                Our Solutions for {data.industry}
              </h2>
              <div className="space-y-4">
                {data.solutions.map((s, i) => (
                  <a key={i} href={s.href} className="group flex gap-4 p-4 bg-light-gray hover:bg-electric/5 rounded-xl border border-transparent hover:border-electric/20 transition-all">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm group-hover:text-electric transition-colors">{s.service}</p>
                      <p className="text-gray-500 text-sm mt-1">{s.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />
      <ServiceContentBody intro={data.introText} sections={data.contentSections} />
      <CTABanner variant="electric" />
      <TestimonialGrid ids={data.featuredTestimonialIds} />
      <CaseStudyTeaser ids={data.featuredCaseStudyIds} />
      {data.faqs.length > 0 && <FAQAccordion faqs={data.faqs} />}
      <RelatedLinks
        services={data.relevantServices}
        locations={data.relatedLocations}
      />
      <CTABanner variant="dark" />
    </>
  );
}
