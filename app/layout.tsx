import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lbs to Kg',
  description:
    'Free online unit converter that allows you to convert pounds (lbs) to kilograms (kg) and vice versa. Simple, fast, and accurate conversion tool.',
  keywords:
    'unit converter, lbs to kg, pound to kilogram, weight converter, mass converter, unit conversion tool',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />

        {/* Google Search Console Verification - REPLACE 'YOUR_VERIFICATION_CODE' */}
        <meta
          name="google-site-verification"
          content="YOUR_VERIFICATION_CODE"
        />
        {/* Google Search Console Verification 
        <meta
          name="google-site-verification"
          content="YOUR_VERIFICATION_CODE"
        />*/}

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DJ2TMGXG99"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DJ2TMGXG99');
          `}
        </Script>
      </head>
      <body className={inter.className + ' min-h-screen flex flex-col'}>
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
