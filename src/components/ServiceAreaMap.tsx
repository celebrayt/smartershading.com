import Link from 'next/link';

const arizonaLocations = [
  { name: 'Phoenix', slug: 'phoenix' },
  { name: 'Scottsdale', slug: 'scottsdale' },
  { name: 'Paradise Valley', slug: 'paradise-valley' },
  { name: 'Tempe', slug: 'tempe' },
  { name: 'Mesa', slug: 'mesa' },
  { name: 'Chandler', slug: 'chandler' },
  { name: 'Gilbert', slug: 'gilbert' },
  { name: 'Glendale', slug: 'glendale' },
  { name: 'Tucson', slug: 'tucson' },
];

const washingtonLocations = [
  { name: 'Seattle', slug: 'seattle' },
  { name: 'Bellevue', slug: 'bellevue' },
  { name: 'Tacoma', slug: 'tacoma' },
  { name: 'Spokane', slug: 'spokane' },
];

const idahoLocations = [
  { name: 'Coeur d\'Alene', slug: 'coeur-d-alene' },
  { name: 'Post Falls', slug: 'post-falls' },
  { name: 'Sandpoint', slug: 'sandpoint' },
];

export function ServiceAreaMap() {
  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
      {/* Map placeholder */}
      <div className="bg-gradient-to-br from-sand-light to-warm-gray rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <svg className="w-16 h-16 mx-auto text-sage/50 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-charcoal-light text-sm">Service area map</p>
          <p className="text-charcoal-light/60 text-xs mt-1">Arizona &bull; Washington &bull; Northern Idaho</p>
        </div>
      </div>

      {/* Location links */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold text-navy mb-3">Arizona</h3>
          <div className="flex flex-wrap gap-2">
            {arizonaLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="px-3 py-1.5 bg-white rounded-full text-sm text-charcoal hover:text-terracotta hover:bg-sand-light border border-sand/50 transition-colors"
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-navy mb-3">Washington</h3>
          <div className="flex flex-wrap gap-2">
            {washingtonLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="px-3 py-1.5 bg-white rounded-full text-sm text-charcoal hover:text-terracotta hover:bg-sand-light border border-sand/50 transition-colors"
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-navy mb-3">Northern Idaho</h3>
          <div className="flex flex-wrap gap-2">
            {idahoLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="px-3 py-1.5 bg-white rounded-full text-sm text-charcoal hover:text-terracotta hover:bg-sand-light border border-sand/50 transition-colors"
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
