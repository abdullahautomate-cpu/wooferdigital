import Link from "next/link";
import Button from "@/components/ui/Button";
import { NAV_SERVICES } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-light-gray">
      <div className="container-xl text-center py-20">
        <div className="text-8xl font-display font-bold text-electric/20 mb-6">404</div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist. You might have followed a broken link or typed the URL incorrectly.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button href="/" variant="primary" size="lg">Go to Homepage</Button>
          <Button href="/contact" variant="secondary" size="lg">Contact Us</Button>
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Popular Services</p>
          <div className="flex flex-wrap justify-center gap-3">
            {NAV_SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="px-4 py-2 bg-white rounded-xl border border-gray-200 text-sm text-gray-600 hover:text-electric hover:border-electric transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
