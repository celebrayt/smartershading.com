export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  product: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    location: 'Scottsdale, AZ',
    rating: 5,
    text: 'The motorized shades transformed our great room. We have 14-foot windows facing Camelback Mountain and could never reach the manual blinds. Now everything adjusts automatically based on the time of day. Our energy bill dropped noticeably the first month.',
    product: 'Motorized Window Shades',
    date: '2025-01-15',
  },
  {
    id: '2',
    name: 'David & Karen R.',
    location: 'Paradise Valley, AZ',
    rating: 5,
    text: 'We had SmarterShading outfit our entire new build — 42 windows with a mix of motorized rollers and cellular shades. The Lutron integration is flawless. The team was professional from consultation through installation, and the follow-up service has been exceptional.',
    product: 'Motorized Window Shades',
    date: '2025-02-08',
  },
  {
    id: '3',
    name: 'Jennifer L.',
    location: 'Phoenix, AZ',
    rating: 5,
    text: 'Our west-facing living room was unusable after 2pm in summer. The solar shades they recommended block the heat and glare but we can still see our mountain views. It is like getting a whole new room back. The installation crew was tidy and efficient.',
    product: 'Solar Shades',
    date: '2024-11-20',
  },
  {
    id: '4',
    name: 'Michael T.',
    location: 'Tempe, AZ',
    rating: 5,
    text: 'I was skeptical about the energy savings claims, but the double-cell cellular shades genuinely made a difference. Our summer electricity bill dropped by about $60/month. The shades look great too — much more refined than the big box store options we had before.',
    product: 'Cellular Shades',
    date: '2024-12-05',
  },
  {
    id: '5',
    name: 'Lisa & Tom H.',
    location: 'Chandler, AZ',
    rating: 5,
    text: 'The exterior patio shades were a game-changer for us. We can now use our back patio for dinner parties even in July. The motorized controls are so convenient — we just hit a button and the shades drop. No more bugs either!',
    product: 'Exterior & Patio Shades',
    date: '2025-01-28',
  },
  {
    id: '6',
    name: 'Amanda P.',
    location: 'Gilbert, AZ',
    rating: 5,
    text: 'I worked with an interior designer on our master bedroom renovation and she recommended SmarterShading for the Roman shades. The hobbled fold in the linen fabric is stunning. They matched the color perfectly to our wallpaper. True craftsmen.',
    product: 'Roman Shades',
    date: '2024-10-14',
  },
  {
    id: '7',
    name: 'Robert C.',
    location: 'Mesa, AZ',
    rating: 4,
    text: 'Great roller shades throughout our home. The blackout rollers in the bedrooms are perfect — total darkness even during Arizona summer mornings. The light-filtering ones in the living room give a nice soft glow. Good value for the quality.',
    product: 'Roller Shades',
    date: '2024-09-22',
  },
  {
    id: '8',
    name: 'Catherine W.',
    location: 'Scottsdale, AZ',
    rating: 5,
    text: 'Third time using SmarterShading — this time for our vacation home. Motorized cellular shades with the smartphone app so we can control them remotely. The install team drove up to Sedona and had everything done in a day. Highly recommend.',
    product: 'Cellular Shades',
    date: '2025-03-02',
  },
  {
    id: '9',
    name: 'James & Patricia D.',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'We found SmarterShading online and flew them out to our Hollywood Hills home. The motorized solar shades on our floor-to-ceiling windows are incredible. They integrated everything with our Lutron system seamlessly. Worth every penny.',
    product: 'Solar Shades',
    date: '2024-11-30',
  },
  {
    id: '10',
    name: 'Steven K.',
    location: 'Las Vegas, NV',
    rating: 5,
    text: 'Living in Las Vegas, sun control is everything. SmarterShading installed motorized solar shades in our penthouse and the difference is night and day. The Lutron integration works perfectly with our existing system. Professional from start to finish.',
    product: 'Motorized Window Shades',
    date: '2025-02-14',
  },
];
