import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTABanner } from '@/components/CTABanner';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { buildAggregateRatingSchema } from '@/lib/schema';
import { testimonials } from '@/data/testimonials';

export const metadata = buildMetadata({
  title: 'Customer Reviews & Testimonials',
  description: 'Read verified reviews from SmarterShading customers across Arizona. 4.9/5 average rating from 247+ installations.',
  path: '/reviews',
});

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-amber' : 'text-sand-dark'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const avgRating = (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <>
      <SchemaMarkup schema={buildAggregateRatingSchema()} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Reviews', href: '/reviews' }]} />
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-navy mb-4 text-center">
            Customer Reviews
          </h1>

          {/* Aggregate Score */}
          <div className="bg-sand-light rounded-2xl p-8 text-center mb-12">
            <p className="text-6xl font-bold text-navy mb-2">{avgRating}</p>
            <div className="flex justify-center mb-2">
              <StarRating rating={Math.round(Number(avgRating))} />
            </div>
            <p className="text-charcoal-light">
              Based on {testimonials.length} verified reviews
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-terracotta font-semibold hover:text-terracotta-dark transition-colors text-sm"
            >
              Leave a Review on Google &rarr;
            </a>
          </div>

          {/* Review Cards */}
          <div className="space-y-4">
            {testimonials.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-xl border border-sand/30">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-navy">{review.name}</p>
                    <p className="text-xs text-charcoal-light">{review.location}</p>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-charcoal-light leading-relaxed mb-3">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between text-xs text-charcoal-light">
                  <span className="bg-sand-light px-2 py-1 rounded text-charcoal">{review.product}</span>
                  <span>{new Date(review.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
