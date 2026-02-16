import { getProduct } from '@/data/products';
import { buildMetadata } from '@/lib/metadata';
import { ProductPageLayout } from '@/components/ProductPageLayout';

const product = getProduct('exterior-patio-shades')!;

export const metadata = buildMetadata({
  title: product.metaTitle,
  description: product.metaDescription,
  path: `/${product.slug}`,
});

export default function ExteriorPatioShadesPage() {
  return (
    <ProductPageLayout product={product}>
      {/* Track System Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Track System Options
          </h2>
          <p className="text-sand-light/70 text-center mb-12 max-w-2xl mx-auto">
            Choose the mounting system that best fits your outdoor space and wind exposure.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Cable-Guided', wind: '40+ mph rated', desc: 'Stainless steel cables guide the shade fabric on each side. Allows slight fabric movement in breeze for a natural feel. More affordable and easier to install. Ideal for covered patios with moderate wind exposure.', pros: ['Lower cost', 'Easy installation', 'Natural movement', 'Wide spanning capability'] },
              { name: 'Sealed Track', wind: '60+ mph rated', desc: 'Aluminum tracks on each side fully enclose the fabric edges. Creates a sealed barrier against bugs, wind, and debris. The premium choice for maximum protection and the cleanest appearance.', pros: ['Maximum wind resistance', 'Complete bug barrier', 'Cleanest appearance', 'Best for monsoon areas'] },
            ].map((system) => (
              <div key={system.name} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-1">{system.name}</h3>
                <p className="text-terracotta text-sm font-semibold mb-4">Wind resistance: {system.wind}</p>
                <p className="text-sand-light/70 text-sm mb-6">{system.desc}</p>
                <ul className="space-y-2">
                  {system.pros.map((pro) => (
                    <li key={pro} className="flex items-center gap-2 text-sm text-sand-light/80">
                      <svg className="w-4 h-4 text-terracotta shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ProductPageLayout>
  );
}
