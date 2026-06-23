import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { buildServiceSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { ppcManagementData } from "@/data/services/ppc-management";
import SchemaOrg from "@/components/seo/SchemaOrg";
import ServiceHero from "@/components/sections/ServiceHero";
import StatsBar from "@/components/sections/StatsBar";
import ServiceContentBody from "@/components/sections/ServiceContentBody";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTABanner from "@/components/sections/CTABanner";
import TestimonialGrid from "@/components/sections/TestimonialGrid";
import CaseStudyTeaser from "@/components/sections/CaseStudyTeaser";
import FAQAccordion from "@/components/sections/FAQAccordion";
import RelatedLinks from "@/components/sections/RelatedLinks";

const data = ppcManagementData;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: `/services/${data.slug}`,
});

export default function ServicePage() {
  const schemas = [buildServiceSchema(data), buildBreadcrumbSchema(data.breadcrumbs)];
  return (
    <>
      <SchemaOrg schema={schemas} />
      <ServiceHero headline={data.heroHeadline} subheadline={data.heroSubheadline} ctaText={data.heroCTAText} ctaHref={data.heroCTAHref} breadcrumbs={data.breadcrumbs} badge={data.badge} />
      <StatsBar />
      <ServiceContentBody intro={data.introText} sections={data.contentSections} />
      <ProcessSteps />
      <CTABanner variant="electric" />
      <TestimonialGrid ids={data.featuredTestimonialIds} />
      <CaseStudyTeaser ids={data.featuredCaseStudyIds} />
      <FAQAccordion faqs={data.faqs} />
      <RelatedLinks services={data.relatedServices} industries={data.relatedIndustries} locations={data.relatedLocations} />
      <CTABanner variant="dark" />
    </>
  );
}
