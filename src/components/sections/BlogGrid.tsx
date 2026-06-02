import Link from "next/link";
import type { BlogPost } from "@/types/blog";
import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { Clock, ArrowRight } from "lucide-react";

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
        >
          {/* Placeholder image area */}
          <div className="h-44 bg-gradient-navy flex items-center justify-center">
            <span className="text-white/30 text-sm font-medium">{post.category}</span>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <Badge variant="blue">{post.category}</Badge>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <Clock size={11} />
                {post.readTime} min read
              </span>
            </div>

            <h3 className="font-display font-bold text-navy text-lg leading-snug mb-2 group-hover:text-electric transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-gray-500 line-clamp-2 mb-4">{post.excerpt}</p>

            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">{formatDate(post.publishDate)}</span>
              <span className="flex items-center gap-1 text-electric text-sm font-semibold group-hover:gap-2 transition-all">
                Read More <ArrowRight size={13} />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
