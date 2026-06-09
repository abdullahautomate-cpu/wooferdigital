import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME, PHONE, EMAIL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Refund Policy",
  description: "Woofer Digital's Refund Policy. Learn about our refund terms for media buying management fees and advertising services.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-navy py-14 md:py-20">
        <div className="container-xl text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
            Refund Policy
          </h1>
          <p className="text-white/60 text-lg">Last updated: June 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose-navy">

          <h2>1. Overview</h2>
          <p>
            At {SITE_NAME}, we are committed to delivering exceptional performance marketing results for every client. This Refund Policy outlines the terms under which refunds may be requested and granted for our services. By engaging {SITE_NAME}, you acknowledge and agree to this policy.
          </p>

          <h2>2. Management Fees</h2>
          <h3>Monthly Retainer Fees</h3>
          <p>
            Management fees are billed in advance of each service period and cover strategy, campaign management, optimization, reporting, and account management. Because our team commits time and resources at the start of each billing period, management fees are <strong>generally non-refundable</strong> once the service period has commenced.
          </p>
          <h3>Partial Refunds</h3>
          <p>
            A partial refund of management fees may be considered if:
          </p>
          <ul>
            <li>You cancel before we have begun substantive work in the current billing period (within 48 hours of billing and prior to campaign touchpoints)</li>
            <li>We are unable to begin services due to an issue on our end (not client-side access or onboarding delays)</li>
          </ul>
          <p>
            Any approved partial refund will be prorated based on work completed at the time of cancellation.
          </p>

          <h2>3. Ad Spend</h2>
          <p>
            Ad spend (money paid directly to advertising platforms such as Google, Meta, TikTok, etc.) is <strong>entirely non-refundable</strong>. These funds are spent in real time on your campaigns as directed. {SITE_NAME} does not retain ad spend — it flows directly to the advertising platforms.
          </p>
          <p>
            Any unused ad spend remaining in platform accounts at the time of cancellation belongs to the client and can be retrieved according to each platform's own refund or withdrawal policies.
          </p>

          <h2>4. Setup & Onboarding Fees</h2>
          <p>
            One-time setup or onboarding fees are non-refundable once the onboarding process has begun, as they cover time spent on account audits, strategy development, and campaign build-out.
          </p>

          <h2>5. Performance Guarantee</h2>
          <p>
            We stand behind our work. If you believe our team has failed to deliver services as outlined in your signed Service Agreement, we encourage you to raise the issue with your account manager. We will work in good faith to resolve concerns, which may include:
          </p>
          <ul>
            <li>Additional optimization work at no extra charge</li>
            <li>A service credit toward future fees</li>
            <li>A partial refund at our discretion</li>
          </ul>
          <p>
            Note: Advertising results (ROAS, cost per lead, revenue) fluctuate based on market conditions, platform algorithm changes, seasonality, and factors outside our direct control. Underperformance relative to projected targets alone does not automatically qualify for a refund.
          </p>

          <h2>6. Free Audit & Consultation</h2>
          <p>
            Our free media audits and initial consultations are provided at no cost and are therefore not subject to any refund considerations.
          </p>

          <h2>7. Cancellation Process</h2>
          <p>
            To cancel your services, you must provide written notice as specified in your Service Agreement (typically 30 days). Upon receipt of your cancellation notice:
          </p>
          <ul>
            <li>We will confirm receipt within 1 business day</li>
            <li>Campaigns will continue running through the end of the paid period unless you request an immediate pause</li>
            <li>All account access and reporting will be handed off to you within 5 business days of the service end date</li>
          </ul>

          <h2>8. How to Request a Refund</h2>
          <p>
            To request a refund, contact us in writing within 14 days of the billing date in question. Please include:
          </p>
          <ul>
            <li>Your full name and company name</li>
            <li>The invoice number or billing date</li>
            <li>The reason for your refund request</li>
          </ul>
          <p>
            Approved refunds will be processed within 10 business days to the original payment method.
          </p>

          <h2>9. Disputes</h2>
          <p>
            If you have a billing dispute, please contact us directly before initiating a chargeback with your bank or credit card provider. We are committed to resolving issues fairly and promptly. Chargebacks initiated without prior contact may result in termination of services and additional administrative fees.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            For refund requests or billing questions, please reach out to us:
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
