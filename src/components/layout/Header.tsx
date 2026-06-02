"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import { PHONE } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Services", key: "services" },
  { label: "Industries", key: "industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-navy/95 backdrop-blur-md shadow-lg border-b border-white/10"
            : "bg-navy"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 bg-electric rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 3h4v4H3zM9 3h4v4H9zM3 9h4v4H3zM9 9h4v4H9z" fill="white" fillOpacity="0.9"/>
                </svg>
              </div>
              <span className="text-white font-display font-bold text-lg tracking-tight">
                Woofer<span className="text-electric-light">Digital</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                if (link.key) {
                  return (
                    <button
                      key={link.key}
                      onMouseEnter={() => setActiveMenu(link.key!)}
                      onClick={() => setActiveMenu(activeMenu === link.key ? null : link.key!)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeMenu === link.key
                          ? "text-electric-light bg-white/10"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href!}
                    onMouseEnter={() => setActiveMenu(null)}
                    className="px-4 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors"
              >
                <Phone size={14} />
                {PHONE}
              </a>
              <Button href="/contact" variant="primary" size="sm">
                Get Free Audit
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        {activeMenu && (
          <div onMouseLeave={() => setActiveMenu(null)}>
            <MegaMenu activeMenu={activeMenu} onClose={() => setActiveMenu(null)} />
          </div>
        )}
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Spacer to push content below fixed header */}
      <div className="h-16 lg:h-18" />
    </>
  );
}
