import Link from 'next/link';

interface CTABannerProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTABanner({
  heading = 'Ready to Transform Your Space?',
  description = 'Schedule a free in-home consultation with our shade experts. We\'ll help you find the perfect solution for your home and lifestyle.',
  buttonText = 'Schedule Free Consultation',
  buttonHref = '/contact',
}: CTABannerProps) {
  return (
    <section className="bg-navy py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {heading}
        </h2>
        <p className="text-lg text-sand-light mb-8">{description}</p>
        <Link
          href={buttonHref}
          className="inline-block bg-terracotta hover:bg-terracotta-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
