import { SITE_URL } from "@/lib/constants";

interface Crumb {
  label: string;
  href: string;
}

interface BreadcrumbSchemaProps {
  crumbs: Crumb[];
}

export default function BreadcrumbSchema({ crumbs }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.label,
      item: `${SITE_URL}${crumb.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
