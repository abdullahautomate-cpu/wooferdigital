"use client";

import { useEffect, useState } from "react";

const SCRIPT_SRC = "https://link.wooferdigital.com/js/form_embed.js";

function CalendarSkeleton() {
  return (
    <div className="p-6 animate-pulse" aria-hidden="true">
      {/* Month header */}
      <div className="flex items-center justify-between mb-5">
        <div className="h-5 bg-gray-200 rounded w-32" />
        <div className="flex gap-2">
          <div className="h-8 w-8 bg-gray-200 rounded-full" />
          <div className="h-8 w-8 bg-gray-200 rounded-full" />
        </div>
      </div>
      {/* Day labels */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["S","M","T","W","T","F","S"].map((d, i) => (
          <div key={i} className="h-5 bg-gray-100 rounded text-center" />
        ))}
      </div>
      {/* Date grid */}
      <div className="grid grid-cols-7 gap-1 mb-6">
        {Array.from({ length: 35 }).map((_, i) => (
          <div key={i} className={`h-9 rounded-full ${i % 7 === 0 || i % 7 === 6 ? "bg-gray-100" : "bg-gray-200"}`} />
        ))}
      </div>
      {/* Time slots */}
      <div className="h-4 bg-gray-200 rounded w-24 mb-3" />
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-10 bg-gray-200 rounded-lg" />
        ))}
      </div>
    </div>
  );
}

export default function BookingCalendar({ className = "" }: { className?: string }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const w = window as any;
    w.__ghl_iframe_resizer_initialized__ = false;
    w.__ghl_widget_initialized__ = false;

    const old = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (old) old.remove();

    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div className={`w-full relative ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-white z-10 rounded-2xl">
          <CalendarSkeleton />
        </div>
      )}
      <iframe
        src="https://link.wooferdigital.com/widget/booking/onSat9IsDhByR6UNT9GR"
        className="ghl-booking-iframe"
        style={{
          width: "100%",
          border: "none",
          display: "block",
          minHeight: "700px",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
        scrolling="no"
        id="onSat9IsDhByR6UNT9GR_1780925489176"
        title="Book a Free Strategy Call"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
