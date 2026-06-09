import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME, PHONE, EMAIL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Woofer Digital's Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-navy py-14 md:py-20">
        <div className="container-xl text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-lg">Last updated: June 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose-navy">

          <h2>1. Introduction</h2>
          <p>
            {SITE_NAME} ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services. Please read this policy carefully.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>Information You Provide Directly</h3>
          <ul>
            <li>Name, email address, phone number, and company name when you fill out a contact or audit request form</li>
            <li>Monthly ad budget and service interests</li>
            <li>Messages and communications you send us</li>
            <li>Information shared during discovery calls or onboarding</li>
          </ul>
          <h3>Information Collected Automatically</h3>
          <ul>
            <li>IP address and approximate location</li>
            <li>Browser type and device information</li>
            <li>Pages visited, time spent, and referral source</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide requested services</li>
            <li>Send you proposals, audits, and follow-up communications</li>
            <li>Improve our website and service offerings</li>
            <li>Send marketing emails (you may opt out at any time)</li>
            <li>Analyze website traffic and user behavior</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our website. These include:
          </p>
          <ul>
            <li><strong>Essential cookies</strong>: Required for basic site functionality</li>
            <li><strong>Analytics cookies</strong>: Help us understand how visitors interact with our site (e.g., Google Analytics)</li>
            <li><strong>Marketing cookies</strong>: Used to deliver relevant advertisements (e.g., Google Ads, Meta Pixel)</li>
          </ul>
          <p>
            You can control cookies through your browser settings. Disabling certain cookies may affect site functionality.
          </p>

          <h2>5. Information Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul>
            <li><strong>Service providers</strong>: Third-party vendors who help us operate our business (CRM, email marketing, analytics) — bound by confidentiality agreements</li>
            <li><strong>Advertising platforms</strong>: As necessary to manage campaigns on your behalf (Google, Meta, etc.)</li>
            <li><strong>Legal requirements</strong>: When required by law, court order, or to protect our rights</li>
          </ul>

          <h2>6. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes described in this policy, or as required by law. Contact form submissions are retained for up to 3 years. Client data is retained for 7 years following the end of the engagement for legal and accounting purposes.
          </p>

          <h2>7. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data ("right to be forgotten")</li>
            <li>Opt out of marketing communications at any time</li>
            <li>Data portability</li>
          </ul>
          <p>To exercise any of these rights, contact us using the details below.</p>

          <h2>8. Security</h2>
          <p>
            We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies before providing any information.
          </p>

          <h2>10. Children's Privacy</h2>
          <p>
            Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be posted on this page with an updated date. We encourage you to review this policy regularly.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy or how we handle your data:
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
