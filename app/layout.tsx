import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { BackToTop } from '@/components/BackToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dr. Sarah Mitchell, MD | Family Medicine & Primary Care',
  description: 'Compassionate, comprehensive healthcare for your entire family. Board-certified family physician with 15+ years of experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
        <Toaster />
      </body>
    </html>
  );
}
