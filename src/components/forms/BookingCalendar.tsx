"use client";

import Script from "next/script";

interface BookingCalendarProps {
  className?: string;
}

export default function BookingCalendar({ className = "" }: BookingCalendarProps) {
  return (
    <div className={`w-full ${className}`}>
      <iframe
        src="https://link.wooferdigital.com/widget/booking/onSat9IsDhByR6UNT9GR"
        style={{ width: "100%", border: "none", overflow: "hidden" }}
        scrolling="no"
        id="onSat9IsDhByR6UNT9GR_1780925489176"
        title="Book a Free Strategy Call"
      />
      <Script
        src="https://link.wooferdigital.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
