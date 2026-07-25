"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookAppointmentModal from "@/components/BookAppointmentModal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.departments, href: "/departments" },
    { name: t.nav.blog, href: "/blog" },
    { name: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-40 flex items-center">
              <span className="font-heading text-2xl font-bold text-primary flex items-center">
                <Image
                  src="/MAZAYA logo Transparent 01.png"
                  alt="Mazaya Dental Center Logo"
                  width={40}
                  height={40}
                  className="mr-2 rtl:ml-2 rtl:mr-0"
                />
                Mazaya
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            <ul className="flex space-x-6 rtl:space-x-reverse">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-base font-medium transition-colors duration-300 relative ${
                      pathname === link.href
                        ? "text-primary font-semibold"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.name}
                    {pathname === link.href && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute bottom-[-4px] left-0 right-0 h-[3px] bg-primary rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-300 hover:border-primary text-sm font-medium text-gray-700 hover:text-primary transition-all bg-white/80 backdrop-blur-sm"
              title="Toggle Language / تغيير اللغة"
            >
              <Globe className="h-4 w-4 text-primary" />
              <span>{language === "en" ? "العربية" : "EN"}</span>
            </button>

            <Button 
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-white flex items-center"
            >
              <Phone className="mr-2 rtl:ml-2 rtl:mr-0 h-4 w-4" />
              {t.nav.bookAppointment}
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-gray-300 text-xs font-medium text-gray-700 bg-white"
            >
              <Globe className="h-3.5 w-3.5 text-primary" />
              <span>{language === "en" ? "العربية" : "EN"}</span>
            </button>
            <button
              className="text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-lg border-t"
            >
              <div className="container mx-auto px-4 py-4">
                <ul className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block text-lg font-medium py-2 ${
                          pathname === link.href
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Button 
                      onClick={() => {
                        setIsOpen(false);
                        setIsModalOpen(true);
                      }}
                      className="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center"
                    >
                      <Phone className="mr-2 rtl:ml-2 rtl:mr-0 h-4 w-4" />
                      {t.nav.bookAppointment}
                    </Button>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Modal */}
      <BookAppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}