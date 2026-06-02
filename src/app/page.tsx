import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import TestimonialGrid from "@/components/sections/TestimonialGrid";
import CaseStudyTeaser from "@/components/sections/CaseStudyTeaser";
import CTABanner from "@/components/sections/CTABanner";
import IndustryGrid from "@/components/sections/IndustryGrid";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Media Buying Agency | Performance Marketing Agency USA",
  description:
    "Woofer Digital is a premier U.S. media buying and performance marketing agency. We manage $2B+ in annual ad spend across Google, Meta, TikTok, Programmatic & CTV. Get your free media audit.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
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
