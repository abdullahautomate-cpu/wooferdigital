"use client";

import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { NAV_SERVICES, NAV_INDUSTRIES, PHONE } from "@/lib/constants";
import Button from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-80 bg-navy text-white overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <span className="text-lg font-bold text-white">Menu</span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="p-5 space-y-1">
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="w-full flex items-center justify-between py-3 px-4 rounded-xl hover:bg-white/10 transition-colors font-medium"
          >
            Services
            <ChevronDown
              size={16}
              className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
            />
          </button>
          {servicesOpen && (
            <div className="ml-4 space-y-1 pb-2">
              {NAV_SERVICES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={onClose}
                  className="block py-2 px-4 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          <button
            onClick={() => setIndustriesOpen(!industriesOpen)}
            className="w-full flex items-center justify-between py-3 px-4 rounded-xl hover:bg-white/10 transition-colors font-medium"
          >
            Industries
            <ChevronDown
              size={16}
              className={`transition-transform ${industriesOpen ? "rotate-180" : ""}`}
            />
          </button>
          {industriesOpen && (
            <div className="ml-4 space-y-1 pb-2">
              {NAV_INDUSTRIES.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  onClick={onClose}
                  className="block py-2 px-4 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {i.label}
                </Link>
              ))}
            </div>
          )}

          {[
            { label: "Case Studies", href: "/case-studies" },
            { label: "Blog", href: "/blog" },
            { label: "About Us", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block py-3 px-4 rounded-xl hover:bg-white/10 transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-5 border-t border-white/10 space-y-3">
          <Button href="/contact" variant="primary" size="lg" className="w-full">
            Get Free Audit
          </Button>
          <a
            href={`tel:${PHONE}`}
            className="flex items-center justify-center gap-2 text-white/70 hover:text-white text-sm py-2"
          >
            📞 {PHONE}
          </a>
        </div>
      </div>
    </div>
  );
}
