"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Users, Coffee, Globe, ShieldCheck, CreditCard, Clock } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutClient() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t.difference.vipTitle,
      description: t.difference.vipDesc,
    },
    {
      icon: <Coffee className="h-8 w-8 text-primary" />,
      title: t.difference.coffeeTitle,
      description: t.difference.coffeeDesc,
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: t.whyChoose.tourismTitle,
      description: t.whyChoose.tourismDesc,
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: t.difference.insuranceTitle,
      description: t.difference.insuranceDesc,
    },
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: t.difference.financingTitle,
      description: t.difference.financingDesc,
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: t.contactPage.hoursTitle,
      description: t.contactSection.hoursDesc,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC02178.webp"
            alt="Mazaya Dental Center"
            fill
            priority
            className="object-cover brightness-[0.85]"
            style={{ objectPosition: 'center center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
              {t.aboutPage.heroTitle}
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-8">
              {t.aboutPage.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">{t.aboutPage.approachTitle}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t.aboutPage.approachText1}
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                {t.aboutPage.approachText2}
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">7</p>
                  <p className="text-muted-foreground">{t.aboutPage.daysWeek}</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">14</p>
                  <p className="text-muted-foreground">{t.aboutPage.hoursDaily}</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">1</p>
                  <p className="text-muted-foreground">{t.aboutPage.oneDay}</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">8+</p>
                  <p className="text-muted-foreground">{t.aboutPage.insurancePlans}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden">
                <AspectRatio ratio={4/3}>
                  <Image
                    src="/MAZAYA logo Transparent 01.png"
                    alt="Mazaya Dental Center"
                    fill
                    className="object-contain"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">{t.aboutPage.featuresTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.aboutPage.featuresSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-heading">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clinic Photos Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">{t.aboutPage.clinicTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.aboutPage.clinicSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "/DSC02149.webp",
              "/DSC02178.webp", 
              "/DSC02180.webp",
              "/DSC02187.webp",
              "/DSC02189.webp"
            ].map((image, index) => (
              <Card key={index} className="border-none shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={image}
                    alt="Mazaya Dental Clinic"
                    fill
                    className="object-cover"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
