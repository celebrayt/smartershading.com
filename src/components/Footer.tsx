import Link from 'next/link';

const productLinks = [
  { name: 'Motorized Window Shades', href: '/motorized-window-shades' },
  { name: 'Roller Shades', href: '/roller-shades' },
  { name: 'Cellular Shades', href: '/cellular-shades' },
  { name: 'Solar Shades', href: '/solar-shades' },
  { name: 'Roman Shades', href: '/roman-shades' },
  { name: 'Exterior & Patio Shades', href: '/exterior-patio-shades' },
];

const arizonaLocations = [
  { name: 'Phoenix', href: '/locations/phoenix' },
  { name: 'Scottsdale', href: '/locations/scottsdale' },
  { name: 'Paradise Valley', href: '/locations/paradise-valley' },
  { name: 'Tempe', href: '/locations/tempe' },
  { name: 'Mesa', href: '/locations/mesa' },
  { name: 'Chandler', href: '/locations/chandler' },
  { name: 'Gilbert', href: '/locations/gilbert' },
  { name: 'Glendale', href: '/locations/glendale' },
  { name: 'Tucson', href: '/locations/tucson' },
];

const westCoastLocations = [
  { name: 'Los Angeles', href: '/locations/los-angeles' },
  { name: 'San Diego', href: '/locations/san-diego' },
  { name: 'Las Vegas', href: '/locations/las-vegas' },
  { name: 'San Francisco', href: '/locations/san-francisco' },
  { name: 'Portland', href: '/locations/portland' },
  { name: 'Seattle', href: '/locations/seattle' },
];

export function Footer() {
  return (
    <footer className="bg-navy text-sand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white font-[family-name:var(--font-display)]">
                Smarter<span className="text-terracotta">Shading</span>
              </span>
            </Link>
            <p className="text-sand-dark text-sm leading-relaxed mb-6">
              Arizona&apos;s premier provider of motorized and automated window shades.
              Expert installation, smart home integration, and solutions designed
              for desert living.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Instagram', 'Pinterest', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sand-dark hover:text-white transition-colors"
                  aria-label={`Follow us on ${social}`}
                >
                  <span className="w-5 h-5 block text-xs">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sand-dark hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Service Areas</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-sand-dark uppercase tracking-wider mb-2">Arizona</p>
                <ul className="space-y-1.5">
                  {arizonaLocations.map((loc) => (
                    <li key={loc.href}>
                      <Link href={loc.href} className="text-sand-dark hover:text-white transition-colors text-sm">
                        {loc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-sand-dark uppercase tracking-wider mb-2">West Coast</p>
                <ul className="space-y-1.5">
                  {westCoastLocations.map((loc) => (
                    <li key={loc.href}>
                      <Link href={loc.href} className="text-sand-dark hover:text-white transition-colors text-sm">
                        {loc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+14805550123" className="text-sand-dark hover:text-white transition-colors">
                  (480) 555-0123
                </a>
              </li>
              <li>
                <a href="mailto:info@smartershading.com" className="text-sand-dark hover:text-white transition-colors">
                  info@smartershading.com
                </a>
              </li>
              <li className="text-sand-dark">
                123 N. Scottsdale Road, Suite 200<br />
                Scottsdale, AZ 85250
              </li>
              <li className="text-sand-dark">
                Mon-Fri: 8am - 6pm<br />
                Sat: 9am - 4pm
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-terracotta hover:bg-terracotta-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sand-dark text-sm">
            &copy; {new Date().getFullYear()} SmarterShading. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/faq" className="text-sand-dark hover:text-white transition-colors text-sm">FAQ</Link>
            <Link href="/reviews" className="text-sand-dark hover:text-white transition-colors text-sm">Reviews</Link>
            <a href="#" className="text-sand-dark hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-sand-dark hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
