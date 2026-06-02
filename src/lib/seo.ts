import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "./constants";

interface SeoInput {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  type?: "website" | "article";
}

export function buildMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  noIndex = false,
  publishedTime,
  modifiedTime,
  type = "website",
}: SeoInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${finalOgTitle} | ${SITE_NAME}`,
      description: finalOgDescription,
      url,
      siteName: SITE_NAME,
      type,
      publishedTime,
      modifiedTime,
      images: [
        {
          url: `${SITE_URL}/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — Media Buying Agency`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${finalOgTitle} | ${SITE_NAME}`,
      description: finalOgDescription,
      site: "@wooferdigital",
      images: [`${SITE_URL}/og-default.jpg`],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
  };
}
