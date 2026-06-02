"use client";

import Link from "next/link";
import { NAV_SERVICES, NAV_INDUSTRIES } from "@/lib/constants";

interface MegaMenuProps {
  activeMenu: string | null;
  onClose: () => void;
}

export default function MegaMenu({ activeMenu, onClose }: MegaMenuProps) {
  if (!activeMenu) return null;

  return (
    <div
      className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl z-50"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeMenu === "services" && (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <p className="text-xs font-semibold text-electric uppercase tracking-widest mb-5">
                Our Services
              </p>
              <div className="grid grid-cols-2 gap-2">
                {NAV_SERVICES.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={onClose}
                    className="group flex items-start gap-3 p-3 rounded-xl hover:bg-light-gray transition-colors"
                  >
                    <div className="w-8 h-8 bg-electric/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-electric/20 transition-colors">
                      <div className="w-3 h-3 bg-electric rounded-sm" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm group-hover:text-electric transition-colors">
                        {service.label}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">{service.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-span-4">
              <div className="bg-gradient-navy rounded-2xl p-6 text-white h-full">
                <p className="text-xs font-semibold text-electric-light uppercase tracking-widest mb-3">
                  Free Offer
                </p>
                <h3 className="text-lg font-bold mb-2">Get a Free Media Audit</h3>
                <p className="text-sm text-white/70 mb-5">
                  We&apos;ll analyze your ad accounts and identify exactly where you&apos;re leaving money on the table.
                </p>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 bg-electric hover:bg-electric-dark text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                >
                  Claim Free Audit →
                </Link>
              </div>
            </div>
          </div>
        )}

        {activeMenu === "industries" && (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <p className="text-xs font-semibold text-electric uppercase tracking-widest mb-5">
                Industries We Serve
              </p>
              <div className="grid grid-cols-2 gap-2">
                {NAV_INDUSTRIES.map((industry) => (
                  <Link
                    key={industry.href}
                    href={industry.href}
                    onClick={onClose}
                    className="group flex items-center gap-3 p-3 rounded-xl hover:bg-light-gray transition-colors"
                  >
                    <div className="w-2 h-2 bg-electric rounded-full shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="font-medium text-navy text-sm group-hover:text-electric transition-colors">
                      {industry.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-span-4">
              <div className="bg-light-gray rounded-2xl p-6 h-full">
                <p className="text-xs font-semibold text-electric uppercase tracking-widest mb-3">
                  Results by Industry
                </p>
                <h3 className="text-lg font-bold text-navy mb-2">Proven Results Across Every Vertical</h3>
                <p className="text-sm text-gray-500 mb-5">
                  We&apos;ve helped brands in 20+ industries grow their revenue with data-driven paid media.
                </p>
                <Link
                  href="/case-studies"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                >
                  View Case Studies →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
