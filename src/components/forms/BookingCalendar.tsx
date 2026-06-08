"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

interface BookingCalendarProps {
  className?: string;
}

export default function BookingCalendar({ className = "" }: BookingCalendarProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (!iframeRef.current) return;
      // GHL sends height via postMessage so we can auto-size the iframe
      if (typeof e.data === "string") {
        try {
          const data = JSON.parse(e.data);
          if (data.height && iframeRef.current) {
            iframeRef.current.style.height = `${data.height}px`;
          }
        } catch {
          // not JSON — ignore
        }
      } else if (e.data?.height) {
        iframeRef.current.style.height = `${e.data.height}px`;
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <iframe
        ref={iframeRef}
        src="https://link.wooferdigital.com/widget/booking/onSat9IsDhByR6UNT9GR"
        style={{
          width: "100%",
          minHeight: 700,
          height: 700,
          border: "none",
          display: "block",
        }}
        scrolling="no"
        id="onSat9IsDhByR6UNT9GR_1780925489176"
        title="Book a Free Strategy Call"
      />
      <Script
        src="https://link.wooferdigital.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
