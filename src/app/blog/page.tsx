import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts } from "@/data/blog/posts";
import { getAllCategories } from "@/data/blog/categories";
import BlogGrid from "@/components/sections/BlogGrid";
import CTABanner from "@/components/sections/CTABanner";
import GradientText from "@/components/ui/GradientText";

export const metadata: Metadata = buildMetadata({
  title: "Media Buying & Digital Advertising Blog",
  description:
    "Expert insights on Google Ads, Facebook advertising, TikTok, programmatic, CTV, and performance marketing strategy. Actionable guides from the Woofer Digital team.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <>
      <section className="bg-gradient-hero dot-pattern py-16">
        <div className="container-xl text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Media Buying & <GradientText>Performance Marketing</GradientText> Insights
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Actionable guides, benchmarks, and strategy from Woofer Digital&apos;s team of paid media specialists.
          </p>
        </div>
      </section>

      <section className="section-padding bg-light-gray">
        <div className="container-xl">
          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              href="/blog"
              className="px-4 py-2 rounded-xl bg-electric text-white text-sm font-semibold"
            >
              All Posts
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-600 text-sm font-medium hover:border-electric hover:text-electric transition-colors"
              >
                {cat.label}
              </Link>
            ))}
          </div>

          <BlogGrid posts={posts} />
        </div>
      </section>

      <CTABanner
        headline="Want to See These Strategies in Action?"
        subheadline="Get a free media audit from our team and see how these proven strategies apply to your specific business and goals."
      />
    </>
  );
}
