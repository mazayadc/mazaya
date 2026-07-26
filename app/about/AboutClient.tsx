"use client";

import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Users, Coffee, Globe, ShieldCheck, CreditCard, Clock } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutClient() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: t.difference.vipTitle,
      description: t.difference.vipDesc,
    },
    {
      icon: <Coffee className="h-6 w-6 text-primary" />,
      title: t.difference.coffeeTitle,
      description: t.difference.coffeeDesc,
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: t.whyChoose.tourismTitle,
      description: t.whyChoose.tourismDesc,
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: t.difference.insuranceTitle,
      description: t.difference.insuranceDesc,
    },
    {
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      title: t.difference.financingTitle,
      description: t.difference.financingDesc,
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: t.contactPage.hoursTitle,
      description: t.contactSection.hoursDesc,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC02178.webp"
            alt="Mazaya Dental Center"
            fill
            priority
            className="object-cover opacity-60"
            style={{ objectPosition: 'center center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 to-gray-950/40" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
              {t.aboutPage.heroTitle}
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              {t.aboutPage.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-heading text-gray-900">{t.aboutPage.approachTitle}</h2>
              <p className="text-gray-600 leading-relaxed">
                {t.aboutPage.approachText1}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t.aboutPage.approachText2}
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
                  <p className="text-3xl font-bold text-primary">7</p>
                  <p className="text-xs font-semibold text-gray-600 mt-1">{t.aboutPage.daysWeek}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
                  <p className="text-3xl font-bold text-primary">14</p>
                  <p className="text-xs font-semibold text-gray-600 mt-1">{t.aboutPage.hoursDaily}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
                  <p className="text-3xl font-bold text-primary">1</p>
                  <p className="text-xs font-semibold text-gray-600 mt-1">{t.aboutPage.oneDay}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
                  <p className="text-3xl font-bold text-primary">8+</p>
                  <p className="text-xs font-semibold text-gray-600 mt-1">{t.aboutPage.insurancePlans}</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 p-6">
              <AspectRatio ratio={4/3}>
                <Image
                  src="/MAZAYA logo Transparent 01.png"
                  alt="Mazaya Dental Center"
                  fill
                  className="object-contain p-4"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Our Features Section */}
      <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-3">{t.aboutPage.featuresTitle}</h2>
            <p className="text-gray-600">
              {t.aboutPage.featuresSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clinic Photos Section */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-3">{t.aboutPage.clinicTitle}</h2>
            <p className="text-gray-600">
              {t.aboutPage.clinicSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/DSC02149.webp",
              "/DSC02178.webp", 
              "/DSC02180.webp",
              "/DSC02187.webp",
              "/DSC02189.webp"
            ].map((image, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                <div className="relative h-60">
                  <Image
                    src={image}
                    alt="Mazaya Dental Clinic"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
