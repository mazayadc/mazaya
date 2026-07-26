import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Mazaya Dental Center | One-Day Dentistry in Bahrain",
  description:
    "Learn about Mazaya Dental Center — a fully digital dental practice in Isa Town, Bahrain. Pioneering dental tourism with world-renowned specialists, VIP lounge, and One-Day Dentistry. Open 7 days a week.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Mazaya Dental Center | One-Day Dentistry in Bahrain",
    description:
      "A fully digital dental practice in Isa Town, Bahrain. Pioneering dental tourism with international specialists, VIP amenities, and same-day restorations.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}