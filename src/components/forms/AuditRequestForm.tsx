"use client";

import BookingCalendar from "@/components/forms/BookingCalendar";

interface AuditRequestFormProps {
  onClose?: () => void;
}

export default function AuditRequestForm({ onClose }: AuditRequestFormProps) {
  return (
    <div>
      <BookingCalendar />
      {onClose && (
        <button
          onClick={onClose}
          className="mt-4 text-electric hover:underline text-sm block mx-auto"
        >
          Close
        </button>
      )}
    </div>
  );
}
