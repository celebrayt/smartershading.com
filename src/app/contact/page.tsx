import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ConsultationForm } from '@/components/ConsultationForm';
import { ServiceAreaMap } from '@/components/ServiceAreaMap';

export const metadata = buildMetadata({
  title: 'Free Consultation',
  description: 'Schedule a free virtual window shade consultation. Our experts will help you choose the perfect shades and provide a detailed quote — no obligation.',
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
                to schedule your free virtual consultation. We&apos;ll walk you through fabric
                options, help you choose the perfect shades for your space, and provide a detailed
                quote — all from the comfort of your home.
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-navy">Virtual Consultations</p>
                      <p className="text-charcoal-light">Video calls available via Zoom or FaceTime.<br />We serve AZ, WA &amp; Northern Idaho.</p>
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

              {/* How It Works */}
              <div className="bg-navy rounded-xl p-8 text-white">
                <h2 className="text-xl font-bold mb-6">How Our Virtual Consultation Works</h2>
                <ol className="space-y-4">
                  {[
                    { step: '1', title: 'Book Your Call', desc: 'Fill out the form and we\'ll schedule a video call at your convenience.' },
                    { step: '2', title: 'Show Us Your Space', desc: 'Walk us through your rooms on camera so we can assess windows, lighting, and style.' },
                    { step: '3', title: 'Get Your Quote', desc: 'We\'ll recommend the best shades for your needs and send a detailed quote within 24 hours.' },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-terracotta flex items-center justify-center text-sm font-bold shrink-0">{item.step}</span>
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sand-light/70 text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
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
