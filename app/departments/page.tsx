"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Phone, CalendarDays, X } from "lucide-react";
import BookAppointmentModal from "@/components/BookAppointmentModal";

// Define departments
const departments = [
  {
    id: 1,
    name: "Orthodontics",
    description: "Specialized care for teeth alignment and bite correction using braces and aligners.",
    icon: (
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 bg-primary/10 rounded-xl transform rotate-45" />
        <Image
          src="/ortho.png"
          alt="Orthodontics Icon"
          width={40}
          height={40}
          className="w-8 h-8 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    ),
    services: [
      "Diagnosis and treatment of misaligned teeth and jaw",
      "Traditional metal braces, ceramic braces, and lingual braces",
      "Clear aligners (e.g., Invisalign)",
      "Retainers (fixed and removable)",
      "Space maintainers for children",
      "Jaw growth modification (for children & teens)",
      "Surgical orthodontics for severe misalignment"
    ]
  },
  {
    id: 2,
    name: "Pedodontics (Children's Dentistry)",
    description: "Comprehensive dental care for children, ensuring healthy smiles from an early age.",
    icon: (
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 bg-primary/10 rounded-xl transform rotate-45" />
        <Image
          src="/pedia.png"
          alt="Pedodontics Icon"
          width={40}
          height={40}
          className="w-8 h-8 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    ),
    services: [
      "Dental checkups for infants and children",
      "Fluoride treatments to prevent cavities",
      "Dental sealants for cavity protection",
      "Pulpotomy and pulpectomy (root canal for kids)",
      "Space maintainers for early tooth loss",
      "Treatment of dental trauma in children",
      "Habit counseling (thumb-sucking, pacifier use)",
    ]
  },
  {
    id: 3,
    name: "Implantology (Dental Implants & Restoration)",
    description: "Advanced tooth replacement solutions with durable and natural-looking dental implants.",
    icon: (
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 bg-primary/10 rounded-xl transform rotate-45" />
        <Image
          src="/implant.png"
          alt="Implantology Icon"
          width={40}
          height={40}
          className="w-8 h-8 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    ),
    services: [
      "Dental implant placement (single, multiple, or full-mouth)",
      "Bone grafting for implant support",
      "Sinus lift surgery for upper jaw implants",
      "All-on-4 or All-on-6 implant-supported dentures",
      "Implant maintenance and repair",
      "Soft tissue grafting around implants",
    ]
  },
  {
    id: 4,
    name: "Prosthodontics (Replacement of Missing Teeth)",
    description: "Restorative solutions including crowns, bridges, and dentures for complete oral rehabilitation.",
    icon: (
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 bg-primary/10 rounded-xl transform rotate-45" />
        <Image
          src="/clean.png"
          alt="Prosthodontics Icon"
          width={40}
          height={40}
          className="w-8 h-8 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    ),
    services: [
      "Crowns, bridges, and veneers",
      "Complete and partial dentures",
      "Full-mouth rehabilitation",
      "Smile makeover with cosmetic restorations",
      "TMJ (jaw joint) treatment",
      "Digital smile design (DSD)",
    ]
  },
  {
    id: 5,
    name: "Periodontics (Gum & Bone Health)",
    description: "Expert care for gum health and treatment of periodontal diseases to maintain strong foundations.",
    icon: (
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 bg-primary/10 rounded-xl transform rotate-45" />
        <Image
          src="/periodo.png"
          alt="Periodontics Icon"
          width={40}
          height={40}
          className="w-8 h-8 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    ),
    services: [
      "Diagnosis and treatment of gum diseases (gingivitis, periodontitis)",
      "Scaling and root planing (deep cleaning)",
      "Gum grafting for receding gums",
      "Bone grafting for jawbone preservation",
      "Periodontal surgery for advanced gum disease",
      "Laser gum treatments",
    ]
  },
  {
    id: 6,
    name: "Endodontics (Root Canal & Tooth Preservation)",
    description: "Specialized root canal treatments to save damaged teeth and relieve dental pain.",
    icon: (
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 bg-primary/10 rounded-xl transform rotate-45" />
        <Image
          src="/endo.png"
          alt="Endodontics Icon"
          width={40}
          height={40}
          className="w-8 h-8 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    ),
    services: [
      "Root canal treatment (RCT)",
      "Apicoectomy (root-end surgery)",
      "Internal bleaching for discolored teeth",
      "Management of cracked teeth",
      "Treatment of dental trauma and abscesses",
      "Re-treatment of failed root canals",
    ]
  },
];

export default function DepartmentsPage() {
  const [activeDept, setActiveDept] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/DSC02182.JPG"
            alt="Dental departments"
            fill
            priority
            className="object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
        </div>
        
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Dental Care
            </h1>
            <p className="text-lg text-gray-200">
              Explore our complete range of dental services, each delivered by specialized experts using cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <motion.div
                key={dept.id}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer"
                onClick={() => setActiveDept(dept.id)}
              >
                <Card className="h-full border-none hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="mb-4 text-primary">{dept.icon}</div>
                    <CardTitle className="text-xl font-heading">{dept.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{dept.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="text-primary hover:text-primary-foreground hover:bg-primary flex items-center">
                      Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      <AnimatePresence>
        {activeDept && (
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
                    {departments.find(d => d.id === activeDept)?.icon}
                  </div>
                  <button
                    onClick={() => setActiveDept(null)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <X className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                  {departments.find(d => d.id === activeDept)?.name}
                </h2>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                  {departments.find(d => d.id === activeDept)?.description}
                </p>

                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-lg md:text-xl font-semibold">Our Services</h3>
                  <div className="grid grid-cols-1 gap极3 md:gap-4">
                    {departments
                      .find(d => d.id === activeDept)
                      ?.services.map((service, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-2 p-3 md:p-4 rounded-lg bg-gray-50 text-sm md:text-base"
                        >
                          <div className="h-2 w-2 rounded-full bg-primary mt-2" />
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
                    Book Appointment
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Ready to Transform Your Smile?</h2>
            <p className="text-xl mb-8 text-white/90">
              Schedule your consultation today and let our specialists create your perfect smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => setIsModalOpen(true)} size="lg" className="bg-white text-primary hover:bg-white/90">
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Us      
              </Button>
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