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

// Generate JSON-LD for all departments as MedicalProcedure schemas for AI search engines & Technical SEO
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
      <section className="relative h-[45vh] min-h-[350px] flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/DSC02182.webp"
            alt="Dental departments at Mazaya Dental Center"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 to-gray-950/40" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-heading">
              Comprehensive Dental Care
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Explore our complete range of dental services, each delivered by specialized experts using cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Cards Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <DepartmentsClient departments={departments} />
        </div>
      </section>

      {/* Static Full Service Listings — crawlable by search engines and AI */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 font-heading text-center text-gray-900">
            All Dental Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept) => (
              <div key={dept.id} className="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Image
                      src={dept.iconSrc}
                      alt={dept.iconAlt}
                      width={28}
                      height={28}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-gray-900">{dept.name}</h3>
                    <p className="text-gray-600 text-xs mt-0.5">{dept.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 pt-2 border-t border-gray-100">
                  {dept.services.map((service, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
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