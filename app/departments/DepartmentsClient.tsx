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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((dept) => {
          const trans = getTranslatedDept(dept);
          return (
            <motion.div
              key={dept.id}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer"
              onClick={() => setActiveDept(dept.id)}
            >
              <Card className="h-full border-none hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="mb-4 text-primary">
                    <div className="relative w-12 h-12">
                      <div className="absolute inset-0 bg-primary/10 rounded-xl transform rotate-45" />
                      <Image
                        src={dept.iconSrc}
                        alt={dept.iconAlt}
                        width={40}
                        height={40}
                        className="w-8 h-8 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-heading">{trans.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{trans.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="text-primary hover:text-primary-foreground hover:bg-primary flex items-center">
                    {t.departmentsPage.exploreServices} <ArrowRight className="ml-2 rtl:mr-2 rtl:ml-0 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
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
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-[95vw] md:max-w-4xl max-h-[90vh] md:max-h-[80vh] overflow-y-auto shadow-2xl mx-2"
            >
              <div className="p-4 md:p-8">
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <div className="text-primary">
                    <div className="relative w-12 h-12">
                      <div className="absolute inset-0 bg-primary/10 rounded-xl transform rotate-45" />
                      <Image
                        src={activeDepartment.iconSrc}
                        alt={activeDepartment.iconAlt}
                        width={40}
                        height={40}
                        className="w-8 h-8 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveDept(null)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <X className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                  {activeTranslated.name}
                </h2>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                  {activeTranslated.description}
                </p>

                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-lg md:text-xl font-semibold">{t.departmentsSection.title}</h3>
                  <div className="grid grid-cols-1 gap-3 md:gap-4">
                    {activeDepartment.services.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-2 p-3 md:p-4 rounded-lg bg-gray-50 text-sm md:text-base"
                      >
                        <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                        <p className="text-gray-700">{service}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 md:mt-8 flex justify-end">
                  <Button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-primary hover:bg-primary/90 text-sm md:text-base"
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
      <section className="py-24 bg-primary text-white mt-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">{t.departmentsPage.transformTitle}</h2>
            <p className="text-xl mb-8 text-white/90">
              {t.departmentsPage.transformSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setIsModalOpen(true)} size="lg" className="bg-white text-primary hover:bg-white/90">
                {t.nav.bookAppointment}
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
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
