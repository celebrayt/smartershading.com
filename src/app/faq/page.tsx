import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CTABanner } from '@/components/CTABanner';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { buildFAQPageSchema } from '@/lib/schema';
import { faqCategories, getAllFAQs } from '@/data/faq';

export const metadata = buildMetadata({
  title: 'Frequently Asked Questions',
  description: 'Get answers to common questions about window shades, motorization, installation, pricing, smart home integration, and maintenance.',
  path: '/faq',
});

export default function FAQPage() {
  return (
    <>
      <SchemaMarkup schema={buildFAQPageSchema(getAllFAQs())} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'FAQ', href: '/faq' }]} />
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-navy mb-4 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-charcoal-light text-center mb-12">
            Find answers to the most common questions about our window shade products, installation, pricing, and more.
          </p>

          <div className="space-y-12">
            {faqCategories.map((category) => (
              <div key={category.slug}>
                <h2 className="text-2xl font-bold text-navy mb-6">{category.name}</h2>
                <FAQAccordion items={category.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Still Have Questions?"
        description="Our shade specialists are happy to answer any questions during a free, no-obligation consultation."
      />
    </>
  );
}
