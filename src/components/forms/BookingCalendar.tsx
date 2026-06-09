"use client";

import { useEffect } from "react";

interface BookingCalendarProps {
  className?: string;
}

export default function BookingCalendar({ className = "" }: BookingCalendarProps) {
  useEffect(() => {
    // Inject GHL embed script once per page load.
    // GHL's script uses the iframeResizer protocol to auto-size the iframe —
    // do NOT add a competing postMessage listener.
    const src = "https://link.wooferdigital.com/js/form_embed.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className={`w-full ${className}`}>
      {/* Height is set by .ghl-booking-iframe in globals.css (responsive via
          media query). GHL's iframeResizer will override with the exact
          content height once it initialises. */}
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
