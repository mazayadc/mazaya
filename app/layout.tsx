import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://mazayadc.com'
      : 'http://localhost:3000'
  ),
  title: {
    default: 'Mazaya Dental Center | Digital Dental Care in Bahrain',
    template: '%s | Mazaya Dental Center',
  },
  description: 'Mazaya Dental Center in Isa Town, Bahrain — a fully digital dental practice offering One-Day Dentistry, crowns, bridges, implants, orthodontics, and comprehensive oral care. Open 7 days a week.',
  keywords: [
    'dental clinic Bahrain',
    'dentist Isa Town',
    'Mazaya Dental Center',
    'one-day dentistry',
    'dental implants Bahrain',
    'orthodontics Bahrain',
    'teeth whitening Bahrain',
    'root canal Bahrain',
    'pediatric dentist Bahrain',
    'dental tourism Bahrain',
    'CEREC crowns same day',
    'dental clinic open 7 days Bahrain',
  ],
  authors: [{ name: 'Mazaya Dental Center' }],
  creator: 'Mazaya Dental Center',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mazayadc.com',
    title: 'Mazaya Dental Center | Digital Dental Care in Bahrain',
    description: 'A fully digital dental practice in Isa Town, Bahrain offering One-Day Dentistry — crowns, bridges, and restorations in a single visit. Open 7 days a week.',
    siteName: 'Mazaya Dental Center',
    images: [
      {
        url: '/MAZAYA logo Transparent 01.png',
        width: 1200,
        height: 630,
        alt: 'Mazaya Dental Center',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mazaya Dental Center | Digital Dental Care in Bahrain',
    description: 'A fully digital dental practice in Isa Town, Bahrain offering One-Day Dentistry — crowns, bridges, and restorations in a single visit.',
    images: ['/MAZAYA logo Transparent 01.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const clinicJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Mazaya Dental Center",
  "alternateName": "Mazaya EDC",
  "url": "https://mazayadc.com",
  "logo": "https://mazayadc.com/MAZAYA logo Transparent 01.png",
  "image": "https://mazayadc.com/DSC02178.webp",
  "description": "Mazaya Dental Center is a fully digital dental practice in Isa Town, Bahrain offering One-Day Dentistry, dental implants, orthodontics, and comprehensive oral care across 6 specialized departments.",
  "telephone": ["+973 17777234", "+973 39224333"],
  "email": "info@mazayadc.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Flat No. 6, 7, 8, 9, 10, Building No. 515, Road 1332",
    "addressLocality": "Isa Town",
    "addressRegion": "Capital Governorate",
    "postalCode": "813",
    "addressCountry": "BH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.162644,
    "longitude": 50.559424
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "13:00",
      "closes": "21:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/mazaya.edc",
    "https://www.facebook.com/profile.php?id=61559196819721",
    "https://www.tiktok.com/@mazayabh",
    "https://snapchat.com/t/LHo1AOSN"
  ],
  "medicalSpecialty": [
    "Orthodontics",
    "Pediatric Dentistry",
    "Dental Implant Surgery",
    "Prosthodontics",
    "Periodontics",
    "Endodontics"
  ],
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "One-Day Dentistry (Same-Day Crowns & Bridges)",
      "description": "Get crowns, bridges, and restorations in a single visit using advanced digital CAD/CAM technology."
    },
    {
      "@type": "MedicalProcedure",
      "name": "Dental Implants",
      "description": "Single, multiple, or full-mouth dental implant placement including All-on-4 and All-on-6 solutions."
    },
    {
      "@type": "MedicalProcedure",
      "name": "Orthodontics & Invisalign",
      "description": "Teeth alignment using traditional braces, ceramic braces, and clear aligners."
    },
    {
      "@type": "MedicalProcedure",
      "name": "Root Canal Treatment",
      "description": "Expert endodontic treatments to save and preserve damaged or infected teeth."
    },
    {
      "@type": "MedicalProcedure",
      "name": "Pediatric Dentistry",
      "description": "Comprehensive dental care for children including fluoride treatments, sealants, and habit counseling."
    },
    {
      "@type": "MedicalProcedure",
      "name": "Periodontal Treatment",
      "description": "Diagnosis and treatment of gum diseases including deep cleaning, gum grafting, and laser treatments."
    }
  ],
  "priceRange": "$$",
  "currenciesAccepted": "BHD",
  "paymentAccepted": "Cash, Credit Card, Insurance",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 26.162644,
      "longitude": 50.559424
    },
    "geoRadius": "50000"
  },
  "hasMap": "https://maps.app.goo.gl/qjJcJVZZMY6Gxbgf6"
};

import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import MetaPixel from '@/components/MetaPixel';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MetaPixel />
        <LanguageProvider>
          <JsonLd data={clinicJsonLd} />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}