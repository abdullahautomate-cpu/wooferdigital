import Link from "next/link";
import type { InternalLink } from "@/types/service";
import { ArrowRight } from "lucide-react";

interface RelatedLinksProps {
  services?: InternalLink[];
  industries?: InternalLink[];
  locations?: InternalLink[];
}

export default function RelatedLinks({ services, industries, locations }: RelatedLinksProps) {
  const groups = [
    { title: "Related Services", links: services },
    { title: "Industries We Serve", links: industries },
    { title: "Locations", links: locations },
  ].filter((g) => g.links && g.links.length > 0);

  if (groups.length === 0) return null;

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container-xl">
        <div className={`grid grid-cols-1 md:grid-cols-${groups.length} gap-10`}>
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold text-electric uppercase tracking-widest mb-5">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links!.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-600 hover:text-electric text-sm font-medium transition-colors"
                    >
                      <ArrowRight size={12} className="text-gray-300 group-hover:text-electric transition-colors shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
