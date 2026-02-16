import Link from 'next/link';
import { locations } from '@/data/locations';
import { products } from '@/data/products';
import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTABanner } from '@/components/CTABanner';

export const metadata = buildMetadata({
  title: 'Window Shades in Arizona',
  description: 'Premium motorized window shades across Arizona — Phoenix, Scottsdale, Paradise Valley, Tempe, Mesa, Chandler, Gilbert, Glendale & Tucson. Free virtual consultation.',
  path: '/locations/arizona',
});

const azLocations = locations.filter((loc) => loc.region === 'arizona');

export default function ArizonaPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[
          { label: 'Locations', href: '/locations/arizona' },
          { label: 'Arizona', href: '/locations/arizona' },
        ]} />
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy to-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-terracotta font-semibold tracking-wider uppercase text-sm mb-3">
            Arizona Service Areas
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Premium Window Shades Across Arizona
          </h1>
          <p className="text-lg text-sand-light/80 leading-relaxed mb-8 max-w-3xl">
            From the intense desert sun of Phoenix to the mountain views of Scottsdale and the
            sprawling suburbs of the East Valley, SmarterShading delivers expert motorized shade
            installation throughout the state. As authorized Lutron dealers, we bring premium
            shade solutions designed specifically for Arizona&apos;s extreme climate.
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
            <h2 className="text-2xl font-bold text-navy mb-4">Why Arizona Homes Need Premium Shades</h2>
            <p className="text-charcoal-light leading-relaxed">
              Arizona&apos;s climate is uniquely demanding on windows. With 300+ days of sunshine, summer
              temperatures regularly exceeding 110&deg;F, and intense UV exposure year-round, unprotected
              windows can account for up to 70% of your cooling costs. The right window shades — properly
              selected for your orientation and installed by professionals — can reduce energy bills by
              30-50% while protecting your furnishings from UV damage.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">Lutron Solutions for Desert Living</h2>
            <p className="text-charcoal-light leading-relaxed">
              We exclusively install Lutron motorized shading systems — the gold standard for reliability
              in extreme heat. Lutron&apos;s Clear Connect RF technology ensures flawless wireless communication
              without WiFi dependency, and their motors are engineered to perform in temperatures that would
              compromise lesser systems. From Triathlon battery-powered shades to whole-home HomeWorks QSX
              automation, we match the right Lutron system to every Arizona home.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">Arizona Cities We Serve</h2>
          <p className="text-charcoal-light text-center mb-10 max-w-2xl mx-auto">
            Click any city to see location-specific shade recommendations, neighborhoods served, and local expertise.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {azLocations.map((loc) => (
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
                  <p className="text-xs text-charcoal-light">{loc.neighborhoods.slice(0, 3).join(', ')} &amp; more</p>
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
        heading="Ready for Premium Shades in Arizona?"
        description="Schedule a free virtual consultation with our Arizona shade experts. We'll help you choose the perfect shades for your space and provide a detailed quote — all at no cost."
      />
    </>
  );
}
