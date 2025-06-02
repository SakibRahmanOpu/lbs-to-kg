import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lbs to Kg ',
  description:
    'Convert pounds (lbs) to kilograms (kg) and vice versa instantly with our free, accurate, and easy-to-use online unit converter. Perfect for students, professionals, and everyday use.',
  keywords:
    'lbs to kg, pounds to kilograms, unit converter, kg to lbs, weight conversion, mass converter, online converter, free tool',
  openGraph: {
    title: 'Lbs to Kg',
    description:
      'Convert pounds (lbs) to kilograms (kg) and vice versa instantly with our free, accurate, and easy-to-use online unit converter.',
    url: 'https://lbstokg.org/',
    siteName: 'lbstokg.org',
    images: [
      {
        url: 'https://lbstokg.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pounds to Kilograms Converter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lbs to Kg ',
    description:
      'Convert pounds (lbs) to kilograms (kg) and vice versa instantly with our free, accurate, and easy-to-use online unit converter.',
    images: ['https://lbstokg.org/og-image.png'],
    site: '@lbstokg',
  },
  alternates: {
    canonical: 'https://lbstokg.org/',
  },
};
