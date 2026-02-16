import Link from 'next/link';
import { locations } from '@/data/locations';
import { products } from '@/data/products';
import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTABanner } from '@/components/CTABanner';

export const metadata = buildMetadata({
  title: 'Window Shades in Northern Idaho',
  description: 'Premium motorized window shades in Northern Idaho — Coeur d\'Alene, Post Falls & Sandpoint. Lutron smart shades for mountain homes. Free virtual consultation.',
  path: '/locations/northern-idaho',
});

const idLocations = locations.filter((loc) => loc.region === 'north-idaho');

export default function NorthernIdahoPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[
          { label: 'Locations', href: '/locations/arizona' },
          { label: 'Northern Idaho', href: '/locations/northern-idaho' },
        ]} />
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy to-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-terracotta font-semibold tracking-wider uppercase text-sm mb-3">
            Northern Idaho Service Areas
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Premium Window Shades in Northern Idaho
          </h1>
          <p className="text-lg text-sand-light/80 leading-relaxed mb-8 max-w-3xl">
            From lakefront estates in Coeur d&apos;Alene to mountain retreats near Sandpoint,
            SmarterShading brings Lutron motorized shade expertise to Northern Idaho&apos;s most
            beautiful homes. Our systems are engineered for the region&apos;s dramatic seasons —
            insulating against harsh winters, managing summer sun, and preserving your
            stunning lake and mountain views year-round.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-terracotta hover:bg-terracotta-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Schedule Free Virtual Consultation
          </Link>
        </div>
      </section>

      {/* Climate Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">Shades for Mountain &amp; Lake Living</h2>
            <p className="text-charcoal-light leading-relaxed">
              Northern Idaho&apos;s four-season climate demands window treatments that perform
              year-round. Winters bring heavy snow and temperatures well below freezing, making
              insulation critical — double-cell cellular shades can reduce heat loss through
              windows by up to 40%. Summers bring intense high-altitude sun and long daylight
              hours, requiring effective UV and glare protection. The right shades adapt to both
              extremes, keeping you comfortable and your energy bills manageable.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">Preserving Idaho&apos;s Views</h2>
            <p className="text-charcoal-light leading-relaxed">
              Many Northern Idaho homes are designed around their views — Lake Coeur d&apos;Alene,
              Lake Pend Oreille, Schweitzer Mountain, and the surrounding forests. Our solar shades
              and automated Lutron systems let you enjoy these panoramas without squinting or
              sacrificing comfort. Automated schedules that respond to sun position and temperature
              ensure your views are always accessible while your home stays protected.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">Northern Idaho Cities We Serve</h2>
          <p className="text-charcoal-light text-center mb-10 max-w-2xl mx-auto">
            Click any city to see location-specific shade recommendations, neighborhoods served, and local expertise.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {idLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group flex items-center gap-4 p-6 bg-white rounded-xl border border-sand/30 hover:border-terracotta/30 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-sand-light flex items-center justify-center shrink-0 group-hover:bg-terracotta/10 transition-colors">
                  <svg className="w-5 h-5 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy group-hover:text-terracotta transition-colors">{loc.name}</p>
                  <p className="text-xs text-charcoal-light">{loc.neighborhoods.slice(0, 3).join(', ')}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">Our Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/${product.slug}`}
                className="group flex items-center gap-4 p-5 bg-white rounded-xl border border-sand/30 hover:border-terracotta/30 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-sand-light flex items-center justify-center shrink-0 group-hover:bg-terracotta/10 transition-colors">
                  <svg className="w-5 h-5 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy group-hover:text-terracotta transition-colors">{product.name}</p>
                  <p className="text-xs text-charcoal-light">{product.priceRange}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready for Premium Shades in Northern Idaho?"
        description="Schedule a free virtual consultation with our Northern Idaho shade experts. We'll help you choose the perfect shades for your space and provide a detailed quote — all at no cost."
      />
    </>
  );
}
