"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CalendarDays, Clock, MapPin, Phone, Mail, ArrowRight, Star, CheckCircle2, Award, Users, Globe, Stethoscope, Gift, CreditCard } from "lucide-react";
import BookAppointmentModal from "@/components/BookAppointmentModal";
import JsonLd from "@/components/JsonLd";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Mazaya Dental Center",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "4",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Ameera Shah" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "I'm incredibly grateful to the Mazaya Dental Center team for their exceptional care."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Rincy Neel" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "My root canal experience at Mazaya was excellent."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Vengilyn Castro" },
      "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" },
      "reviewBody": "Our children's dental visit to Mazaya was wonderful."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Samra Bint Ahmed" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "My first visit to Mazaya was fantastic."
    }
  ]
};

export default function HomeClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  const servicesList = [
    {
      title: t.depts.orthodontics.title,
      description: t.depts.orthodontics.description,
      iconSrc: "/ortho.png",
      alt: "Orthodontics Icon",
    },
    {
      title: t.depts.pedodontics.title,
      description: t.depts.pedodontics.description,
      iconSrc: "/pedia.png",
      alt: "Pedodontics Icon",
    },
    {
      title: t.depts.implantology.title,
      description: t.depts.implantology.description,
      iconSrc: "/implant.png",
      alt: "Implantology Icon",
    },
    {
      title: t.depts.prosthodontics.title,
      description: t.depts.prosthodontics.description,
      iconSrc: "/clean.png",
      alt: "Prosthodontics Icon",
    },
    {
      title: t.depts.periodontics.title,
      description: t.depts.periodontics.description,
      iconSrc: "/periodo.png",
      alt: "Periodontics Icon",
    },
    {
      title: t.depts.endodontics.title,
      description: t.depts.endodontics.description,
      iconSrc: "/endo.png",
      alt: "Endodontics Icon",
    },
  ];

  const whyChooseFeatures = [
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: t.whyChoose.oneDayTitle,
      description: t.whyChoose.oneDayDesc,
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: t.whyChoose.expertiseTitle,
      description: t.whyChoose.expertiseDesc,
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: t.whyChoose.tourismTitle,
      description: t.whyChoose.tourismDesc,
    },
    {
      icon: <Stethoscope className="h-6 w-6 text-primary" />,
      title: t.whyChoose.careTitle,
      description: t.whyChoose.careDesc,
    },
    {
      icon: <Gift className="h-6 w-6 text-primary" />,
      title: t.whyChoose.amenitiesTitle,
      description: t.whyChoose.amenitiesDesc,
    },
    {
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      title: t.whyChoose.paymentTitle,
      description: t.whyChoose.paymentDesc,
    },
  ];

  const differenceItems = [
    {
      icon: <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />,
      title: t.difference.vipTitle,
      description: t.difference.vipDesc,
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />,
      title: t.difference.coffeeTitle,
      description: t.difference.coffeeDesc,
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />,
      title: t.difference.insuranceTitle,
      description: t.difference.insuranceDesc,
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />,
      title: t.difference.financingTitle,
      description: t.difference.financingDesc,
    },
  ];

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
      <JsonLd data={reviewsJsonLd} />
      
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/DSC02178.webp"
            className="object-cover w-full h-full opacity-60"
            style={{ objectPosition: 'center 30%' }}
          >
            <source src="/mazaya_hero_video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-gray-950/60 to-transparent" />
        </div>
        
        <div className="container relative z-10 h-full flex items-center">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight font-heading">
              {t.hero.title}
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed max-w-xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-medium"
              >
                <Phone className="mr-2 rtl:ml-2 rtl:mr-0 h-5 w-5" />
                {t.hero.bookNow}
              </Button>  

              <Link href="/departments">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-white/40 bg-white/10 text-white hover:bg-white hover:text-gray-900 transition-colors"
                >
                  <ArrowRight className="mr-2 rtl:ml-2 rtl:mr-0 h-5 w-5" />
                  {t.hero.services}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 font-heading mb-4">
              {t.departmentsSection.title}
            </h2>
            <p className="text-lg text-gray-600">
              {t.departmentsSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <Image
                    src={service.iconSrc}
                    alt={service.alt}
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">{service.description}</p>
                <Link href="/departments" className="inline-flex items-center text-primary font-semibold hover:underline text-sm">
                  {t.departmentsSection.learnMore}
                  <ArrowRight className="ml-1.5 rtl:mr-1.5 rtl:ml-0 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-lg font-semibold">
              <Link href="/departments">{t.departmentsSection.viewAll}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 font-heading mb-4">
              {t.whyChoose.title}
            </h2>
            <p className="text-lg text-gray-600">
              {t.whyChoose.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseFeatures.map((feature, index) => (
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

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 p-8 flex items-center justify-center">
              <AspectRatio ratio={4/3}>
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/MAZAYA logo Transparent 01.png"
                    alt="Mazaya Dental Logo"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </AspectRatio>
            </div>
            
            <div className="space-y-6">
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">{t.difference.ratingLabel}: 4.9 ★★★★★</span>
                <h2 className="text-3xl font-bold font-heading text-gray-900 mt-2">
                  {t.difference.title}
                </h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {t.difference.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {differenceItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 bg-gray-50">
                    {item.icon}
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                      <p className="text-xs text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-2">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold">
                  <Link href="/about" className="flex items-center gap-2">
                    {t.difference.learnAbout}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 font-heading mb-4">
              {t.testimonials.title}
            </h2>
            <p className="text-gray-600">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.testimonialsList.map((testimonial, index) => (
              <Card key={index} className="border border-gray-200 bg-white p-5 rounded-xl shadow-none">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-xs text-primary font-medium">{testimonial.service}</p>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {Array.from({ length: index === 2 ? 4 : 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed italic">"{testimonial.content}"</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-heading text-gray-900">
                {t.contactSection.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t.contactSection.subtitle}
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start p-4 rounded-xl border border-gray-200 bg-gray-50">
                  <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div className="ml-3 rtl:mr-3 rtl:ml-0">
                    <h3 className="font-semibold text-gray-900 text-sm">{t.contactSection.locationTitle}</h3>
                    <p className="text-gray-600 text-xs mt-0.5">{t.contactSection.locationAddress}</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 rounded-xl border border-gray-200 bg-gray-50">
                  <Phone className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div className="ml-3 rtl:mr-3 rtl:ml-0">
                    <h3 className="font-semibold text-gray-900 text-sm">{t.contactSection.phoneTitle}</h3>
                    <p className="text-gray-600 text-xs mt-0.5">+973 17777234 ({t.contactSection.callLandline})</p>
                    <p className="text-gray-600 text-xs">+973 39224333 ({t.contactSection.callMobile})</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 rounded-xl border border-gray-200 bg-gray-50">
                  <Mail className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div className="ml-3 rtl:mr-3 rtl:ml-0">
                    <h3 className="font-semibold text-gray-900 text-sm">{t.contactSection.emailTitle}</h3>
                    <p className="text-gray-600 text-xs mt-0.5">info@mazayadc.com</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 rounded-xl border border-gray-200 bg-gray-50">
                  <Clock className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div className="ml-3 rtl:mr-3 rtl:ml-0">
                    <h3 className="font-semibold text-gray-900 text-sm">{t.contactSection.hoursTitle}</h3>
                    <p className="text-gray-600 text-xs mt-0.5">{t.contactSection.hoursDesc}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="tel:+97317777234">
                  <Button variant="outline" size="sm" className="border-gray-300">
                    <Phone className="mr-2 rtl:ml-2 rtl:mr-0 h-4 w-4 text-primary" />
                    {t.contactSection.callLandline}
                  </Button>
                </a>
                <a href="tel:+97339224333">
                  <Button variant="outline" size="sm" className="border-gray-300">
                    <Phone className="mr-2 rtl:ml-2 rtl:mr-0 h-4 w-4 text-primary" />
                    {t.contactSection.callMobile}
                  </Button>
                </a>
                <Button 
                  onClick={() => setIsModalOpen(true)} 
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  <CalendarDays className="mr-2 rtl:ml-2 rtl:mr-0 h-4 w-4" />
                  {t.nav.bookAppointment}
                </Button>
              </div>
            </div>
            
            <Card className="border border-gray-200 shadow-sm bg-white p-6 rounded-2xl">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold font-heading text-gray-900">{t.contactSection.formTitle}</CardTitle>
                <CardDescription className="text-gray-600 mt-1 text-sm">
                  {t.contactSection.formDesc}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-gray-700">
                        {t.contactSection.nameLabel}
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full p-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all outline-none"
                        placeholder={t.contactSection.placeholderName}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-gray-700">
                        {t.contactSection.emailLabel}
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all outline-none"
                        placeholder={t.contactSection.placeholderEmail}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-gray-700">
                      {t.contactSection.phoneLabel}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full p-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all outline-none"
                      placeholder={t.contactSection.placeholderPhone}
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-gray-700">
                      {t.contactSection.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full p-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all outline-none"
                      placeholder={t.contactSection.placeholderMessage}
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full py-3 text-sm font-semibold rounded-lg bg-primary hover:bg-primary/90 text-white">
                    {t.contactSection.sendButton}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Commitment Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold font-heading text-gray-900">{t.community.title}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t.community.subtitle}
            </p>
            <div className="pt-2">
              <Button asChild size="sm" variant="outline" className="border-gray-300 text-gray-800">
                <Link href="/about">{t.community.learnMore}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[350px] relative border-t border-gray-200">
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

      {/* Business Hours Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container max-w-3xl">
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
      </section>

      {/* Modal */}
      <BookAppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
