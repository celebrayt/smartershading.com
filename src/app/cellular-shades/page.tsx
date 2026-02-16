import { getProduct } from '@/data/products';
import { buildMetadata } from '@/lib/metadata';
import { ProductPageLayout } from '@/components/ProductPageLayout';

const product = getProduct('cellular-shades')!;

export const metadata = buildMetadata({
  title: product.metaTitle,
  description: product.metaDescription,
  path: `/${product.slug}`,
});

export default function CellularShadesPage() {
  return (
    <ProductPageLayout product={product}>
      {/* Energy Efficiency Diagram */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            How Cellular Shades Save Energy
          </h2>
          <p className="text-sand-light/70 text-center mb-12 max-w-2xl mx-auto">
            The honeycomb structure creates insulating air pockets that dramatically reduce heat transfer through your windows.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center">
              <p className="text-5xl font-bold text-terracotta mb-2">~60%</p>
              <p className="text-white font-semibold mb-2">Solar Heat Gain Reduction</p>
              <p className="text-sand-light/60 text-sm">Double-cell shades block up to 60% of solar heat from entering your home through windows</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center">
              <p className="text-5xl font-bold text-terracotta mb-2">~40%</p>
              <p className="text-white font-semibold mb-2">Heat Loss Reduction</p>
              <p className="text-sand-light/60 text-sm">Insulating air pockets reduce heat loss in winter, keeping your home warm during cool desert nights</p>
            </div>
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Single Cell', savings: '35-50%', desc: 'Good insulation, lower cost' },
              { label: 'Double Cell', savings: '50-60%', desc: 'Maximum insulation' },
              { label: 'Triple Cell', savings: '55-65%', desc: 'Premium performance' },
            ].map((cell) => (
              <div key={cell.label} className="bg-white/5 p-4 rounded-lg text-center">
                <p className="text-white font-semibold">{cell.label}</p>
                <p className="text-terracotta text-lg font-bold">{cell.savings}</p>
                <p className="text-sand-light/50 text-xs">{cell.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ProductPageLayout>
  );
}
