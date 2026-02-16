export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SmarterShading',
    url: 'https://smartershading.com',
    logo: 'https://smartershading.com/logo.png',
    description:
      'Premium motorized and automated window shades for Arizona, Washington, and Northern Idaho homes. Expert Lutron installation, smart home integration, and climate-specific solutions.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-480-555-0123',
      contactType: 'sales',
      areaServed: ['US-AZ', 'US-CA', 'US-NV', 'US-OR', 'US-WA'],
      availableLanguage: 'English',
    },
    sameAs: [
      'https://www.facebook.com/smartershading',
      'https://www.instagram.com/smartershading',
      'https://www.pinterest.com/smartershading',
      'https://www.youtube.com/@smartershading',
    ],
  };
}

export function buildLocalBusinessSchema(location: {
  name: string;
  slug: string;
  state: string;
  stateAbbr: string;
  phone: string;
  address?: string;
  latitude?: number;
  longitude?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `SmarterShading - ${location.name}, ${location.stateAbbr}`,
    url: `https://smartershading.com/locations/${location.slug}`,
    telephone: location.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.name,
      addressRegion: location.stateAbbr,
      addressCountry: 'US',
    },
    geo: location.latitude
      ? {
          '@type': 'GeoCoordinates',
          latitude: location.latitude,
          longitude: location.longitude,
        }
      : undefined,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00',
      },
    ],
    priceRange: '$$-$$$$',
    image: 'https://smartershading.com/og-image.jpg',
    description: `Premium motorized and automated window shades in ${location.name}, ${location.stateAbbr}. Expert installation and smart home integration.`,
  };
}

export function buildProductSchema(product: {
  name: string;
  slug: string;
  description: string;
  priceRange: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    url: `https://smartershading.com/${product.slug}`,
    description: product.description,
    brand: { '@type': 'Brand', name: 'SmarterShading' },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        description: product.priceRange,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
  };
}

export function buildFAQPageSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildBlogPostSchema(post: {
  title: string;
  slug: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    url: `https://smartershading.com/blog/${post.slug}`,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'SmarterShading',
      logo: {
        '@type': 'ImageObject',
        url: 'https://smartershading.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://smartershading.com/blog/${post.slug}`,
    },
  };
}

export function buildAggregateRatingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'SmarterShading',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '247',
      bestRating: '5',
      worstRating: '1',
    },
  };
}
