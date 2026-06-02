import Link from "next/link";
import { MapPin } from "lucide-react";
import GradientText from "@/components/ui/GradientText";

const LOCATIONS = [
  { city: "New York", state: "NY", href: "/locations/new-york" },
  { city: "Los Angeles", state: "CA", href: "/locations/los-angeles" },
  { city: "Chicago", state: "IL", href: "/locations/chicago" },
  { city: "Houston", state: "TX", href: "/locations/houston" },
  { city: "Phoenix", state: "AZ", href: "/locations/phoenix" },
  { city: "Philadelphia", state: "PA", href: "/locations/philadelphia" },
  { city: "San Antonio", state: "TX", href: "/locations/san-antonio" },
  { city: "San Diego", state: "CA", href: "/locations/san-diego" },
  { city: "Dallas", state: "TX", href: "/locations/dallas" },
  { city: "Austin", state: "TX", href: "/locations/austin" },
  { city: "Miami", state: "FL", href: "/locations/miami" },
  { city: "Atlanta", state: "GA", href: "/locations/atlanta" },
  { city: "Seattle", state: "WA", href: "/locations/seattle" },
  { city: "Denver", state: "CO", href: "/locations/denver" },
  { city: "Boston", state: "MA", href: "/locations/boston" },
  { city: "Washington", state: "DC", href: "/locations/washington-dc" },
];

export default function LocationGrid() {
  return (
    <section className="section-padding bg-light-gray">
      <div className="container-xl">
        <div className="text-center mb-12">
          <p className="text-electric font-semibold text-sm uppercase tracking-widest mb-3">
            Nationwide Coverage
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
            Media Buying Agency <GradientText>Across the U.S.</GradientText>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            While we serve brands nationwide, we have deep market knowledge in every major U.S. metro — understanding local media rates, competitive landscapes, and audience behaviors.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.href}
              href={loc.href}
              className="group bg-white rounded-xl p-4 border border-gray-100 hover:border-electric/30 hover:shadow-card transition-all duration-200 flex items-center gap-3"
            >
              <MapPin size={14} className="text-electric shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-navy text-sm group-hover:text-electric transition-colors">
                  {loc.city}
                </p>
                <p className="text-xs text-gray-400">{loc.state}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
