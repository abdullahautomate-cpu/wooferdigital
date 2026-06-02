import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { buildLocalBusinessSchema, buildBreadcrumbSchema } from "@/lib/schema";
import SchemaOrg from "@/components/seo/SchemaOrg";
import ServiceHero from "@/components/sections/ServiceHero";
import StatsBar from "@/components/sections/StatsBar";
import ServiceContentBody from "@/components/sections/ServiceContentBody";
import CTABanner from "@/components/sections/CTABanner";
import TestimonialGrid from "@/components/sections/TestimonialGrid";
import FAQAccordion from "@/components/sections/FAQAccordion";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { LocationPage } from "@/types/location";
import { newYorkData } from "@/data/locations/new-york";
import { losAngelesData } from "@/data/locations/los-angeles";
import { chicagoData } from "@/data/locations/chicago";
import { houstonData } from "@/data/locations/houston";
import { miamiData } from "@/data/locations/miami";
import { dallasData } from "@/data/locations/dallas";
import { atlantaData } from "@/data/locations/atlanta";
import { seattleData } from "@/data/locations/seattle";
import { bostonData } from "@/data/locations/boston";
import { denverData } from "@/data/locations/denver";
import { austinData } from "@/data/locations/austin";
import { phoenixData } from "@/data/locations/phoenix";
import { philadelphiaData } from "@/data/locations/philadelphia";
import { sanAntonioData } from "@/data/locations/san-antonio";
import { sanDiegoData } from "@/data/locations/san-diego";
import { washingtonDcData } from "@/data/locations/washington-dc";

const LOCATIONS: Record<string, LocationPage> = {
  "new-york": newYorkData,
  "los-angeles": losAngelesData,
  chicago: chicagoData,
  houston: houstonData,
  miami: miamiData,
  dallas: dallasData,
  atlanta: atlantaData,
  seattle: seattleData,
  boston: bostonData,
  denver: denverData,
  austin: austinData,
  phoenix: phoenixData,
  philadelphia: philadelphiaData,
  "san-antonio": sanAntonioData,
  "san-diego": sanDiegoData,
  "washington-dc": washingtonDcData,
};

interface Props {
  params: { city: string };
}

export async function generateStaticParams() {
  return Object.keys(LOCATIONS).map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = LOCATIONS[params.city];
  if (!data) return {};
  return buildMetadata({
    title: data.metaTitle,
    description: data.metaDescription,
    path: `/locations/${data.slug}`,
  });
}

export default function LocationPage({ params }: Props) {
  const data = LOCATIONS[params.city];
  if (!data) notFound();

  const schemas = [
    buildLocalBusinessSchema(data),
    buildBreadcrumbSchema(data.breadcrumbs),
  ];

  return (
    <>
      <SchemaOrg schema={schemas} />
      <ServiceHero
        headline={data.heroHeadline}
        subheadline={data.heroSubheadline}
        ctaText={data.heroCTAText}
        breadcrumbs={data.breadcrumbs}
        badge={`${data.city}, ${data.state} Market Specialists`}
      />

      {/* Local Market Insights */}
      <section className="py-12 bg-white">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto bg-light-gray rounded-2xl p-8">
            <h2 className="text-xl font-display font-bold text-navy mb-4">
              🗺️ {data.city} Market Advertising Insights
            </h2>
            <p className="text-gray-600 leading-relaxed">{data.localMarketInsights}</p>
          </div>
        </div>
      </section>

      <StatsBar />
      <ServiceContentBody intro={data.introText} sections={data.contentSections} />
      <CTABanner variant="electric" headline={`Ready to Grow Your ${data.city} Business Through Paid Advertising?`} />
      <TestimonialGrid ids={data.featuredTestimonialIds} />
      {data.faqs.length > 0 && <FAQAccordion faqs={data.faqs} />}
      <RelatedLinks
        services={data.servicesOffered}
        industries={data.featuredIndustries}
      />
      <CTABanner variant="dark" headline={`${data.city}'s Top-Rated Media Buying Agency`} />
    </>
  );
}
