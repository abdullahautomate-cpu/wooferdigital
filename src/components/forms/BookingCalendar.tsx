"use client";

import { useEffect, useRef } from "react";

interface BookingCalendarProps {
  className?: string;
}

export default function BookingCalendar({ className = "" }: BookingCalendarProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Set responsive initial height (mobile needs more vertical space)
    if (iframeRef.current) {
      iframeRef.current.style.height =
        window.innerWidth < 768 ? "1050px" : "850px";
    }

    // Inject GHL script directly — faster than next/script scheduler
    const src = "https://link.wooferdigital.com/js/form_embed.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      document.body.appendChild(s);
    }

    // Auto-resize when GHL calendar reports its real height via postMessage
    const onMessage = (e: MessageEvent) => {
      if (!iframeRef.current) return;
      let h: number | null = null;
      if (typeof e.data === "string") {
        try {
          const d = JSON.parse(e.data);
          h = d?.height ?? d?.iFrameHeight ?? null;
        } catch {
          /* not JSON */
        }
      } else if (e.data && typeof e.data === "object") {
        h = e.data.height ?? e.data.iFrameHeight ?? null;
      }
      if (h && h > 100) {
        iframeRef.current.style.height = `${h}px`;
      }
    };

    // Re-evaluate height on browser resize
    const onResize = () => {
      if (!iframeRef.current) return;
      const current = parseInt(iframeRef.current.style.height, 10);
      const fallback = window.innerWidth < 768 ? 1050 : 850;
      // Only apply fallback if we haven't received a real height from postMessage yet
      if (!current || current === 1050 || current === 850) {
        iframeRef.current.style.height = `${fallback}px`;
      }
    };

    window.addEventListener("message", onMessage);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("message", onMessage);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <iframe
        ref={iframeRef}
        src="https://link.wooferdigital.com/widget/booking/onSat9IsDhByR6UNT9GR"
        style={{ width: "100%", height: "850px", border: "none", display: "block" }}
        scrolling="no"
        id="onSat9IsDhByR6UNT9GR_1780925489176"
        title="Book a Free Strategy Call"
      />
    </div>
  );
}
