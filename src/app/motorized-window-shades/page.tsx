import { getProduct } from '@/data/products';
import { buildMetadata } from '@/lib/metadata';
import { ProductPageLayout } from '@/components/ProductPageLayout';

const product = getProduct('motorized-window-shades')!;

export const metadata = buildMetadata({
  title: product.metaTitle,
  description: product.metaDescription,
  path: `/${product.slug}`,
});

export default function MotorizedWindowShadesPage() {
  return (
    <ProductPageLayout product={product}>
      {/* Lutron Product Lines */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Three Lutron Product Lines, One Expert Dealer
          </h2>
          <p className="text-sand-light/70 text-center mb-12 max-w-2xl mx-auto">
            As an authorized Lutron dealer, we install and service all three motorized shading tiers — matched to your home, budget, and lifestyle.
          </p>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Triathlon',
                tier: 'Battery-Powered',
                desc: 'The most fashionable, flexible, and reliable battery-powered shading system available. Industry-leading 3-5 year battery life using standard D-cell batteries. Easy-access battery tray tips forward without removing the shade. WIDR roller tube covers windows up to 12\' x 12\'.',
                features: ['3-5 year D-cell battery life', 'No wiring required — perfect for retrofits', 'Roller, honeycomb & wood blind styles', 'Clear Connect RF wireless technology', 'Battery Boost extends life up to 80%'],
              },
              {
                name: 'Sivoia QS',
                tier: 'Hardwired Precision',
                desc: 'Lutron\'s most versatile hardwired shading system. Near-silent operation at less than 44 dBA. Simplified low-voltage wiring with built-in diagnostics. The broadest product range — roller, honeycomb, Roman, drapery, tension, and horizontal sheer blinds.',
                features: ['Near-silent operation (<44 dBA)', 'Low-voltage wiring with diagnostics', 'Roller, Roman, drapery & tension styles', 'Unlimited power — no batteries ever', 'Ultra-slim Roller 20 (1.25" diameter)'],
              },
              {
                name: 'Palladiom',
                tier: 'Luxury Hand-Finished',
                desc: 'Engineered to be beautiful. Brackets milled from solid aluminum or brass, hand-finished to perfection. Carbon fiber tubes barely two inches in diameter provide maximum strength with minimum profile. Every detail is a design statement.',
                features: ['Solid aluminum & brass brackets', 'Hand-finished aged bronze option', 'Carbon fiber tubes (wired)', 'Wire-free option with Active Energy Optimization', 'Matches Palladiom keypads & thermostats'],
              },
            ].map((line) => (
              <div key={line.name} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <p className="text-terracotta text-sm font-semibold uppercase tracking-wider mb-1">{line.tier}</p>
                <h3 className="text-2xl font-bold text-white mb-4">Lutron {line.name}</h3>
                <p className="text-sand-light/70 text-sm mb-6 leading-relaxed">{line.desc}</p>
                <ul className="space-y-2">
                  {line.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-sand-light/80">
                      <svg className="w-4 h-4 text-terracotta shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Home Integration */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">
            Lutron Ecosystem Integration
          </h2>
          <p className="text-charcoal-light text-center mb-12 max-w-2xl mx-auto">
            Every Lutron shade connects to the broader Lutron ecosystem — and works with the voice assistants you already use.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Lutron Caseta', desc: 'The most popular smart lighting system in America. Add shades to your existing Caseta setup for unified control of lights and shades from one app.' },
              { name: 'Lutron RadioRA 3', desc: 'Whole-home lighting and shade control for larger homes. Supports up to 200 devices with professional programming and elegant keypads.' },
              { name: 'Lutron HomeWorks QSX', desc: 'The pinnacle of home automation. Fully customized scenes, schedules, and integration with audio, video, security, and climate systems.' },
              { name: 'Amazon Alexa', desc: 'Voice control, routines, and group commands. "Alexa, close the living room shades." Works through Lutron\'s bridge — no WiFi dependency for the shades.' },
              { name: 'Google Home', desc: 'Natural language control and scheduled actions through the Google Home app. Integrates through Lutron\'s Smart Bridge.' },
              { name: 'Apple HomeKit', desc: 'Siri control, Apple Home app, and automation via iPhone, iPad, and Apple Watch. Full native HomeKit support through Lutron bridge.' },
            ].map((platform) => (
              <div key={platform.name} className="p-6 bg-white rounded-xl border border-sand/30">
                <h3 className="text-lg font-bold text-navy mb-2">{platform.name}</h3>
                <p className="text-charcoal-light text-sm">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ProductPageLayout>
  );
}
