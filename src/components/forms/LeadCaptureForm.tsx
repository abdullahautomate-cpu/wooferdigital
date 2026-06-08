import BookingCalendar from "@/components/forms/BookingCalendar";

interface LeadCaptureFormProps {
  dark?: boolean;
  title?: string;
  subtitle?: string;
}

export default function LeadCaptureForm({
  dark = false,
  title = "Book Your Free Strategy Call",
  subtitle = "Pick a time that works for you and speak directly with a senior media buying strategist.",
}: LeadCaptureFormProps) {
  return (
    <div className={`rounded-2xl overflow-hidden ${dark ? "glass" : "bg-white shadow-card border border-gray-100"}`}>
      {(title || subtitle) && (
        <div className={`px-6 pt-6 pb-4 ${dark ? "" : ""}`}>
          <h3 className={`text-xl font-bold mb-1 ${dark ? "text-white" : "text-navy"}`}>{title}</h3>
          <p className={`text-sm ${dark ? "text-white/70" : "text-gray-500"}`}>{subtitle}</p>
        </div>
      )}
      <BookingCalendar />
    </div>
  );
}
