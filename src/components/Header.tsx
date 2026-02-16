'use client';

import Link from 'next/link';
import { useState } from 'react';

const products = [
  { name: 'Motorized Window Shades', href: '/motorized-window-shades' },
  { name: 'Roller Shades', href: '/roller-shades' },
  { name: 'Cellular Shades', href: '/cellular-shades' },
  { name: 'Solar Shades', href: '/solar-shades' },
  { name: 'Roman Shades', href: '/roman-shades' },
  { name: 'Exterior & Patio Shades', href: '/exterior-patio-shades' },
];

const azLocations = [
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

const waLocations = [
  { name: 'Seattle', href: '/locations/seattle' },
  { name: 'Bellevue', href: '/locations/bellevue' },
  { name: 'Tacoma', href: '/locations/tacoma' },
  { name: 'Spokane', href: '/locations/spokane' },
];

const idLocations = [
  { name: 'Coeur d\'Alene', href: '/locations/coeur-d-alene' },
  { name: 'Post Falls', href: '/locations/post-falls' },
  { name: 'Sandpoint', href: '/locations/sandpoint' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-warm-white/90 backdrop-blur-md border-b border-sand/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl font-bold text-navy font-[family-name:var(--font-display)]">
              Smarter<span className="text-terracotta">Shading</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-charcoal hover:text-terracotta transition-colors font-medium"
                aria-expanded={productsOpen}
                aria-haspopup="true"
                onClick={() => setProductsOpen(!productsOpen)}
              >
                Products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white rounded-lg shadow-lg border border-sand/50 py-2 w-64">
                    {products.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="block px-4 py-2.5 text-charcoal hover:bg-sand-light hover:text-terracotta transition-colors"
                        onClick={() => setProductsOpen(false)}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-charcoal hover:text-terracotta transition-colors font-medium"
                aria-expanded={locationsOpen}
                aria-haspopup="true"
                onClick={() => setLocationsOpen(!locationsOpen)}
              >
                Locations
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {locationsOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white rounded-lg shadow-lg border border-sand/50 py-2 w-56 max-h-80 overflow-y-auto">
                    <div className="px-4 py-1.5 text-xs font-semibold text-charcoal-light uppercase tracking-wider">Arizona</div>
                    {azLocations.map((loc) => (
                      <Link key={loc.href} href={loc.href} className="block px-4 py-2 text-charcoal hover:bg-sand-light hover:text-terracotta transition-colors" onClick={() => setLocationsOpen(false)}>
                        {loc.name}
                      </Link>
                    ))}
                    <div className="px-4 py-1.5 text-xs font-semibold text-charcoal-light uppercase tracking-wider mt-2 border-t border-sand/50 pt-3">Washington</div>
                    {waLocations.map((loc) => (
                      <Link key={loc.href} href={loc.href} className="block px-4 py-2 text-charcoal hover:bg-sand-light hover:text-terracotta transition-colors" onClick={() => setLocationsOpen(false)}>
                        {loc.name}
                      </Link>
                    ))}
                    <div className="px-4 py-1.5 text-xs font-semibold text-charcoal-light uppercase tracking-wider mt-2 border-t border-sand/50 pt-3">Northern Idaho</div>
                    {idLocations.map((loc) => (
                      <Link key={loc.href} href={loc.href} className="block px-4 py-2 text-charcoal hover:bg-sand-light hover:text-terracotta transition-colors" onClick={() => setLocationsOpen(false)}>
                        {loc.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog" className="text-charcoal hover:text-terracotta transition-colors font-medium">Blog</Link>
            <Link href="/about" className="text-charcoal hover:text-terracotta transition-colors font-medium">About</Link>
            <Link href="/gallery" className="text-charcoal hover:text-terracotta transition-colors font-medium">Gallery</Link>
          </nav>

          {/* Desktop CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+14805550123" className="text-navy font-semibold hover:text-terracotta transition-colors">
              (480) 555-0123
            </a>
            <Link
              href="/contact"
              className="bg-terracotta hover:bg-terracotta-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-charcoal"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-sand/50 bg-white" aria-label="Mobile navigation">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <div className="pb-2 border-b border-sand/30">
              <p className="text-xs font-semibold text-charcoal-light uppercase tracking-wider px-3 py-2">Products</p>
              {products.map((product) => (
                <Link key={product.href} href={product.href} className="block px-3 py-2.5 text-charcoal hover:text-terracotta transition-colors" onClick={() => setMobileOpen(false)}>
                  {product.name}
                </Link>
              ))}
            </div>
            <div className="py-2 border-b border-sand/30">
              <p className="text-xs font-semibold text-charcoal-light uppercase tracking-wider px-3 py-2">Locations</p>
              <div className="grid grid-cols-2 gap-x-4">
                {[...azLocations, ...waLocations, ...idLocations].map((loc) => (
                  <Link key={loc.href} href={loc.href} className="block px-3 py-2 text-charcoal hover:text-terracotta transition-colors" onClick={() => setMobileOpen(false)}>
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/blog" className="block px-3 py-2.5 text-charcoal hover:text-terracotta transition-colors font-medium" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/about" className="block px-3 py-2.5 text-charcoal hover:text-terracotta transition-colors font-medium" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/gallery" className="block px-3 py-2.5 text-charcoal hover:text-terracotta transition-colors font-medium" onClick={() => setMobileOpen(false)}>Gallery</Link>
            <Link href="/contact" className="block px-3 py-2.5 text-charcoal hover:text-terracotta transition-colors font-medium" onClick={() => setMobileOpen(false)}>Contact</Link>
            <div className="pt-4 space-y-3">
              <a href="tel:+14805550123" className="block text-center text-navy font-semibold text-lg">(480) 555-0123</a>
              <Link href="/contact" className="block text-center bg-terracotta hover:bg-terracotta-dark text-white font-semibold px-5 py-3 rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>
                Free Consultation
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
