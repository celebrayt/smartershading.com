import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/data/products';
import { Breadcrumbs } from './Breadcrumbs';
import { FAQAccordion } from './FAQAccordion';
import { CTABanner } from './CTABanner';
import { SchemaMarkup } from './SchemaMarkup';
import { buildProductSchema, buildFAQPageSchema } from '@/lib/schema';

interface ProductPageLayoutProps {
  product: Product;
  children?: React.ReactNode;
}

export function ProductPageLayout({ product, children }: ProductPageLayoutProps) {
  return (
    <>
      <SchemaMarkup schema={buildProductSchema({
        name: product.name,
        slug: product.slug,
        description: product.description,
        priceRange: product.priceRange,
      })} />
      <SchemaMarkup schema={buildFAQPageSchema(product.faqs)} />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: product.name, href: `/${product.slug}` }]} />
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy to-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-terracotta font-semibold tracking-wider uppercase text-sm mb-3">
                {product.tagline}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                {product.name}
              </h1>
              <p className="text-lg text-sand-light/80 leading-relaxed mb-6">
                {product.heroDescription}
              </p>
              <p className="text-sand-dark text-sm mb-8">
                Starting from <span className="text-white font-semibold">{product.priceRange}</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-terracotta hover:bg-terracotta-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:+14805550123"
                  className="inline-flex items-center justify-center border-2 border-sand-light/30 text-sand-light hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  (480) 555-0123
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                <Image
                  src={product.heroImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">Key Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-sand/30">
                <svg className="w-5 h-5 text-terracotta shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-charcoal text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">
            Benefits for Your Home
          </h2>
          <p className="text-charcoal-light text-center mb-12 max-w-2xl mx-auto">
            Discover how {product.name.toLowerCase()} improve comfort, protect your home, and save energy in Arizona&apos;s climate.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {product.benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-sand/30">
                <h3 className="text-xl font-bold text-navy mb-3">{benefit.title}</h3>
                <p className="text-charcoal-light leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">
            Popular Applications
          </h2>
          <p className="text-charcoal-light text-center mb-12 max-w-2xl mx-auto">
            See how homeowners across Arizona use {product.name.toLowerCase()} in their spaces.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {product.useCases.map((useCase, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white rounded-xl border border-sand/30">
                <div className="w-10 h-10 rounded-lg bg-sand-light flex items-center justify-center shrink-0">
                  <span className="text-terracotta font-bold">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-2">{useCase.title}</h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product-specific extra content */}
      {children}

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-gray">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-charcoal-light text-center mb-10">
            Common questions about {product.name.toLowerCase()} answered by our experts.
          </p>
          <FAQAccordion items={product.faqs} />
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-navy mb-6">Explore Other Products</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['motorized-window-shades', 'roller-shades', 'cellular-shades', 'solar-shades', 'roman-shades', 'exterior-patio-shades']
              .filter((slug) => slug !== product.slug)
              .map((slug) => {
                const label = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
                return (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    className="px-4 py-2 bg-white rounded-full border border-sand/50 text-sm text-charcoal hover:text-terracotta hover:border-terracotta/30 transition-colors"
                  >
                    {label}
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
