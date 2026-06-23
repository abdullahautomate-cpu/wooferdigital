import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { buildOrganizationSchema, buildSiteLocalBusinessSchema } from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Premium Media Buying & Performance Marketing Agency`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "U.S. media buying & performance marketing agency. Google Ads, Meta Ads, TikTok & programmatic. $500M+ managed, 340% avg ROAS. Measurable ROI for growing brands.",
  keywords: ["media buying agency", "performance marketing agency", "google ads management", "facebook ads agency", "digital advertising agency", "ppc management agency", "paid media agency", "media buying agency Pakistan", "google ads agency Pakistan"],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@wooferdigital",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "B_hOGqylwdalYbpS1zf1qy04r2r4aa9MGaQ4le080yU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemas = [buildOrganizationSchema(), buildSiteLocalBusinessSchema()];

  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <head>
        <SchemaOrg schema={schemas} />
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="Mo1u4N07gpje8rW0FNGYYw"
          async
        />
      </head>
      <body className="antialiased font-sans bg-white text-navy">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
