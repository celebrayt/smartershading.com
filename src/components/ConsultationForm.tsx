'use client';

import { useState } from 'react';

const shadeTypes = [
  'Motorized Shades',
  'Roller Shades',
  'Cellular Shades',
  'Solar Shades',
  'Roman Shades',
  'Exterior/Patio Shades',
  'Not Sure Yet',
];

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());

    const newErrors: Record<string, string> = {};
    if (!values.name) newErrors.name = 'Name is required';
    if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email as string))
      newErrors.email = 'Valid email is required';
    if (!values.phone) newErrors.phone = 'Phone number is required';
    if (!values.zip) newErrors.zip = 'Zip code is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Consultation form submission:', values);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-sage/10 rounded-xl p-8 text-center">
        <svg className="w-12 h-12 mx-auto text-sage mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-bold text-navy mb-2">Thank You!</h3>
        <p className="text-charcoal-light">
          We&apos;ve received your consultation request. A shade specialist will contact you within 24 hours to schedule your free in-home visit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">Full Name *</label>
          <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border border-sand/50 bg-white text-charcoal focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition" />
          {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">Email *</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-sand/50 bg-white text-charcoal focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition" />
          {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1">Phone *</label>
          <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-sand/50 bg-white text-charcoal focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition" />
          {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="zip" className="block text-sm font-medium text-navy mb-1">Zip Code *</label>
          <input type="text" id="zip" name="zip" className="w-full px-4 py-3 rounded-lg border border-sand/50 bg-white text-charcoal focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition" />
          {errors.zip && <p className="text-red-600 text-xs mt-1">{errors.zip}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="shadeType" className="block text-sm font-medium text-navy mb-1">Shade Type Interest</label>
        <select id="shadeType" name="shadeType" className="w-full px-4 py-3 rounded-lg border border-sand/50 bg-white text-charcoal focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition">
          <option value="">Select a shade type...</option>
          {shadeTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-navy mb-1">Project Description</label>
        <textarea id="description" name="description" rows={4} className="w-full px-4 py-3 rounded-lg border border-sand/50 bg-white text-charcoal focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition resize-none" placeholder="Tell us about your project — number of windows, rooms, any specific needs..." />
      </div>
      <button
        type="submit"
        className="w-full bg-terracotta hover:bg-terracotta-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
      >
        Request Free Consultation
      </button>
      <p className="text-xs text-charcoal-light text-center">
        No obligation. A shade specialist will contact you within 24 hours.
      </p>
    </form>
  );
}
