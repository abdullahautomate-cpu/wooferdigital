import Link from "next/link";
import Image from "next/image";
import { PHONE, ADDRESS, SOCIAL_LINKS, SITE_NAME } from "@/lib/constants";
import { NAV_SERVICES, NAV_INDUSTRIES } from "@/lib/constants";

const locations = [
  { label: "New York", href: "/locations/new-york" },
  { label: "Los Angeles", href: "/locations/los-angeles" },
  { label: "Chicago", href: "/locations/chicago" },
  { label: "Houston", href: "/locations/houston" },
  { label: "Miami", href: "/locations/miami" },
  { label: "Dallas", href: "/locations/dallas" },
  { label: "Atlanta", href: "/locations/atlanta" },
  { label: "Seattle", href: "/locations/seattle" },
  { label: "Boston", href: "/locations/boston" },
  { label: "Denver", href: "/locations/denver" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <Image
                src="/images/woofer-icon.png"
                alt=""
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <span className="text-white font-display font-bold text-lg">
                Woofer<span className="text-electric-light">Digital</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Premium media buying & performance marketing agency serving U.S. brands since 2018.
            </p>
            <div className="space-y-2 text-sm">
              <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                📞 {PHONE}
              </a>
              <a href="/contact" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                ✉️ Send Us a Message
              </a>
              <p className="text-white/40 text-xs mt-3">{ADDRESS}</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Services</h3>
            <ul className="space-y-2.5">
              {NAV_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Industries</h3>
            <ul className="space-y-2.5">
              {NAV_INDUSTRIES.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Locations</h3>
            <ul className="space-y-2.5">
              {locations.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Free Tools */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Free Tools</h3>
            <ul className="space-y-2.5 mb-6">
              {[
                { label: "Google Ads ROI Calculator", href: "/tools/google-ads-roi-calculator" },
                { label: "Ad Benchmarks by Industry", href: "/tools/ad-spend-benchmarks" },
                { label: "All Free Tools", href: "/tools" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Company</h3>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", icon: "in" },
                { href: SOCIAL_LINKS.twitter, label: "Twitter/X", icon: "𝕏" },
                { href: SOCIAL_LINKS.facebook, label: "Facebook", icon: "f" },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold text-white/60 hover:bg-electric hover:text-white transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5 text-xs text-white/30">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="hidden sm:inline">🏆 Award-Winning Agency</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
