"use client";

import { useCallback, useState } from "react";
import { Play } from "lucide-react";
import Button from "@/components/ui/Button";

/** Woofer Digital VSL — YouTube video id. */
export const VSL_VIDEO_ID = "MsmzSjcSI_8";

/* Preconnect to YouTube's origins the first time a visitor shows intent
   (hover/focus) rather than on page load — the iframe is only ever fetched
   after a click, so warming earlier would cost every page view for nothing. */
let warmed = false;
function warmConnections() {
  if (warmed || typeof document === "undefined") return;
  warmed = true;
  ["https://www.youtube.com", "https://s.ytimg.com", "https://googlevideo.com"].forEach(
    (href) => {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = href;
      document.head.appendChild(link);
    }
  );
}

interface VSLSectionProps {
  videoId?: string;
  /** Accessible name for the player. */
  title?: string;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  /** Pick the one that contrasts with the section directly below it. */
  variant?: "light" | "white" | "dark";
  showCTA?: boolean;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export default function VSLSection({
  videoId = VSL_VIDEO_ID,
  title = "How Woofer Digital Turns Ad Spend Into Revenue",
  eyebrow = "Watch the 2:30 overview",
  headline = "See Exactly How We Turn Ad Spend Into Revenue",
  subheadline = "A short walkthrough of the media buying system behind $500M+ in managed ad spend and a 340% average ROAS improvement.",
  variant = "light",
  showCTA = true,
  ctaText = "Book Your Free Strategy Call",
  ctaHref = "/contact",
  className = "",
}: VSLSectionProps) {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(
    `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
  );

  const isDark = variant === "dark";
  const background = {
    dark: "bg-navy bg-gradient-navy",
    white: "bg-white",
    light: "bg-light-gray",
  }[variant];

  // Not every upload has a maxres thumbnail; hqdefault always exists.
  const handleThumbError = useCallback(() => {
    setThumb(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);
  }, [videoId]);

  return (
    <section
      className={`${background} py-14 md:py-20 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <div
            className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full mb-5 ${
              isDark
                ? "bg-electric/15 border border-electric/25 text-electric-light"
                : "bg-electric/10 border border-electric/20 text-electric"
            }`}
          >
            <span className="w-1.5 h-1.5 bg-electric rounded-full" />
            {eyebrow}
          </div>
        )}

        {headline && (
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4 ${
              isDark ? "text-white" : "text-navy"
            }`}
          >
            {headline}
          </h2>
        )}

        {subheadline && (
          <p
            className={`text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-white/70" : "text-gray-600"
            }`}
          >
            {subheadline}
          </p>
        )}

        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-card bg-navy-dark">
          {playing ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              onMouseEnter={warmConnections}
              onFocus={warmConnections}
              onTouchStart={warmConnections}
              aria-label={`Play video: ${title}`}
              className="group absolute inset-0 w-full h-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/60"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumb}
                onError={handleThumbError}
                alt=""
                aria-hidden="true"
                loading="lazy"
                width={1280}
                height={720}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 bg-navy-dark/35 transition-colors duration-300 group-hover:bg-navy-dark/20" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex items-center justify-center w-[72px] h-[72px] md:w-20 md:h-20 rounded-full bg-electric text-white shadow-electric-glow transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                  <Play size={30} fill="currentColor" className="ml-1" />
                </span>
              </span>
            </button>
          )}
        </div>

        {showCTA && (
          <div className="mt-10">
            <Button href={ctaHref} variant={isDark ? "white" : "primary"} size="lg">
              {ctaText}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
