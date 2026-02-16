import { getProduct } from '@/data/products';
import { buildMetadata } from '@/lib/metadata';
import { ProductPageLayout } from '@/components/ProductPageLayout';

const product = getProduct('roller-shades')!;

export const metadata = buildMetadata({
  title: product.metaTitle,
  description: product.metaDescription,
  path: `/${product.slug}`,
});

export default function RollerShadesPage() {
  return (
    <ProductPageLayout product={product}>
      {/* Fabric Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Fabric Options Compared
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Light-Filtering', desc: 'Softly diffuses sunlight while maintaining natural brightness. Ideal for living rooms, kitchens, and dining areas where you want a warm glow without harsh glare.', light: '30-50% light reduction', privacy: 'Moderate daytime privacy' },
              { title: 'Solar Screen', desc: 'Engineered mesh that blocks UV and heat while preserving views. Available in openness factors from 1% to 14%. The go-to choice for Arizona sun control.', light: '50-95% glare reduction', privacy: 'Good daytime privacy' },
              { title: 'Blackout', desc: 'Total light blockage for complete darkness. Essential for bedrooms, media rooms, and nurseries. Our most popular choice for Arizona bedrooms.', light: '99%+ light blocked', privacy: 'Complete privacy' },
            ].map((fabric) => (
              <div key={fabric.title} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">{fabric.title}</h3>
                <p className="text-sand-light/70 text-sm mb-4">{fabric.desc}</p>
                <div className="space-y-2 text-xs">
                  <p className="text-sand-dark"><span className="text-terracotta font-semibold">Light:</span> {fabric.light}</p>
                  <p className="text-sand-dark"><span className="text-terracotta font-semibold">Privacy:</span> {fabric.privacy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ProductPageLayout>
  );
}
