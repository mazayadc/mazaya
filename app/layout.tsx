import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://your-domain.com'
      : 'http://localhost:3000'
  ),
  title: {
    default: 'DentalCare Clinic | Modern Dental Services',
    template: '%s | DentalCare Clinic',
  },
  description: 'Professional dental care services with state-of-the-art technology and a patient-centered approach.',
  keywords: ['dental clinic', 'dentist', 'dental care', 'teeth whitening', 'dental implants', 'orthodontics'],
  authors: [{ name: 'DentalCare Clinic' }],
  creator: 'DentalCare Clinic',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dentalcare-clinic.com',
    title: 'DentalCare Clinic | Modern Dental Services',
    description: 'Professional dental care services with state-of-the-art technology and a patient-centered approach.',
    siteName: 'DentalCare Clinic',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'DentalCare Clinic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DentalCare Clinic | Modern Dental Services',
    description: 'Professional dental care services with state-of-the-art technology and a patient-centered approach.',
    images: ['https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}