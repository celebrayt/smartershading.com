import { getProduct } from '@/data/products';
import { buildMetadata } from '@/lib/metadata';
import { ProductPageLayout } from '@/components/ProductPageLayout';

const product = getProduct('roman-shades')!;

export const metadata = buildMetadata({
  title: product.metaTitle,
  description: product.metaDescription,
  path: `/${product.slug}`,
});

export default function RomanShadesPage() {
  return (
    <ProductPageLayout product={product}>
      {/* Fold Style Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Roman Shade Fold Styles
          </h2>
          <p className="text-sand-light/70 text-center mb-12 max-w-2xl mx-auto">
            Each fold style creates a distinct aesthetic. Choose the one that complements your interior design vision.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Flat Fold', desc: 'Crisp, clean horizontal pleats when raised. The most modern and minimal option. Creates sharp geometric lines that complement contemporary architecture. When lowered, the fabric lays completely flat.', style: 'Modern & Minimal' },
              { name: 'Hobbled Fold', desc: 'Soft, cascading loops that maintain their drape even when lowered. The most luxurious and traditional look. Creates beautiful depth and dimension at the window. Also called teardrop or waterfall fold.', style: 'Luxurious & Traditional' },
              { name: 'Relaxed Fold', desc: 'A gentle, natural curve at the bottom creates an effortlessly elegant look. Less structured than flat fold, less formal than hobbled. Perfect for a sophisticated but casual Arizona aesthetic.', style: 'Casual & Elegant' },
            ].map((fold) => (
              <div key={fold.name} className="text-center">
                <div className="aspect-[3/4] bg-white/10 rounded-xl mb-4 flex items-center justify-center border border-white/10">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto text-sand/30 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sand/40 text-xs">{fold.name} example</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{fold.name}</h3>
                <p className="text-terracotta text-sm font-semibold mb-3">{fold.style}</p>
                <p className="text-sand-light/60 text-sm">{fold.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ProductPageLayout>
  );
}
