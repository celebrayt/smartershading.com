import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
  noIndex: true,
});

export default function NotFound() {
  return (
    <section className="py-24 px-6 text-center min-h-[60vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto">
        <h1 className="text-6xl font-bold text-navy mb-4">404</h1>
        <p className="text-xl text-charcoal-light mb-8">
          We couldn&apos;t find the page you&apos;re looking for. It may have been moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-terracotta hover:bg-terracotta-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
