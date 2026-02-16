export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  name: string;
  slug: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    name: 'Products',
    slug: 'products',
    items: [
      { question: 'What types of window shades do you offer?', answer: 'We offer six main categories: Motorized/Automated Shades, Roller Shades, Cellular (Honeycomb) Shades, Solar Shades, Roman Shades, and Exterior/Patio Shades. Each category comes in a wide range of fabrics, colors, and configurations to suit any home and style preference.' },
      { question: 'Which shade type is best for Arizona homes?', answer: 'It depends on your priorities. For maximum energy savings, cellular shades reduce cooling costs by up to 40%. For view preservation with sun control, solar shades are ideal. For smart home automation and convenience, motorized shades are the top choice. Most Arizona homes benefit from a combination — we help you choose the right shade for each room during your free consultation.' },
      { question: 'What brands and manufacturers do you work with?', answer: 'We are an authorized Lutron dealer, giving us access to the full Lutron motorized shading lineup — Triathlon, Sivoia QS, and Palladiom. Lutron is the world leader in motorized shading with the highest-quality motors, fabrics, and hardware available. We also carry a curated selection of premium non-motorized fabrics for manual shade installations.' },
      { question: 'Do you offer samples before I commit?', answer: 'Absolutely! During your free in-home consultation, we bring a comprehensive selection of fabric samples, hardware finishes, and operating system demos. Seeing and touching the materials in your own lighting is the best way to make a confident choice.' },
    ],
  },
  {
    name: 'Installation',
    slug: 'installation',
    items: [
      { question: 'How long does installation take?', answer: 'Most residential installations are completed in a single day. A typical home with 10-15 windows takes 4-6 hours. Larger projects or complex motorized installations may require two days. We schedule a specific installation window and our crews arrive on time.' },
      { question: 'Do you handle the electrical work for hardwired shades?', answer: 'Yes. Our installation team includes licensed electricians who handle all wiring for hardwired motorized shades. For new construction, we coordinate with your builder to pre-wire during the rough-in phase. For retrofits, we conceal wiring as cleanly as possible.' },
      { question: 'Will installation damage my walls or window frames?', answer: 'Our installation is minimally invasive. Inside-mount shades require small pilot holes in the window frame. Outside-mount shades require mounting brackets above the window. We use precision tools and take great care to avoid any unnecessary damage. All mounting hardware is included.' },
      { question: 'Do you serve areas outside Phoenix metro?', answer: 'Yes! While our primary service area is the Phoenix metro (Scottsdale, Paradise Valley, Tempe, Mesa, Chandler, Gilbert, Glendale), we also serve Tucson and select West Coast markets including Los Angeles, San Diego, Las Vegas, San Francisco, Portland, and Seattle.' },
    ],
  },
  {
    name: 'Pricing',
    slug: 'pricing',
    items: [
      { question: 'How much do custom window shades cost?', answer: 'Pricing varies by shade type, size, fabric, and features. General ranges: Roller Shades $150-$800/window, Cellular Shades $200-$1,200/window, Solar Shades $200-$1,000/window, Roman Shades $350-$1,800/window, Motorized Shades $400-$2,500/window, Exterior Shades $500-$3,000/opening. We provide exact pricing during your free in-home consultation.' },
      { question: 'Do you offer financing?', answer: 'Yes, we offer flexible financing options including 0% interest for 12 months on qualifying purchases. Ask about our financing plans during your consultation. We also offer volume discounts for whole-home installations.' },
      { question: 'Is the consultation really free?', answer: 'Yes, completely free with no obligation. A shade specialist visits your home, measures your windows, discusses your needs and preferences, shows you fabric samples in your lighting, and provides a detailed written quote — all at no cost.' },
    ],
  },
  {
    name: 'Smart Home',
    slug: 'smart-home',
    items: [
      { question: 'Which smart home systems do your shades work with?', answer: 'Our Lutron motorized shades integrate with Amazon Alexa, Google Home, Apple HomeKit, and the full Lutron ecosystem — Caseta, RadioRA 3, and HomeWorks QSX. Clear Connect RF technology ensures rock-solid reliability without WiFi dependency. We configure the integration as part of installation so everything works from day one.' },
      { question: 'Can I control my shades with my phone when I am away from home?', answer: 'Yes! With WiFi-connected motors, you can control your shades from anywhere using the manufacturer app on your smartphone. This is great for adjusting shades while on vacation, making your home look occupied, or pre-cooling your home before you arrive.' },
      { question: 'Can shades be programmed on schedules?', answer: 'Absolutely. You can program shades to adjust based on time of day, sunrise/sunset, or even sun position. Popular schedules include: opening with sunrise, closing west-facing shades at 2pm to block afternoon heat, and closing all shades at bedtime. Schedules can be seasonal too.' },
    ],
  },
  {
    name: 'Maintenance',
    slug: 'maintenance',
    items: [
      { question: 'How do I clean my window shades?', answer: 'Most shades can be cleaned with a light dusting using a feather duster or vacuum with brush attachment. For spot cleaning, a damp cloth with mild soap works for most fabrics. We provide specific care instructions for your shade type at installation. Roller and solar shades are the easiest to maintain in dusty Arizona conditions.' },
      { question: 'What warranty do you offer?', answer: 'We offer a comprehensive warranty: Lifetime warranty on all motors and mechanical components, 5-year warranty on fabrics and materials, and a 2-year installation workmanship guarantee. If a motor fails within the warranty period, we replace it at no cost including labor.' },
      { question: 'How often do motorized shade batteries need replacing?', answer: 'Rechargeable battery packs typically last 6-12 months between charges with normal use (2-3 operations per day). Recharging takes about 6 hours via USB cable. Solar-powered options in Arizona can run indefinitely. Hardwired systems never need battery attention.' },
    ],
  },
];

export function getAllFAQs(): FAQItem[] {
  return faqCategories.flatMap((cat) => cat.items);
}
