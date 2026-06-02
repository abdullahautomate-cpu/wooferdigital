import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import IndustryGrid from "@/components/sections/IndustryGrid";
import CTABanner from "@/components/sections/CTABanner";
import GradientText from "@/components/ui/GradientText";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve | Advertising Across Every Vertical",
  description:
    "Woofer Digital brings deep industry expertise to paid advertising across healthcare, legal, financial services, ecommerce, SaaS, real estate, automotive, and more.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-navy bg-gradient-hero dot-pattern py-16">
        <div className="container-xl text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Specialized Expertise <GradientText>Across Every Industry</GradientText>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            We don&apos;t just run ads — we bring deep industry knowledge to every campaign, understanding the compliance requirements, competitive landscape, and audience psychology unique to your market.
          </p>
        </div>
      </section>
      <IndustryGrid />
      <CTABanner />
    </>
  );
}
