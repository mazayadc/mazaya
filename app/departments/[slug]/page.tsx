import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Libre_Baskerville } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import { getServicePage, servicePages } from "@/lib/servicePages";
import ServicePageClient from "./ServicePageClient";

const serif = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServicePage(params.slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/departments/${service.slug}`,
    },
    openGraph: {
      title: `${service.metaTitle} | Mazaya Dental Center`,
      description: service.metaDescription,
      url: `https://mazayadc.com/departments/${service.slug}`,
      type: "website",
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServicePage(params.slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: service.en.heroTitle,
    description: service.metaDescription,
    url: `https://mazayadc.com/departments/${service.slug}`,
    about: {
      "@type": "MedicalProcedure",
      name: service.en.eyebrow,
      description: service.en.whatBody,
    },
    mainEntity: service.en.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <ServicePageClient service={service} serifClassName={serif.className} />
    </>
  );
}
