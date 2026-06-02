import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CTABanner from "@/components/sections/CTABanner";
import GradientText from "@/components/ui/GradientText";

export const metadata: Metadata = buildMetadata({
  title: "Media Buying & Digital Advertising Services",
  description:
    "Explore Woofer Digital's full suite of paid media services: Google Ads, Facebook & Instagram, TikTok, Programmatic, CTV, Lead Generation, and Ecommerce Advertising.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-hero dot-pattern py-16">
        <div className="container-xl text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Full-Service <GradientText>Paid Media Management</GradientText>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            From Google Search to streaming TV, we manage every paid advertising channel with the same singular focus: measurable ROI for your business.
          </p>
        </div>
      </section>
      <ServicesGrid />
      <CTABanner />
    </>
  );
}
