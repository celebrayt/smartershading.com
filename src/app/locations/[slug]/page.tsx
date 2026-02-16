import Link from 'next/link';
import { notFound } from 'next/navigation';
import { locations, getLocation } from '@/data/locations';
import { products } from '@/data/products';
import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTABanner } from '@/components/CTABanner';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { buildLocalBusinessSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return buildMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/locations/${location.slug}`,
  });
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const nearbyLocations = location.nearbyAreas
    .map((s) => getLocation(s))
    .filter(Boolean);

  return (
    <>
      <SchemaMarkup schema={buildLocalBusinessSchema(location)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[
          { label: 'Locations', href: '/locations/phoenix' },
          { label: `${location.name}, ${location.stateAbbr}`, href: `/locations/${location.slug}` },
        ]} />
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy to-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-terracotta font-semibold tracking-wider uppercase text-sm mb-3">
            {location.state} Service Area
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            {location.heroHeading}
          </h1>
          <p className="text-lg text-sand-light/80 leading-relaxed mb-8 max-w-3xl">
            {location.heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-terracotta hover:bg-terracotta-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Schedule Free Consultation
            </Link>
            <a
              href={`tel:${location.phone.replace(/[^\d+]/g, '')}`}
              className="inline-flex items-center justify-center border-2 border-sand-light/30 text-sand-light hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              {location.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Climate & Architecture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              Climate & Sun Challenges in {location.name}
            </h2>
            <p className="text-charcoal-light leading-relaxed">{location.climateIntro}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              {location.name} Architecture & Design
            </h2>
            <p className="text-charcoal-light leading-relaxed">{location.architectureNotes}</p>
          </div>
        </div>
      </section>

      {/* Unique Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">
            SmarterShading in {location.name}
          </h2>
          <p className="text-charcoal-light leading-relaxed">{location.uniqueContent}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">
            Window Shade Services in {location.name}
          </h2>
          <p className="text-charcoal-light text-center mb-10 max-w-2xl mx-auto">
            We offer the full range of premium window shade products with expert installation
            throughout {location.name} and surrounding areas.
          </p>
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

      {/* Trust Signals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {location.trustSignals.map((signal) => (
              <div key={signal.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-terracotta mb-1">{signal.stat}</p>
                <p className="text-sand-dark text-sm">{signal.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-navy mb-6">
            Neighborhoods We Serve in {location.name}
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {location.neighborhoods.map((n) => (
              <span key={n} className="px-4 py-2 bg-sand-light rounded-full text-sm text-charcoal">
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-gray">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] bg-gradient-to-br from-sand-light to-warm-gray rounded-2xl flex items-center justify-center border border-sand/30">
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto text-sage/40 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-charcoal-light text-sm">{location.name}, {location.stateAbbr} service area map</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearbyLocations.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-navy mb-6">Nearby Areas We Serve</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {nearbyLocations.map((loc) => loc && (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="px-4 py-2 bg-white rounded-full border border-sand/50 text-sm text-charcoal hover:text-terracotta hover:border-terracotta/30 transition-colors"
                >
                  {loc.name}, {loc.stateAbbr}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        heading={`Ready for Premium Shades in ${location.name}?`}
        description={`Schedule a free in-home consultation with our ${location.name} shade experts. We'll measure your windows, show you fabric samples, and provide a detailed quote — all at no cost.`}
      />
    </>
  );
}
