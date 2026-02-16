import type { Metadata } from 'next';
import { Fraunces, Source_Sans_3 } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { buildOrganizationSchema } from '@/lib/schema';
import './globals.css';

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'SmarterShading | Premium Motorized Window Shades Arizona',
    template: '%s | SmarterShading',
  },
  description:
    'Premium motorized and automated window shades for every climate. Expert Lutron installation, smart home integration, and solutions designed for your home.',
  metadataBase: new URL('https://smartershading.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${sourceSans.variable} antialiased`}>
        <SchemaMarkup schema={buildOrganizationSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
