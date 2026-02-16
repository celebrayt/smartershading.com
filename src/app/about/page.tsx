import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTABanner } from '@/components/CTABanner';
import { ServiceAreaMap } from '@/components/ServiceAreaMap';

export const metadata = buildMetadata({
  title: 'About SmarterShading',
  description: 'Learn about SmarterShading — Arizona\'s premier motorized window shade company. 15+ years of experience, manufacturer partnerships, and a commitment to excellence.',
  path: '/about',
});

const team = [
  { name: 'Scott Dawson', role: 'Founder & CEO', bio: 'With over 15 years in the window treatment industry, Scott founded SmarterShading to bring premium motorized shade solutions to Arizona homeowners. His passion for smart home technology and desert-climate design drives the company vision.' },
  { name: 'Sarah Chen', role: 'Head of Design', bio: 'Sarah brings 12 years of interior design experience to every project. She works directly with clients, architects, and designers to ensure every shade installation enhances the home\'s aesthetic.' },
  { name: 'David Martinez', role: 'Installation Director', bio: 'David leads our installation teams with a focus on precision and care. A licensed electrician by trade, he ensures every motorized installation meets the highest standards of quality and safety.' },
  { name: 'Jessica Patel', role: 'Client Experience Manager', bio: 'Jessica oversees the client journey from first consultation to post-installation follow-up. Her dedication to service excellence is reflected in our 4.9-star average rating.' },
];

const values = [
  { title: 'Craftsmanship', description: 'Every shade is custom-built and installed with meticulous attention to detail. We never cut corners on materials, hardware, or installation quality.' },
  { title: 'Technology', description: 'We stay at the forefront of smart home integration and motorization technology. As an authorized Lutron dealer, our team is certified across Triathlon, Sivoia QS, and Palladiom product lines.' },
  { title: 'Service', description: 'From your first call to years after installation, we are committed to your complete satisfaction. Our lifetime motor warranty backs that promise.' },
  { title: 'Expertise', description: '15+ years of solving Arizona\'s unique sun and heat challenges. We know which products perform in our climate — because we have tested them all.' },
];

export default function AboutPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />
      </div>

      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Arizona&apos;s Premier Shade Specialists
          </h1>
          <p className="text-lg text-charcoal-light leading-relaxed">
            SmarterShading was founded with a simple mission: bring premium motorized window shade
            solutions to Arizona homeowners who demand the best. Over 15 years and 2,500+
            installations later, we have become the region&apos;s most trusted shade company —
            and we are just getting started.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-gray">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
            <div className="space-y-4 text-charcoal-light leading-relaxed">
              <p>
                SmarterShading started in 2010 when our founder, Scott Dawson, noticed a gap in the
                Arizona market. Homeowners were spending thousands on window treatments that were not
                designed for desert conditions — fabrics that faded in months, motors that overheated,
                and installers who did not understand the unique challenges of our climate.
              </p>
              <p>
                Scott set out to build a company that combined premium products with deep local expertise.
                He partnered with Lutron — the world&apos;s leader in motorized shading — and
                built an installation team trained specifically for Arizona conditions.
              </p>
              <p>
                Today, SmarterShading serves thousands of homeowners across Arizona, California, Nevada,
                Oregon, and Washington. Our reputation is built on one project at a time, with the same
                attention to quality and service that defined our very first installation.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] bg-gradient-to-br from-sand-light to-sand rounded-2xl flex items-center justify-center">
            <svg className="w-20 h-20 text-sand-dark/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-sand-light flex items-center justify-center text-2xl font-bold text-sand-dark mb-4">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 className="font-bold text-navy">{member.name}</h3>
                <p className="text-terracotta text-sm font-medium mb-3">{member.role}</p>
                <p className="text-charcoal-light text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Our Values</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-sand-light/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-navy mb-8">Authorized Lutron Dealer</h2>
          <p className="text-charcoal-light mb-8 max-w-2xl mx-auto">
            As a certified Lutron dealer, we are trained and authorized to install and service the full Lutron motorized shading lineup.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {['Triathlon', 'Sivoia QS', 'Palladiom', 'Caseta', 'RadioRA 3', 'HomeWorks QSX'].map((line) => (
              <div key={line} className="px-6 py-3 bg-sand-light rounded-xl text-charcoal font-semibold">
                Lutron {line}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">Where We Serve</h2>
          <ServiceAreaMap />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
