import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import LocationGrid from "@/components/sections/LocationGrid";
import CTABanner from "@/components/sections/CTABanner";
import GradientText from "@/components/ui/GradientText";

export const metadata: Metadata = buildMetadata({
  title: "Media Buying Agency Locations | Nationwide Digital Advertising",
  description:
    "Woofer Digital serves brands across the United States with deep local market expertise. Find our media buying and digital advertising services in your city.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <>
      <section className="bg-navy bg-gradient-hero dot-pattern py-16">
        <div className="container-xl text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Media Buying Agency <GradientText>Serving the Entire U.S.</GradientText>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            While we work with brands nationwide, we bring deep local market knowledge to every major U.S. metro — understanding regional media rates, audience behaviors, and competitive landscapes.
          </p>
        </div>
      </section>
      <LocationGrid />
      <CTABanner />
    </>
  );
}
