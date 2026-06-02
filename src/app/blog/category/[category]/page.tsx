import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { getAllCategories, getCategoryBySlug } from "@/data/blog/categories";
import { getPostsByCategory } from "@/data/blog/posts";
import BlogGrid from "@/components/sections/BlogGrid";
import Link from "next/link";
import GradientText from "@/components/ui/GradientText";

interface Props {
  params: { category: string };
}

export async function generateStaticParams() {
  const cats = getAllCategories();
  return cats.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = getCategoryBySlug(params.category);
  if (!cat) return {};
  return buildMetadata({
    title: `${cat.label} Blog Posts | Media Buying Insights`,
    description: cat.description,
    path: `/blog/category/${cat.slug}`,
  });
}

export default function BlogCategoryPage({ params }: Props) {
  const cat = getCategoryBySlug(params.category);
  if (!cat) notFound();

  const posts = getPostsByCategory(params.category);

  return (
    <>
      <section className="bg-gradient-hero dot-pattern py-14">
        <div className="container-xl text-center">
          <h1 className="text-4xl font-display font-bold text-white mb-3">
            <GradientText>{cat.label}</GradientText>
          </h1>
          <p className="text-white/70">{cat.description}</p>
        </div>
      </section>
      <section className="section-padding bg-light-gray">
        <div className="container-xl">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-500">{posts.length} articles</p>
            <Link href="/blog" className="text-electric text-sm font-semibold hover:underline">
              ← All Posts
            </Link>
          </div>
          {posts.length > 0 ? (
            <BlogGrid posts={posts} />
          ) : (
            <p className="text-center text-gray-500 py-16">No posts in this category yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
