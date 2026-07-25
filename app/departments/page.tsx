import Image from "next/image";
import type { Metadata } from "next";
import { departments } from "@/lib/departments";
import JsonLd from "@/components/JsonLd";
import DepartmentsClient from "./DepartmentsClient";

export const metadata: Metadata = {
  title: "Dental Departments & Services",
  description:
    "Explore all dental specialties at Mazaya Dental Center in Bahrain — Orthodontics, Pedodontics, Implantology, Prosthodontics, Periodontics, and Endodontics. One-Day Dentistry available.",
  alternates: {
    canonical: "/departments",
  },
  openGraph: {
    title: "Dental Departments & Services | Mazaya Dental Center",
    description:
      "Explore 6 dental specialties at Mazaya Dental Center — Orthodontics, Implants, Root Canal, Children's Dentistry, Gum Care, and Prosthodontics in Isa Town, Bahrain.",
  },
};

// Generate JSON-LD for all departments as MedicalProcedure schemas
const departmentsJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Dental Departments & Services at Mazaya Dental Center",
  "description": "Comprehensive dental care across 6 specialized departments at Mazaya Dental Center, Isa Town, Bahrain.",
  "mainEntity": departments.map((dept) => ({
    "@type": "MedicalProcedure",
    "name": dept.name,
    "description": dept.description,
    "bodyLocation": "Mouth",
    "procedureType": "http://schema.org/NoninvasiveProcedure",
    "howPerformed": dept.services.join("; "),
  })),
};

export default function DepartmentsPage() {
  return (
    <>
      <JsonLd data={departmentsJsonLd} />

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/DSC02182.webp"
            alt="Dental departments at Mazaya Dental Center"
            fill
            priority
            className="object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
        </div>
        
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Dental Care
            </h1>
            <p className="text-lg text-gray-200">
              Explore our complete range of dental services, each delivered by specialized experts using cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Static Crawlable Department Content (visible to search engines & AI) */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          {/* Interactive client-side cards with modals */}
          <DepartmentsClient departments={departments} />
        </div>
      </section>

      {/* Static Full Service Listings — crawlable by search engines and AI */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-heading text-center text-primary">
            All Dental Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {departments.map((dept) => (
              <div key={dept.id} className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 shrink-0">
                    <div className="absolute inset-0 bg-primary/10 rounded-xl transform rotate-45" />
                    <Image
                      src={dept.iconSrc}
                      alt={dept.iconAlt}
                      width={40}
                      height={40}
                      className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">{dept.name}</h3>
                    <p className="text-muted-foreground text-sm">{dept.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 pl-16">
                  {dept.services.map((service, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}