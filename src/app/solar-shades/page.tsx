import { getProduct } from '@/data/products';
import { buildMetadata } from '@/lib/metadata';
import { ProductPageLayout } from '@/components/ProductPageLayout';

const product = getProduct('solar-shades')!;

export const metadata = buildMetadata({
  title: product.metaTitle,
  description: product.metaDescription,
  path: `/${product.slug}`,
});

export default function SolarShadesPage() {
  return (
    <ProductPageLayout product={product}>
      {/* Openness Factor Guide */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Openness Factor Guide
          </h2>
          <p className="text-sand-light/70 text-center mb-12 max-w-2xl mx-auto">
            Choose the right openness factor based on your window orientation and priorities.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { factor: '1-3%', label: 'Maximum Protection', desc: 'Blocks the most heat and glare. Best for west-facing windows and rooms with intense afternoon sun. Some view is maintained but with reduced clarity.', best: 'West-facing windows' },
              { factor: '5%', label: 'Best Balance', desc: 'Our most popular option. Excellent glare and heat reduction while maintaining a clear view of the outdoors. The sweet spot for most Arizona homes.', best: 'Most rooms (popular)' },
              { factor: '10-14%', label: 'Maximum View', desc: 'Greatest outward visibility with moderate sun filtering. Ideal for north-facing windows or shaded areas where sun is less intense.', best: 'North-facing, shaded' },
            ].map((option) => (
              <div key={option.factor} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                <p className="text-4xl font-bold text-terracotta mb-1">{option.factor}</p>
                <p className="text-white font-semibold mb-3">{option.label}</p>
                <p className="text-sand-light/60 text-sm mb-4">{option.desc}</p>
                <p className="text-xs text-sand-dark">Best for: {option.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ProductPageLayout>
  );
}
