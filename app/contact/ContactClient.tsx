"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { FaSnapchat } from "react-icons/fa";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { faqItems } from "@/lib/departments";

export default function ContactClient() {
  const { t } = useLanguage();

  const daysList = [
    { name: t.businessHours.days.Monday, hours: t.businessHours.regularHours },
    { name: t.businessHours.days.Tuesday, hours: t.businessHours.regularHours },
    { name: t.businessHours.days.Wednesday, hours: t.businessHours.regularHours },
    { name: t.businessHours.days.Thursday, hours: t.businessHours.regularHours },
    { name: t.businessHours.days.Friday, hours: t.businessHours.fridayHours },
    { name: t.businessHours.days.Saturday, hours: t.businessHours.regularHours },
    { name: t.businessHours.days.Sunday, hours: t.businessHours.regularHours },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC02197.webp"
            alt="Contact Mazaya Dental Center"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 to-gray-950/40" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
              {t.contactPage.heroTitle}
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              {t.contactPage.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Call Card */}
            <div className="border border-gray-200 bg-white p-6 rounded-xl text-center">
              <div className="mx-auto bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{t.contactPage.callUsTitle}</h3>
              <p className="text-xs text-gray-500 mb-4">{t.contactPage.callUsDesc}</p>
              <div className="space-y-1 text-sm text-gray-700 font-medium">
                <p>+973 17777234 ({t.contactSection.callLandline})</p>
                <p>+973 39224333 ({t.contactSection.callMobile})</p>
              </div>
              <div className="mt-5">
                <a href="tel:+97317777234">
                  <Button variant="outline" size="sm" className="border-gray-300">
                    <Phone className="mr-2 rtl:ml-2 rtl:mr-0 h-4 w-4 text-primary" />
                    {t.contactSection.callLandline}
                  </Button>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="border border-gray-200 bg-white p-6 rounded-xl text-center">
              <div className="mx-auto bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{t.contactPage.emailUsTitle}</h3>
              <p className="text-xs text-gray-500 mb-4">{t.contactPage.emailUsDesc}</p>
              <p className="text-sm font-medium text-gray-700 mb-5">info@mazayadc.com</p>
              <div>
                <Link href="mailto:info@mazayadc.com">
                  <Button variant="outline" size="sm" className="border-gray-300">
                    <Mail className="mr-2 rtl:ml-2 rtl:mr-0 h-4 w-4 text-primary" />
                    {t.contactSection.emailTitle}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visit Card */}
            <div className="border border-gray-200 bg-white p-6 rounded-xl text-center">
              <div className="mx-auto bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{t.contactPage.visitUsTitle}</h3>
              <p className="text-xs text-gray-500 mb-4">{t.contactPage.visitUsDesc}</p>
              <p className="text-xs text-gray-700 font-medium mb-5">{t.contactSection.locationAddress}</p>
              <div>
                <a href="https://maps.app.goo.gl/qjJcJVZZMY6Gxbgf6" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="border-gray-300">
                    <MapPin className="mr-2 rtl:ml-2 rtl:mr-0 h-4 w-4 text-primary" />
                    {t.contactPage.getDirections}
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mt-16 pt-16 border-t border-gray-100">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl font-bold font-heading text-gray-900 mb-2">
                {t.contactPage.socialTitle}
              </h2>
              <p className="text-sm text-gray-600">
                {t.contactPage.socialSubtitle}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  {
                    platform: "Instagram",
                    icon: <Instagram className="h-6 w-6 text-primary" />,
                    url: "https://www.instagram.com/mazaya.edc?igsh=MWV1ODRsb3d2ODlobQ%3D%3D&utm_source=qr",
                  },
                  {
                    platform: "TikTok",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-primary">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z"/>
                      </svg>
                    ),
                    url: "https://www.tiktok.com/@mazayabh?_t=8rOMH90x4iI&_r=1",
                  },
                  {
                    platform: "Snapchat",
                    icon: <FaSnapchat className="h-6 w-6 text-primary" />,
                    url: "https://snapchat.com/t/LHo1AOSN",
                  },
                  {
                    platform: "Facebook",
                    icon: <Facebook className="h-6 w-6 text-primary" />,
                    url: "https://www.facebook.com/profile.php?id=61559196819721",
                  },
                ].map((social) => (
                  <Link
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    className="p-5 border border-gray-200 rounded-xl bg-gray-50 hover:border-primary/40 flex flex-col items-center justify-center transition-colors"
                  >
                    <div className="mb-2">{social.icon}</div>
                    <span className="text-sm font-semibold text-gray-800">{social.platform}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <section className="h-[350px] bg-white mt-16 border border-gray-200 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.0456052774434!2d50.55942427563794!3d26.162644177102262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49afe9fbe4a535%3A0xaaa418f0653d50b1!2sMazaya%20Dental%20Center!5e0!3m2!1sen!2sin!4v1741886257295!5m2!1sen!2sin" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>

          {/* Business Hours */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold font-heading text-gray-900">{t.businessHours.title}</h2>
              <p className="text-sm text-gray-600 mt-1">
                {t.businessHours.subtitle}
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <div className="divide-y divide-gray-200">
                {daysList.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2.5 text-sm">
                    <div className="flex items-center text-gray-800">
                      <Clock className="h-4 w-4 text-primary mr-2 rtl:ml-2 rtl:mr-0 shrink-0" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <span className="text-gray-600 font-mono text-xs">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-2">{t.contactPage.faqTitle}</h2>
            <p className="text-sm text-gray-600">
              {t.contactPage.faqSubtitle}
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="text-base font-bold text-gray-900 mb-1.5 font-heading">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
