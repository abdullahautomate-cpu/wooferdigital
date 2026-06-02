import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/data/blog/posts";
import { buildMetadata } from "@/lib/seo";
import { buildArticleSchema } from "@/lib/schema";
import SchemaOrg from "@/components/seo/SchemaOrg";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import BlogGrid from "@/components/sections/BlogGrid";
import { formatDate } from "@/lib/utils";
import { Clock, Calendar } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishDate,
    modifiedTime: post.updatedDate || post.publishDate,
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const articleSchema = buildArticleSchema(post);

  const breadcrumbs = [
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <>
      <SchemaOrg schema={articleSchema} />
      <BreadcrumbSchema crumbs={breadcrumbs} />

      {/* Hero */}
      <section className="bg-navy bg-gradient-hero dot-pattern py-12">
        <div className="container-xl max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white/80 truncate">{post.title.substring(0, 40)}...</span>
          </nav>

          <Badge variant="blue" className="mb-4">{post.category.replace(/-/g, " ")}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {formatDate(post.publishDate)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime} min read
            </span>
            <span>By {post.author}</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-12 bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content */}
            <article className="lg:col-span-2">
              <div className="prose-navy max-w-none" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-light-gray text-gray-500 text-sm rounded-lg">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA */}
                <div className="bg-gradient-navy rounded-2xl p-6 text-white">
                  <p className="text-xs font-semibold text-electric-light uppercase tracking-widest mb-3">Free Offer</p>
                  <h3 className="font-display font-bold text-lg mb-2">Get a Free Media Audit</h3>
                  <p className="text-sm text-white/70 mb-5">
                    Let our team analyze your ad accounts and identify exactly where you&apos;re leaving money on the table.
                  </p>
                  <Button href="/contact" variant="primary" size="md" className="w-full">
                    Get My Free Audit →
                  </Button>
                </div>

                {/* Related services */}
                {post.relatedServiceSlugs.length > 0 && (
                  <div className="bg-light-gray rounded-2xl p-6">
                    <h3 className="font-semibold text-navy mb-4 text-sm uppercase tracking-widest">Related Services</h3>
                    <ul className="space-y-2">
                      {post.relatedServiceSlugs.map((slug) => (
                        <li key={slug}>
                          <Link
                            href={`/services/${slug}`}
                            className="text-sm text-gray-600 hover:text-electric transition-colors"
                          >
                            → {slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="section-padding bg-light-gray">
          <div className="container-xl">
            <h2 className="text-2xl font-display font-bold text-navy mb-8">Related Articles</h2>
            <BlogGrid posts={related} />
          </div>
        </section>
      )}
    </>
  );
}
