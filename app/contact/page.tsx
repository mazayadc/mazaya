import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { faqItems } from "@/lib/departments";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Mazaya Dental Center | Book Appointment in Isa Town, Bahrain",
  description:
    "Contact Mazaya Dental Center in Isa Town, Bahrain. Call +973 17777234 (landline) or +973 39224333 (mobile). Open 7 days a week, 9 AM – 11 PM. Email info@mazayadc.com.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Mazaya Dental Center | Book Appointment",
    description:
      "Get in touch with Mazaya Dental Center. Call, email, or visit us in Isa Town, Bahrain. Open 7 days a week.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <ContactClient />
    </>
  );
}