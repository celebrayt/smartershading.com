import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { products } from '@/data/products';
import { testimonials } from '@/data/testimonials';
import { blogPosts } from '@/data/blog-posts';
import { ProductCard } from '@/components/ProductCard';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { BlogPostCard } from '@/components/BlogPostCard';
import { ServiceAreaMap } from '@/components/ServiceAreaMap';
import { CTABanner } from '@/components/CTABanner';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { buildLocalBusinessSchema } from '@/lib/schema';

export const metadata = buildMetadata({
  title: 'Premium Motorized Window Shades Arizona',
  description:
    'Arizona\'s premier provider of premium motorized and automated window shades. Expert installation, smart home integration, and solutions designed for desert living.',
  path: '/',
});

const valueProps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Desert Climate Expertise',
    description: '15+ years solving Arizona\'s toughest sun and heat challenges. We know which shades perform in 115°F summers.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Smart Home Integration',
    description: 'Seamless control via Alexa, Google Home, HomeKit, and Lutron Caseta, RadioRA & HomeWorks. Professional setup included.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Premium Customization',
    description: 'Hundreds of fabrics, finishes, and configurations. Every shade is custom-built for your exact windows.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Professional Installation',
    description: 'Factory-trained crews, licensed electricians, and a lifetime warranty on all motors and components.',
  },
];

const stats = [
  { value: '2,500+', label: 'Installations Completed' },
  { value: '15+', label: 'Years of Experience' },
  { value: '4.9/5', label: 'Average Client Rating' },
  { value: '5 States', label: 'Service Coverage' },
];

export default function Home() {
  return (
    <>
      <SchemaMarkup
        schema={buildLocalBusinessSchema({
          name: 'Phoenix',
          slug: '',
          state: 'Arizona',
          stateAbbr: 'AZ',
          phone: '+1-480-555-0123',
          latitude: 33.4484,
          longitude: -112.074,
        })}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy via-navy to-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(196,101,58,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 relative">
          <div className="max-w-3xl">
            <p className="text-terracotta font-semibold tracking-wider uppercase text-sm mb-4">
              Arizona&apos;s Premier Shade Specialists
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Premium Motorized Shades for Desert Living
            </h1>
            <p className="text-xl text-sand-light/80 leading-relaxed mb-8 max-w-2xl">
              Transform your home with automated window shades that cut cooling costs,
              protect your interiors, and integrate seamlessly with your smart home —
              all designed for Arizona&apos;s extreme climate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-terracotta hover:bg-terracotta-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/motorized-window-shades"
                className="inline-flex items-center justify-center border-2 border-sand-light/30 text-sand-light hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 bg-white border-b border-sand/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop) => (
              <div key={prop.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-sand-light text-terracotta mb-4">
                  {prop.icon}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{prop.title}</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Window Shade Collections
            </h2>
            <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
              From motorized automation to timeless Roman folds — every shade custom-built
              for your home and Arizona&apos;s demanding climate.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                slug={product.slug}
                name={product.name}
                tagline={product.tagline}
                description={product.description}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Stats */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Arizona Homeowners Choose Us
            </h2>
            <p className="text-lg text-sand-light/70 max-w-2xl mx-auto">
              We have been designing, installing, and perfecting window shade solutions
              for desert homes since day one.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-terracotta mb-2">
                  {stat.value}
                </p>
                <p className="text-sand-dark text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-sand-dark">
            <span>Lutron Certified</span>
            <span>&bull;</span>
            <span>Triathlon Specialist</span>
            <span>&bull;</span>
            <span>Sivoia QS & Palladiom Certified</span>
            <span>&bull;</span>
            <span>Lifetime Motor Warranty</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-charcoal-light">
              Real reviews from Arizona homeowners who trust SmarterShading.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials.slice(0, 6)} />
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Serving Arizona & the West Coast
            </h2>
            <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
              Headquartered in Scottsdale with service teams across Arizona, California,
              Nevada, Oregon, and Washington.
            </p>
          </div>
          <ServiceAreaMap />
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-gray">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Expert Resources
              </h2>
              <p className="text-lg text-charcoal-light">
                Guides, tips, and insights from our shade specialists.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1 text-terracotta font-semibold hover:gap-2 transition-all"
            >
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogPostCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                readingTime={post.readingTime}
                datePublished={post.datePublished}
                image={post.image}
              />
            ))}
          </div>
          <div className="sm:hidden mt-8 text-center">
            <Link href="/blog" className="text-terracotta font-semibold">
              View All Posts &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner />
    </>
  );
}
