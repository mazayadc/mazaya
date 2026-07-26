"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, X } from "lucide-react";
import BookAppointmentModal from "@/components/BookAppointmentModal";
import type { Department } from "@/lib/departments";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface DepartmentsClientProps {
  departments: Department[];
}

export default function DepartmentsClient({ departments }: DepartmentsClientProps) {
  const [activeDept, setActiveDept] = useState<number | null>(null);
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

  const activeDepartment = departments.find(d => d.id === activeDept);
  const activeTranslated = activeDepartment ? getTranslatedDept(activeDepartment) : null;

  return (
    <>
      {/* Interactive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => {
          const trans = getTranslatedDept(dept);
          return (
            <div
              key={dept.id}
              className="cursor-pointer bg-white border border-gray-200 rounded-xl p-6 hover:border-primary/50 transition-colors flex flex-col justify-between"
              onClick={() => setActiveDept(dept.id)}
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
                <Button variant="outline" size="sm" className="border-gray-300 text-primary flex items-center">
                  {t.departmentsPage.exploreServices} <ArrowRight className="ml-2 rtl:mr-2 rtl:ml-0 h-4 w-4" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {activeDept && activeDepartment && activeTranslated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl w-full max-w-[95vw] md:max-w-3xl max-h-[90vh] overflow-y-auto shadow-xl border border-gray-200"
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Image
                      src={activeDepartment.iconSrc}
                      alt={activeDepartment.iconAlt}
                      width={28}
                      height={28}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <button
                    onClick={() => setActiveDept(null)}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {activeTranslated.name}
                </h2>
                <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                  {activeTranslated.description}
                </p>

                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <h3 className="text-base font-bold text-gray-900">{t.departmentsSection.title}</h3>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activeDepartment.services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-gray-50 text-sm border border-gray-100"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <p className="text-gray-700 leading-relaxed">{service}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <Button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-primary hover:bg-primary/90 text-white font-semibold"
                  >
                    {t.nav.bookAppointment}
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold">
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
