"use client";

import { useEffect } from "react";

const SCRIPT_SRC = "https://link.wooferdigital.com/js/form_embed.js";

export default function BookingCalendar({ className = "" }: { className?: string }) {
  useEffect(() => {
    // GHL's form_embed.js guards itself with one-time init flags:
    //   window.__ghl_iframe_resizer_initialized__
    //   window.__ghl_widget_initialized__
    // With Next.js App Router (soft navigation) those flags survive across
    // page visits, so the script skips re-initialization and never resizes
    // the new iframe. We reset them and reload the script on every mount.
    const w = window as any;
    w.__ghl_iframe_resizer_initialized__ = false;
    w.__ghl_widget_initialized__ = false;

    // Remove any stale script tag so the browser re-executes on fresh inject
    // (cached file — no extra network request after the first load)
    const old = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (old) old.remove();

    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <iframe
        src="https://link.wooferdigital.com/widget/booking/onSat9IsDhByR6UNT9GR"
        className="ghl-booking-iframe"
        style={{ width: "100%", border: "none", display: "block" }}
        scrolling="no"
        id="onSat9IsDhByR6UNT9GR_1780925489176"
        title="Book a Free Strategy Call"
      />
    </div>
  );
}
