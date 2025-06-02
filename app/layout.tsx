import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

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
      <body className={inter.className + ' min-h-screen flex flex-col'}>
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
