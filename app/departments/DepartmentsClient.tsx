"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BookAppointmentModal from "@/components/BookAppointmentModal";
import type { Department } from "@/lib/departments";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface DepartmentsClientProps {
  departments: Department[];
}

export default function DepartmentsClient({ departments }: DepartmentsClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  const deptKeyMap: Record<number, keyof typeof t.depts> = {
    1: "orthodontics",
    2: "pedodontics",
    3: "implantology",
    4: "prosthodontics",
    5: "periodontics",
    6: "endodontics",
  };

  const getTranslatedDept = (dept: Department) => {
    const key = deptKeyMap[dept.id];
    if (key && t.depts[key]) {
      return {
        name: t.depts[key].title,
        description: t.depts[key].description,
      };
    }
    return {
      name: dept.name,
      description: dept.description,
    };
  };

  return (
    <>
      {/* Department cards link to their own service pages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => {
          const trans = getTranslatedDept(dept);
          return (
            <Link
              key={dept.id}
              href={`/departments/${dept.slug}`}
              className="cursor-pointer bg-white border border-gray-200 rounded-xl p-6 hover:border-primary/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Image
                    src={dept.iconSrc}
                    alt={dept.iconAlt}
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">{trans.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{trans.description}</p>
              </div>
              <div>
                <span className="inline-flex items-center h-9 rounded-md border border-gray-300 bg-white px-3 text-xs font-medium text-primary">
                  {t.departmentsPage.exploreServices} <ArrowRight className="ml-2 rtl:mr-2 rtl:ml-0 h-4 w-4" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white rounded-2xl mt-12">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold font-heading">{t.departmentsPage.transformTitle}</h2>
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              {t.departmentsPage.transformSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button onClick={() => setIsModalOpen(true)} size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                {t.nav.bookAppointment}
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/80 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold backdrop-blur-sm">
                  {t.nav.contact}      
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Book Appointment Modal */}
      <BookAppointmentModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
