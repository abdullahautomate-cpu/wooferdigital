const LOGOS = [
  "Shopify Partner",
  "Google Premier Partner",
  "Meta Business Partner",
  "TikTok Marketing Partner",
  "IAB Member",
  "Inc. 5000",
  "Forbes Agency Council",
  "BBB A+ Rated",
];

export default function TrustLogos() {
  return (
    <section className="bg-white border-b border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
          Trusted by 500+ Brands — Certified by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {LOGOS.map((logo) => (
            <div
              key={logo}
              className="text-gray-300 font-semibold text-sm tracking-wide hover:text-gray-500 transition-colors cursor-default"
              aria-label={logo}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
