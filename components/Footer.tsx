"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";
import { FaSnapchat } from "react-icons/fa";  
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">{t.footer.aboutTitle}</h3>
            <p className="mb-4 text-gray-200">
              {t.footer.aboutDesc}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="https://www.facebook.com/profile.php?id=61559196819721" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-foreground transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/mazaya.edc?igsh=MWV1ODRsb3d2ODlobQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-foreground transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@mazayabh?_t=8rOMH90x4iI&_r=1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-foreground transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z"/>
                </svg>
              </a>
              <a href="https://snapchat.com/t/LHo1AOSN" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-foreground transition-colors duration-300">
                <FaSnapchat size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-200 hover:text-white transition-colors duration-300">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/departments" className="text-gray-200 hover:text-white transition-colors duration-300">
                  {t.nav.departments}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-200 hover:text-white transition-colors duration-300">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 hover:text-white transition-colors duration-300">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-white transition-colors duration-300">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">{t.footer.services}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/departments" className="text-gray-200 hover:text-white transition-colors duration-300">
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link href="/departments" className="text-gray-200 hover:text-white transition-colors duration-300">
                  Pedodontics
                </Link>
              </li>
              <li>
                <Link href="/departments" className="text-gray-200 hover:text-white transition-colors duration-300">
                  Implantology
                </Link>
              </li>
              <li>
                <Link href="/departments" className="text-gray-200 hover:text-white transition-colors duration-300">
                  Prosthodontics
                </Link>
              </li>
              <li>
                <Link href="/departments" className="text-gray-200 hover:text-white transition-colors duration-300">
                  Periodontics
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">{t.footer.contactUs}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 rtl:ml-2 rtl:mr-0 h-5 w-5 text-primary-foreground shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 rtl:ml-2 rtl:mr-0 h-5 w-5 text-primary-foreground shrink-0" />
                <div className="flex flex-col">
                  <span>+973 17777234</span>
                  <span>+973 39224333</span>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 rtl:ml-2 rtl:mr-0 h-5 w-5 text-primary-foreground shrink-0" />
                <span>info@mazayadc.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 rtl:ml-2 rtl:mr-0 h-5 w-5 text-primary-foreground shrink-0 mt-0.5" />
                <div>
                  <p>{t.footer.hours}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}