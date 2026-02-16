import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { GalleryGrid } from '@/components/GalleryGrid';
import { CTABanner } from '@/components/CTABanner';

export const metadata = buildMetadata({
  title: 'Project Gallery',
  description: 'Browse our portfolio of window shade installations across Arizona. Motorized, roller, cellular, solar, Roman, and exterior shade projects.',
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Gallery', href: '/gallery' }]} />
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-navy mb-4">
            Project Gallery
          </h1>
          <p className="text-lg text-charcoal-light mb-10 max-w-2xl">
            Browse our recent installations across Arizona and the West Coast. Filter by shade type or room to find inspiration for your project.
          </p>
          <GalleryGrid />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
