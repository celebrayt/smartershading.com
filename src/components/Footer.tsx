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

const washingtonLocations = [
  { name: 'Seattle', href: '/locations/seattle' },
  { name: 'Bellevue', href: '/locations/bellevue' },
  { name: 'Tacoma', href: '/locations/tacoma' },
  { name: 'Spokane', href: '/locations/spokane' },
];

const idahoLocations = [
  { name: 'Coeur d\'Alene', href: '/locations/coeur-d-alene' },
  { name: 'Post Falls', href: '/locations/post-falls' },
  { name: 'Sandpoint', href: '/locations/sandpoint' },
];

export function Footer() {
  return (
    <footer className="bg-navy text-sand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Row: Brand + Products + 3 Location Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white font-[family-name:var(--font-display)]">
                Smarter<span className="text-terracotta">Shading</span>
              </span>
            </Link>
            <p className="text-sand-dark text-sm leading-relaxed mb-6">
              Premium motorized and automated window shades.
              Expert installation, smart home integration, and solutions designed
              for every climate.
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

          {/* Arizona Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Arizona</h3>
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

          {/* Washington Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Washington</h3>
            <ul className="space-y-1.5">
              {washingtonLocations.map((loc) => (
                <li key={loc.href}>
                  <Link href={loc.href} className="text-sand-dark hover:text-white transition-colors text-sm">
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Northern Idaho Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Northern Idaho</h3>
            <ul className="space-y-1.5">
              {idahoLocations.map((loc) => (
                <li key={loc.href}>
                  <Link href={loc.href} className="text-sand-dark hover:text-white transition-colors text-sm">
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Us Row */}
        <div className="border-t border-navy-light mt-12 pt-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
              <h3 className="text-white font-semibold">Contact Us</h3>
              <a href="tel:+14805550123" className="text-sand-dark hover:text-white transition-colors">
                (480) 555-0123
              </a>
              <a href="mailto:info@smartershading.com" className="text-sand-dark hover:text-white transition-colors">
                info@smartershading.com
              </a>
              <span className="text-sand-dark">Mon-Fri: 8am - 6pm &middot; Sat: 9am - 4pm</span>
            </div>
            <Link
              href="/contact"
              className="inline-block bg-terracotta hover:bg-terracotta-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              Free Virtual Consultation
            </Link>
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
