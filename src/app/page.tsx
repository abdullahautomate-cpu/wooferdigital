import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import TestimonialGrid from "@/components/sections/TestimonialGrid";
import CaseStudyTeaser from "@/components/sections/CaseStudyTeaser";
import CTABanner from "@/components/sections/CTABanner";
import IndustryGrid from "@/components/sections/IndustryGrid";
import { buildMetadata } from "@/lib/seo";
import { buildOrganizationSchema, buildSiteLocalBusinessSchema, buildAggregateRatingSchema } from "@/lib/schema";
import SchemaOrg from "@/components/seo/SchemaOrg";

export const metadata: Metadata = buildMetadata({
  title: "Media Buying Agency | $500M+ Ad Spend Managed",
  description:
    "U.S. media buying & performance marketing agency. Google Ads, Meta, TikTok & programmatic. $500M+ managed, 340% avg ROAS improvement. Get your free audit.",
  path: "/",
});

export default function HomePage() {
  const schemas = [
    buildOrganizationSchema(),
    buildSiteLocalBusinessSchema(),
    buildAggregateRatingSchema(),
  ];
  return (
    <>
      <SchemaOrg schema={schemas} />
      <Hero />
      <ServicesGrid />
      <ProcessSteps />
      <CTABanner
        variant="electric"
        headline="See What $1M+ in Managed Ad Spend Looks Like"
        subheadline="Get a free, detailed media audit from our senior team — with actionable recommendations you can implement immediately, whether you work with us or not."
      />
      <TestimonialGrid />
      <CaseStudyTeaser />
      <IndustryGrid />
      <CTABanner
        variant="dark"
        headline="Ready to Scale Your Revenue Through Paid Advertising?"
        subheadline="Join 500+ brands that trust Woofer Digital to manage their media buying and performance marketing — and let's build your growth story."
        primaryCTA="Start With a Free Audit"
        showPhone
      />
    </>
  );
}
