import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME, PHONE, EMAIL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "Read the Terms of Service for Woofer Digital. These terms govern your use of our website and media buying services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-navy py-14 md:py-20">
        <div className="container-xl text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
            Terms of Service
          </h1>
          <p className="text-white/60 text-lg">Last updated: June 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose-navy">

          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using the website and services of {SITE_NAME} ("we," "us," or "our"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>

          <h2>2. Services</h2>
          <p>
            {SITE_NAME} provides performance marketing, media buying, and related digital advertising services. Our services include but are not limited to: Google Ads management, Meta (Facebook/Instagram) advertising, TikTok advertising, programmatic advertising, connected TV (CTV), reputation management, AI-powered SEO, and lead generation campaigns.
          </p>
          <p>
            All services are subject to a separate signed Service Agreement or Statement of Work (SOW). These Terms of Service apply to website visitors and prospective clients regardless of whether a Service Agreement is in place.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, images, and software — is the property of {SITE_NAME} or its content suppliers and is protected by applicable copyright and intellectual property laws. You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of this site without our express written permission.
          </p>

          <h2>4. Client Responsibilities</h2>
          <p>Clients engaging our services agree to:</p>
          <ul>
            <li>Provide accurate and complete information required to deliver services.</li>
            <li>Grant necessary access to ad accounts, analytics platforms, and other tools within a reasonable timeframe.</li>
            <li>Respond to communications within agreed-upon timeframes.</li>
            <li>Ensure all materials provided (creative assets, landing pages, offers) comply with applicable advertising platform policies and legal requirements.</li>
            <li>Be responsible for the products, services, and claims promoted through campaigns we manage.</li>
          </ul>

          <h2>5. Payment Terms</h2>
          <p>
            Payment terms are established in the Service Agreement. Generally, management fees are due in advance of the service period. Ad spend is billed separately and managed through client-owned or agency-managed ad accounts as agreed. Late payments may result in service suspension.
          </p>

          <h2>6. Disclaimer of Warranties</h2>
          <p>
            {SITE_NAME} provides its website and services on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties, including without limitation implied warranties of merchantability or fitness for a particular purpose.
          </p>
          <p>
            While we strive to deliver exceptional results, advertising performance depends on many variables outside our control (platform algorithm changes, market conditions, audience behavior, etc.). We do not guarantee specific revenue, ROAS, leads, or other performance outcomes.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            In no event shall {SITE_NAME} or its principals, employees, or agents be liable for any indirect, incidental, special, punitive, or consequential damages arising out of or related to your use of our website or services. Our total liability shall not exceed the total fees paid by you in the three months preceding the claim.
          </p>

          <h2>8. Confidentiality</h2>
          <p>
            Both parties agree to keep confidential any non-public information shared during the engagement. This includes strategy documents, account data, financial information, and proprietary methodologies. Confidentiality obligations survive termination of the service relationship.
          </p>

          <h2>9. Third-Party Platforms</h2>
          <p>
            Our services involve managing campaigns on third-party platforms (Google, Meta, TikTok, etc.). We are not responsible for changes to these platforms' policies, algorithms, ad auction systems, or any account suspensions imposed by those platforms. We will make reasonable efforts to comply with all platform policies on your behalf.
          </p>

          <h2>10. Termination</h2>
          <p>
            Either party may terminate the service relationship as specified in the signed Service Agreement. Upon termination, all outstanding fees become immediately due. We reserve the right to terminate website access for any user who violates these Terms of Service.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of the United States and the state in which {SITE_NAME} is registered, without regard to its conflict of law provisions. Any disputes shall be resolved through binding arbitration.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated date. Your continued use of the website or services after changes are posted constitutes acceptance of the updated terms.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            If you have questions about these Terms of Service, please contact us:
          </p>
          <ul>
            <li>Phone: <a href={`tel:${PHONE}`}>{PHONE}</a></li>
            <li>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li>Or use our <a href="/contact">contact form</a></li>
          </ul>
        </div>
      </section>
    </div>
  );
}
