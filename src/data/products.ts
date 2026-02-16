export interface Product {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  heroDescription: string;
  priceRange: string;
  image: string;
  features: string[];
  benefits: { title: string; description: string }[];
  useCases: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const products: Product[] = [
  {
    slug: 'motorized-window-shades',
    name: 'Motorized Window Shades',
    shortName: 'Motorized',
    tagline: 'Powered by Lutron — The Gold Standard',
    description: 'Transform your home with Lutron motorized window shades — the most reliable, whisper-quiet, and beautifully engineered automated shading systems available. Featuring Triathlon, Sivoia, and Palladiom product lines.',
    heroDescription: 'As an authorized Lutron dealer, we exclusively install the world\'s finest motorized shading systems. From the battery-powered Triathlon with industry-leading 3-5 year battery life, to the hardwired precision of Sivoia QS, to the hand-finished luxury of Palladiom — every shade integrates seamlessly with Lutron\'s ecosystem including Caseta, RadioRA, and HomeWorks.',
    priceRange: '$400 - $2,500 per window',
    image: '/images/products/motorized-shades.jpg',
    features: [
      'Lutron Triathlon: battery-powered with 3-5 year battery life',
      'Lutron Sivoia QS: hardwired precision with near-silent operation (<44 dBA)',
      'Lutron Palladiom: hand-finished brackets in solid aluminum & brass',
      'Voice control via Alexa, Google Home & Apple HomeKit',
      'Lutron Caseta, RadioRA 3 & HomeWorks QSX integration',
      'Natural Light Optimization — sun-tracking automation',
      'Shades up to 12\' x 12\' with Triathlon WIDR roller tube',
      'Pico remote, wall-mounted controls & Lutron app',
    ],
    benefits: [
      { title: 'Energy Savings', description: 'Lutron\'s Natural Light Optimization synchronizes shade movement with the sun to mitigate glare and reduce thermal heat gain — cutting Arizona cooling costs by up to 30%.' },
      { title: 'UV Protection', description: 'Protect your furniture, flooring, and artwork from Arizona\'s extreme UV exposure with automated shading that adjusts based on sun position throughout the day.' },
      { title: 'Whisper-Quiet Operation', description: 'Lutron motors are engineered to a fraction of a decibel. Sivoia QS operates at less than 44 dBA — you\'ll barely notice them moving. Shade movement is synchronized over a hundred times per second.' },
      { title: 'Unmatched Reliability', description: 'Lutron has over 60 years of engineering excellence. Their Clear Connect RF technology provides rock-solid wireless communication with zero interference — no WiFi dependency.' },
    ],
    useCases: [
      { title: 'Whole-Home Automation', description: 'Lutron HomeWorks QSX creates scenes that adjust every shade in your home with a single command. "Good morning" raises the blinds, "Movie time" darkens the media room — lights and shades together.' },
      { title: 'Bedroom Blackout', description: 'Program blackout shades to close at bedtime and open gradually with sunrise. Lutron\'s precision motor control allows smooth, quiet operation that won\'t wake light sleepers.' },
      { title: 'Media Rooms', description: 'Eliminate glare instantly with a single button press on your Lutron Pico remote. Integrate with your home theater system for automatic dimming of lights and shades together.' },
      { title: 'Skylights & High Windows', description: 'Sivoia QS tensioned shades are engineered for skylights and angled installations. Available in bottom-up, skylight, and angled configurations with precision cable-guided tension systems.' },
    ],
    faqs: [
      { question: 'How much do Lutron motorized window shades cost?', answer: 'Lutron motorized window shades typically range from $400 to $2,500 per window depending on size, fabric choice, and product line. Triathlon (battery-powered) starts lower and is ideal for retrofits. Sivoia QS (hardwired) is mid-range and best for new construction. Palladiom is the premium tier with hand-finished solid aluminum and brass brackets. We provide exact pricing during your free in-home consultation.' },
      { question: 'What is the difference between Triathlon, Sivoia, and Palladiom?', answer: 'Triathlon is Lutron\'s battery-powered system with an industry-leading 3-5 year battery life using standard D-cell batteries — perfect for retrofits with no wiring needed. Sivoia QS is hardwired with the most versatile product range including roller, honeycomb, Roman, drapery, and tension shades. Palladiom is Lutron\'s flagship luxury line with brackets milled from solid aluminum or brass, carbon fiber tubes, and hand-finished details — engineered to be as beautiful as they are functional.' },
      { question: 'Do Lutron shades work with Alexa and Google Home?', answer: 'Yes! Lutron shades integrate with Amazon Alexa, Google Home, Apple HomeKit, and Sonos. The integration runs through Lutron\'s bridge or processor (depending on your system tier), providing reliable control without direct WiFi dependency. Lutron\'s Clear Connect RF technology is widely regarded as the most reliable smart home protocol available.' },
      { question: 'How long do Lutron Triathlon batteries last?', answer: 'Lutron Triathlon batteries last an industry-leading 3-5 years using standard D-cell alkaline batteries. Battery Boost technology can extend life up to 80%, reaching up to 6 years. The innovative headrail tips forward to reveal the battery tray, making replacement easy without removing the shade.' },
      { question: 'Are Lutron motorized shades quiet?', answer: 'Extremely quiet. Sivoia QS motors operate at less than 44 dBA at 3 feet — quieter than a library. Palladiom shades are measured to a fraction of a decibel and synchronized over a hundred times per second for perfectly smooth, near-silent operation.' },
    ],
    metaTitle: 'Lutron Motorized Window Shades Arizona',
    metaDescription: 'Authorized Lutron dealer. Triathlon, Sivoia & Palladiom motorized shades with smart home integration. Expert installation in Phoenix, Scottsdale & Arizona.',
  },
  {
    slug: 'roller-shades',
    name: 'Roller Shades',
    shortName: 'Roller',
    tagline: 'Clean Lines, Lutron Precision',
    description: 'The most popular window shade in Arizona — Lutron roller shades offer a sleek, modern look with versatile fabric options from sheer to blackout, available in every Lutron motorization tier.',
    heroDescription: 'Arizona\'s most popular shade style combines sleek modern aesthetics with Lutron\'s legendary precision. Choose from hundreds of fabrics in light-filtering, solar, and blackout options — available across Triathlon (battery), Sivoia QS (hardwired), and Palladiom (luxury) product lines.',
    priceRange: '$150 - $800 per window',
    image: '/images/products/roller-shades.jpg',
    features: [
      'Light-filtering, solar & blackout fabric options',
      'Hundreds of colors, patterns & textures',
      'Available in all Lutron motorization tiers',
      'Sivoia QS Roller 20: ultra-slim 1.25" diameter profile',
      'Triathlon WIDR: covers windows up to 12\' x 12\'',
      'Architectural fascia or exposed-roll mounting',
      'Easy-clean fabrics ideal for dusty desert climates',
      'Lutron Pico remote & app control',
    ],
    benefits: [
      { title: 'Modern Aesthetic', description: 'Clean, minimal lines that complement contemporary Arizona architecture. Palladiom\'s exposed roller design with solid aluminum brackets makes the shade itself an architectural feature.' },
      { title: 'Versatile Light Control', description: 'From gentle light filtering to 100% opaque blackout — Lutron offers sheer, dim-out, and blackout fabrics to precisely control light and privacy in every room.' },
      { title: 'Low Maintenance', description: 'Smooth fabrics resist dust buildup and are easy to wipe clean — essential in Arizona\'s dusty desert climate. Lutron provides cleaning and maintenance guidelines for every fabric.' },
      { title: 'Scalable Investment', description: 'Start with manual roller shades and upgrade to Lutron motorization later, or choose motorized from the start. Every tier uses the same premium fabrics.' },
    ],
    useCases: [
      { title: 'Living Areas', description: 'Light-filtering Lutron rollers maintain your view while softening Arizona\'s harsh glare and reducing heat gain.' },
      { title: 'Bedrooms', description: 'Blackout roller shades create total darkness for better sleep. Lutron\'s 100% opaque blackout fabrics eliminate all daylight — even during Arizona\'s long summer mornings.' },
      { title: 'Home Offices', description: 'Reduce screen glare while maintaining natural light with solar-filtering roller fabrics. Schedule shades to adjust automatically throughout the workday via the Lutron app.' },
      { title: 'Kitchens & Bathrooms', description: 'Moisture-resistant fabrics in compact roller designs are perfect for wet areas. The Sivoia QS Roller 20\'s ultra-slim 1.25" profile fits inside most window frames.' },
    ],
    faqs: [
      { question: 'What is the difference between roller shades and blinds?', answer: 'Roller shades use a single piece of fabric that rolls around a tube, creating a clean, uncluttered look. Blinds have individual slats that tilt to control light. Roller shades offer a more modern aesthetic and are easier to clean, making them the preferred choice for contemporary Arizona homes.' },
      { question: 'Can roller shades be motorized with Lutron?', answer: 'Absolutely! Lutron offers roller shades across all three motorization tiers: Triathlon (battery-powered, 3-5 year battery life, no wiring needed), Sivoia QS (hardwired, most versatile), and Palladiom (luxury, hand-finished brackets). We help you choose the right tier during your consultation.' },
      { question: 'How do I choose between light-filtering and blackout roller shades?', answer: 'Light-filtering shades softly diffuse sunlight while maintaining natural brightness — ideal for living rooms and kitchens. Blackout shades are 100% opaque and eliminate all daylight — perfect for bedrooms and media rooms. Many Arizona homeowners use a mix throughout their home based on each room\'s needs.' },
    ],
    metaTitle: 'Lutron Roller Shades Phoenix & Arizona',
    metaDescription: 'Premium Lutron roller shades in Phoenix & Arizona. Blackout, light-filtering & solar fabrics. Triathlon, Sivoia & Palladiom options. Free consultation.',
  },
  {
    slug: 'cellular-shades',
    name: 'Cellular Shades',
    shortName: 'Cellular',
    tagline: 'Energy Efficiency Meets Lutron Engineering',
    description: 'Lutron honeycomb cellular shades trap air in distinct pockets, creating a powerful insulating barrier — reducing energy costs by up to 40%. Available in the Triathlon battery-powered system.',
    heroDescription: 'Engineered for energy efficiency without compromising on style. Lutron Triathlon honeycomb shades feature insulating cell construction that reduces heat gain by up to 60% — a game-changer for Arizona homes. All standard honeycomb fabrics include a white reflective backing to keep your space cool.',
    priceRange: '$200 - $1,200 per window',
    image: '/images/products/cellular-shades.jpg',
    features: [
      'Single-cell & double-cell insulating construction',
      'White reflective backing on all standard fabrics',
      'Aluminum lining option for maximum energy savings',
      'Lutron Triathlon battery-powered motorization',
      'Industry-leading 3-5 year battery life',
      'Precision fit reduces light creep from top of shade',
      'Larger cell size for an updated modern look',
      'Lutron Clear Connect RF wireless control',
    ],
    benefits: [
      { title: 'Energy Savings', description: 'Lutron honeycomb shades can reduce cooling costs by up to 40% in Arizona homes. Double-cell construction with aluminum lining provides maximum energy savings on your most sun-exposed windows.' },
      { title: 'Temperature Comfort', description: 'All standard Lutron honeycomb fabrics include a white reflective backing that acts as a reflector, keeping your space cool and comfortable even on south and west-facing windows.' },
      { title: 'Sound Dampening', description: 'The honeycomb structure absorbs sound, creating a quieter, more peaceful home environment — noticeable in open floor plan Arizona homes with hard surfaces.' },
      { title: 'Precision Fit', description: 'Lutron Triathlon honeycomb shades are designed with a precision fit to reduce light creep from the top, providing superior light control compared to off-the-shelf alternatives.' },
    ],
    useCases: [
      { title: 'South & West-Facing Windows', description: 'These windows bear the brunt of Arizona\'s sun. Double-cell Lutron honeycombs with aluminum lining provide maximum insulation where you need it most.' },
      { title: 'Older Homes', description: 'Retrofit single-pane windows with Lutron Triathlon cellular shades — no wiring required, batteries last 3-5 years, and energy performance improves dramatically.' },
      { title: 'Bedrooms', description: 'Blackout cellulars provide darkness for sleep while the insulation keeps the room cool. Lutron\'s precision fit minimizes light gaps at the edges.' },
      { title: 'Large Window Walls', description: 'Lutron Triathlon WIDR accommodates large shades up to 12\' x 12\', bringing motorized honeycomb shading to Arizona\'s expansive glass walls.' },
    ],
    faqs: [
      { question: 'Are cellular shades worth the investment in Arizona?', answer: 'Cellular shades are one of the best investments for Arizona homeowners. With cooling costs making up 50-70% of summer energy bills, Lutron honeycomb shades that reduce solar heat gain by up to 60% can pay for themselves within 2-3 years. The aluminum lining option provides even greater savings for the most sun-exposed windows.' },
      { question: 'What is the difference between single-cell and double-cell?', answer: 'Single-cell shades have one layer of honeycomb pockets and provide good insulation at a lower price point. Double-cell shades have two layers, nearly doubling the insulating value. Lutron also offers an aluminum lining option for maximum energy savings. We recommend double-cell with aluminum for south and west-facing windows and single-cell for north and east-facing windows.' },
      { question: 'Can Lutron cellular shades be motorized?', answer: 'Yes! Lutron Triathlon honeycomb shades are battery-powered with an industry-leading 3-5 year battery life using standard D-cell batteries. They can be programmed to close automatically during peak heat hours via the Lutron app, Pico remote, or integrated with Caseta or RadioRA systems.' },
    ],
    metaTitle: 'Lutron Cellular Shades Arizona - Energy Efficient',
    metaDescription: 'Energy-efficient Lutron honeycomb shades for Arizona homes. Reduce cooling costs up to 40%. Triathlon battery-powered motorization. Free consultation in Phoenix.',
  },
  {
    slug: 'solar-shades',
    name: 'Solar Shades',
    shortName: 'Solar',
    tagline: 'Block the Glare, Keep the View',
    description: 'Engineered specifically for sun control, Lutron solar shades reduce glare and UV exposure while preserving your outdoor views — the perfect solution for Arizona\'s intense sunlight.',
    heroDescription: 'Designed for Arizona\'s relentless sun, Lutron solar shades give you precise control over glare and heat without sacrificing your mountain, desert, or city views. Available across Triathlon (battery), Sivoia QS (hardwired), and Palladiom (luxury) — with fabrics curated to balance indoor comfort and outdoor connection.',
    priceRange: '$200 - $1,000 per window',
    image: '/images/products/solar-shades.jpg',
    features: [
      'Openness factors from 1% to 14%',
      'Blocks up to 99% of UV rays',
      'Maintains outward visibility',
      'Reduces glare by up to 95%',
      'Available in Triathlon, Sivoia QS & Palladiom',
      'Curated fabric selections for indoor-outdoor connection',
      'Lutron Natural Light Optimization',
      'Commercial-grade durability',
    ],
    benefits: [
      { title: 'View Preservation', description: 'Unlike traditional shades, Lutron solar shades maintain your view of the outdoors. See your Camelback Mountain views clearly while blocking harsh sun — fabrics are curated to balance indoor comfort and outdoor connection.' },
      { title: 'Glare Reduction', description: 'Reduce screen glare by up to 95% without darkening the room — perfect for offices and living areas. Lutron\'s Natural Light Optimization tracks the sun and adjusts automatically.' },
      { title: 'UV Protection', description: 'Block up to 99% of damaging UV rays that fade furniture, artwork, and flooring in Arizona\'s intense sun. Automated operation ensures protection even when you forget.' },
      { title: 'Natural Light', description: 'Enjoy abundant natural light without the heat and glare. Lutron solar shades let light in while filtering the harshness, maintaining the bright, open feel Arizona homes are designed for.' },
    ],
    useCases: [
      { title: 'Living Rooms with Views', description: 'Enjoy Sonoran Desert panoramas without squinting. Lutron solar shades preserve views while cutting glare and heat. Palladiom\'s exposed roller design makes the shade itself beautiful.' },
      { title: 'Home Offices', description: 'Eliminate monitor glare and reduce eye strain. Schedule shades via the Lutron app to adjust throughout the workday as the sun moves.' },
      { title: 'Sunrooms & Enclosed Patios', description: 'Make glass-heavy rooms usable year-round. Sivoia QS tensioned solar shades are available in skylight and angled configurations for challenging installations.' },
      { title: 'Commercial Spaces', description: 'Professional-grade Lutron solar shades for offices, restaurants, and retail spaces. Sivoia QS supports commercial-scale installations with centralized control.' },
    ],
    faqs: [
      { question: 'What openness factor should I choose?', answer: 'For Arizona: 1-3% for maximum heat and glare control (west-facing), 5% for balance of view and protection (most popular), 10-14% for maximum view with moderate filtering (north-facing or shaded). Lutron\'s curated fabric selections make choosing easier — we help you select during consultation.' },
      { question: 'Can you see through solar shades at night?', answer: 'During the day, solar shades provide good privacy. At night with interior lights on, some visibility from outside is possible. For nighttime privacy, we recommend a dual-shade configuration with a Lutron blackout roller behind the solar shade — both controlled independently from a single Pico remote.' },
      { question: 'How much heat do solar shades block?', answer: 'Depending on fabric and openness factor, Lutron solar shades reduce solar heat gain by 50-80%. When paired with Lutron\'s Natural Light Optimization, shades automatically track the sun and adjust position throughout the day for maximum efficiency without any manual intervention.' },
    ],
    metaTitle: 'Lutron Solar Shades Arizona - UV & Glare Protection',
    metaDescription: 'Premium Lutron solar shades for Arizona homes. Block 99% UV while keeping your views. Triathlon, Sivoia & Palladiom options. Free consultation in Phoenix.',
  },
  {
    slug: 'roman-shades',
    name: 'Roman Shades',
    shortName: 'Roman',
    tagline: 'Timeless Luxury, Lutron Precision',
    description: 'The ultimate design statement in window treatments — Lutron Sivoia QS Roman shades bring luxurious fabric folds and architectural elegance to any room with whisper-quiet motorized operation.',
    heroDescription: 'For homeowners and designers who demand beauty alongside function, our Lutron Sivoia QS Roman shades deliver unmatched elegance. Choose from flat, hobbled, or relaxed fold styles in hundreds of premium fabrics — all powered by Lutron\'s near-silent hardwired motors.',
    priceRange: '$350 - $1,800 per window',
    image: '/images/products/roman-shades.jpg',
    features: [
      'Flat, hobbled & relaxed fold styles',
      'Hundreds of premium fabrics',
      'Lutron Sivoia QS hardwired motorization',
      'Near-silent operation at less than 44 dBA',
      'Blackout & light-filtering linings',
      'Custom pattern matching',
      'Lutron Caseta, RadioRA & HomeWorks integration',
      'Pico remote & Lutron app control',
    ],
    benefits: [
      { title: 'Design Statement', description: 'Roman shades add soft texture, depth, and architectural interest that flat shades cannot match. Paired with Lutron\'s Sivoia QS, they rise and lower with precision — a designer\'s favorite for good reason.' },
      { title: 'Fabric Versatility', description: 'From crisp linens to rich velvets, the fabric options are virtually limitless. Match any interior design style from desert modern to traditional Southwest.' },
      { title: 'Light Control', description: 'Available with blackout, thermal, or light-filtering linings to precisely control light entering your space. Lutron\'s precision motor stops at any position along the full travel.' },
      { title: 'Smart Integration', description: 'Lutron Sivoia QS Roman shades integrate with your complete Lutron ecosystem — control lights and shades together in scenes for the perfect ambiance at every time of day.' },
    ],
    useCases: [
      { title: 'Formal Living & Dining', description: 'Flat-fold Romans bring refined elegance to formal spaces, complementing high-end furnishings and architectural details. Lutron\'s silent motors mean no disruption during dinner parties.' },
      { title: 'Master Suites', description: 'Hobbled Romans with blackout lining create a luxurious, cocoon-like bedroom retreat. Program them through your Lutron system to close at bedtime and open with sunrise.' },
      { title: 'Designer Projects', description: 'Architects and interior designers choose Lutron Roman shades when the window treatment is part of the design vision. Full CAD files and Revit models available for specification.' },
      { title: 'Kitchen & Breakfast Nooks', description: 'Relaxed-fold Romans add warmth and charm to casual dining areas and kitchen windows. Motorized operation keeps hands-free when cooking.' },
    ],
    faqs: [
      { question: 'What are the different Roman shade fold styles?', answer: 'Three main fold styles: Flat fold creates crisp horizontal pleats — the most modern option. Hobbled (teardrop) fold maintains soft cascading loops — the most luxurious look. Relaxed fold has a gentle curve at the bottom — perfect for a laid-back desert aesthetic.' },
      { question: 'Are Lutron Roman shades motorized?', answer: 'Yes! Our Lutron Sivoia QS Roman shades feature whisper-quiet hardwired motors operating at less than 44 dBA. They integrate with Caseta, RadioRA, and HomeWorks systems for full smart home control including voice commands via Alexa, Google Home, and Siri.' },
      { question: 'Are Roman shades a good choice for Arizona?', answer: 'Roman shades work beautifully in Arizona homes with the right lining. We recommend thermal or blackout linings for south and west-facing windows. The fabric adds an extra layer of insulation, and Lutron\'s automated scheduling ensures they close before the afternoon heat hits.' },
    ],
    metaTitle: 'Lutron Roman Shades Phoenix & Arizona',
    metaDescription: 'Luxury Lutron Sivoia QS Roman shades in Phoenix & Arizona. Flat, hobbled & relaxed styles. Whisper-quiet motorization. Free designer consultation.',
  },
  {
    slug: 'exterior-patio-shades',
    name: 'Exterior & Patio Shades',
    shortName: 'Exterior',
    tagline: 'Extend Your Outdoor Living',
    description: 'Transform your patio, pergola, or outdoor living space into a comfortable retreat year-round. Our exterior shades block heat, bugs, and wind while maintaining your view.',
    heroDescription: 'Arizona\'s outdoor living season is year-round — and so are our exterior shades. From motorized patio drop shades to cable-guided wind-resistant systems, we help you enjoy your outdoor spaces in comfort. Integrated with your Lutron whole-home system for seamless indoor-outdoor control.',
    priceRange: '$500 - $3,000 per opening',
    image: '/images/products/exterior-shades.jpg',
    features: [
      'Motorized & manual operation',
      'Cable-guided & sealed-track systems',
      'Wind resistance up to 60+ mph',
      'UV-resistant outdoor fabrics',
      'Bug & insect protection',
      'Heat reduction up to 70%',
      'Lutron smart home integration available',
      'Custom sizing for any opening',
    ],
    benefits: [
      { title: 'Extended Living Space', description: 'Turn your patio into a usable room. Block the sun and bugs to enjoy outdoor living from April through October and beyond.' },
      { title: 'Heat Reduction', description: 'Reduce patio temperatures by up to 20\u00B0F with exterior shading that blocks solar heat before it reaches your glass and interior.' },
      { title: 'Bug Protection', description: 'Sealed-track exterior shades create a bug barrier that lets you enjoy evenings outdoors without insects — essential during Arizona\'s warm months.' },
      { title: 'Whole-Home Integration', description: 'Integrate exterior shades with your Lutron indoor system for unified control. One Pico remote or app controls both your interior and exterior shades.' },
    ],
    useCases: [
      { title: 'Covered Patios', description: 'The most popular application in Arizona — drop shades on covered patios that block western sun while maintaining airflow and views.' },
      { title: 'Pergolas & Ramadas', description: 'Add shade to open-top structures with motorized retractable shades that extend your outdoor comfort zone.' },
      { title: 'Outdoor Kitchens', description: 'Protect your outdoor kitchen and dining area from sun, wind, and bugs for year-round entertaining.' },
      { title: 'Pool Areas', description: 'Create shaded poolside lounging areas that reduce sun exposure without permanent structures.' },
    ],
    faqs: [
      { question: 'How do exterior shades hold up in Arizona weather?', answer: 'Our exterior shades are built for Arizona\'s harsh conditions — UV-resistant solution-dyed fabrics, powder-coated aluminum components, and cable-guide or sealed-track systems rated for 60+ mph winds. Engineered for monsoon season and 115\u00B0F summers.' },
      { question: 'Can exterior patio shades be motorized?', answer: 'Yes, and motorization is our most popular option. Motorized patio shades can be controlled via remote, smartphone, or integrated with your Lutron home system. Many homeowners set them to deploy automatically based on sun position or temperature.' },
      { question: 'Do exterior shades provide bug protection?', answer: 'Sealed-track exterior shades create an effective barrier against mosquitoes and flies when fully deployed. The tracks on each side eliminate gaps. This is especially valuable during Arizona evenings when you want to enjoy the outdoors.' },
    ],
    metaTitle: 'Exterior & Patio Shades Arizona',
    metaDescription: 'Motorized exterior and patio shades for Arizona outdoor living. Wind-resistant, bug-blocking, heat-reducing. Lutron integration available. Free consultation.',
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
