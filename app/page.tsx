import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Mazaya Dental Center | Digital Dental Care in Bahrain",
  description:
    "Mazaya Dental Center in Isa Town, Bahrain — A fully digital dental practice offering One-Day Dentistry (crowns & bridges in 1 visit), implants, orthodontics, & pediatric dentistry. Open 7 days a week.",
  keywords: [
    "Mazaya Dental Center",
    "dental clinic Bahrain",
    "dentist Isa Town",
    "One-Day Dentistry Bahrain",
    "dental implants Bahrain",
    "orthodontics Bahrain",
    "teeth whitening Bahrain",
    "root canal Bahrain",
    "pediatric dentist Bahrain",
    "dental tourism Bahrain",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mazaya Dental Center | Digital Dental Care in Bahrain",
    description:
      "A fully digital dental practice in Isa Town, Bahrain offering One-Day Dentistry — crowns, bridges, and restorations in a single visit. Open 7 days a week.",
    url: "https://mazayadc.com",
    siteName: "Mazaya Dental Center",
    type: "website",
    images: [
      {
        url: "/MAZAYA logo Transparent 01.png",
        width: 1200,
        height: 630,
        alt: "Mazaya Dental Center Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mazaya Dental Center | Digital Dental Care in Bahrain",
    description:
      "A fully digital dental practice in Isa Town, Bahrain offering One-Day Dentistry — crowns, bridges, and restorations in a single visit.",
    images: ["/MAZAYA logo Transparent 01.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}