import { SITE_URL, SITE_NAME, PHONE, EMAIL, ADDRESS } from "./constants";
import { site } from "@/data/site";
import type { ServicePage } from "@/types/service";
import type { LocationPage } from "@/types/location";
import type { BlogPost } from "@/types/blog";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description: site.description,
    foundingDate: String(site.founded),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "Sales",
      areaServed: "US",
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS,
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: "US",
    },
    sameAs: [
      site.social.linkedin,
      site.social.twitter,
      site.social.facebook,
      site.social.instagram,
    ],
  };
}

export function buildServiceSchema(page: ServicePage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    serviceType: page.serviceSchema.serviceType,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: page.serviceSchema.areaServed.map((area) => ({
      "@type": "Country",
      name: area,
    })),
    description: page.serviceSchema.description,
    url: `${SITE_URL}/services/${page.slug}`,
  };
}

export function buildLocalBusinessSchema(page: LocationPage) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${SITE_NAME} — ${page.city}`,
    url: `${SITE_URL}/locations/${page.slug}`,
    telephone: page.localBusinessSchema.telephone,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: page.localBusinessSchema.addressLocality,
      addressRegion: page.localBusinessSchema.addressRegion,
      postalCode: page.localBusinessSchema.postalCode,
      addressCountry: "US",
    },
    ...(page.localBusinessSchema.latitude && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: page.localBusinessSchema.latitude,
        longitude: page.localBusinessSchema.longitude,
      },
    }),
    areaServed: page.localBusinessSchema.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    priceRange: "$$$",
  };
}

export function buildBreadcrumbSchema(crumbs: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      ...crumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        position: idx + 2,
        name: crumb.label,
        item: `${SITE_URL}${crumb.href}`,
      })),
    ],
  };
}

export function buildArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    datePublished: post.publishDate,
    dateModified: post.updatedDate || post.publishDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
