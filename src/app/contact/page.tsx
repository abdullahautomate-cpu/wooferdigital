import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ContactForm from "@/components/forms/ContactForm";
import GradientText from "@/components/ui/GradientText";
import { PHONE, EMAIL, ADDRESS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Free Media Buying Audit",
  description:
    "Contact Woofer Digital for a free media buying audit. Our team will analyze your ad accounts and identify opportunities to improve performance and ROAS. Get in touch today.",
  path: "/contact",
});

const CONTACT_ITEMS = [
  { icon: "📞", label: "Phone", value: PHONE, href: `tel:${PHONE}` },
  { icon: "✉️", label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: "📍", label: "Address", value: ADDRESS, href: undefined },
];

const WHY_ITEMS = [
  { icon: "✓", text: "Response within 1 business day" },
  { icon: "✓", text: "Senior strategist on every call" },
  { icon: "✓", text: "Free, no-obligation audit" },
  { icon: "✓", text: "Custom strategy included" },
  { icon: "✓", text: "No long-term contracts" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy bg-gradient-hero dot-pattern py-16 md:py-20">
        <div className="container-xl text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Let&apos;s Talk About <GradientText>Growing Your Revenue</GradientText>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Fill out the form below and a Woofer Digital strategist will reach out within 1 business day to schedule your free consultation and media audit.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-light-gray">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-card">
              <div className="p-6 sm:p-8 pb-2">
                <h2 className="text-2xl font-display font-bold text-navy mb-2">
                  Request Your Free Media Audit
                </h2>
                <p className="text-gray-500">
                  Pick a time that works for you — speak directly with a senior strategist.
                </p>
              </div>
              {/* Calendar goes edge-to-edge inside the card so it has maximum width */}
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact info */}
              <div className="bg-navy rounded-2xl p-6 text-white">
                <h3 className="font-display font-bold text-lg mb-5">Get In Touch</h3>
                <div className="space-y-4">
                  {CONTACT_ITEMS.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="text-lg">{item.icon}</span>
                      <div>
                        <p className="text-xs text-white/50 font-medium uppercase tracking-wide mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-white hover:text-electric-light transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-white/80">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why us */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-display font-bold text-navy text-lg mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {WHY_ITEMS.map((item) => (
                    <li key={item.text} className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                        {item.icon}
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hours */}
              <div className="bg-light-gray rounded-2xl p-6">
                <h3 className="font-semibold text-navy mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="font-medium text-navy">9 AM – 6 PM ET</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-navy">By appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
