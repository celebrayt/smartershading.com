import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ConsultationForm } from '@/components/ConsultationForm';
import { ServiceAreaMap } from '@/components/ServiceAreaMap';

export const metadata = buildMetadata({
  title: 'Free Consultation',
  description: 'Schedule a free in-home window shade consultation. Our experts will measure, show samples, and provide a detailed quote — no obligation.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h1 className="text-4xl font-bold text-navy mb-4">
                Schedule Your Free Consultation
              </h1>
              <p className="text-charcoal-light mb-8 leading-relaxed">
                Fill out the form below and a shade specialist will contact you within 24 hours
                to schedule your free in-home visit. We&apos;ll measure your windows, show you
                fabric samples in your lighting, and provide a detailed quote — all at no cost.
              </p>
              <ConsultationForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-sand-light rounded-xl p-8">
                <h2 className="text-xl font-bold text-navy mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-terracotta mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-navy">Phone</p>
                      <a href="tel:+14805550123" className="text-charcoal-light hover:text-terracotta transition-colors">(480) 555-0123</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-terracotta mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-navy">Email</p>
                      <a href="mailto:info@smartershading.com" className="text-charcoal-light hover:text-terracotta transition-colors">info@smartershading.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-terracotta mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-navy">Showroom</p>
                      <p className="text-charcoal-light">123 N. Scottsdale Road, Suite 200<br />Scottsdale, AZ 85250</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-terracotta mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-navy">Business Hours</p>
                      <p className="text-charcoal-light">Mon-Fri: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM<br />Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-sand-light to-warm-gray rounded-xl flex items-center justify-center border border-sand/30">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto text-sage/40 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-charcoal-light text-sm">Google Maps embed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">Our Service Areas</h2>
          <ServiceAreaMap />
        </div>
      </section>
    </>
  );
}
