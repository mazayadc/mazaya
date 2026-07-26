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

export default function Home() {
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
      icon: <Award className="h-8 w-8 text-primary" />,
      title: t.whyChoose.oneDayTitle,
      description: t.whyChoose.oneDayDesc,
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t.whyChoose.expertiseTitle,
      description: t.whyChoose.expertiseDesc,
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: t.whyChoose.tourismTitle,
      description: t.whyChoose.tourismDesc,
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-primary" />,
      title: t.whyChoose.careTitle,
      description: t.whyChoose.careDesc,
    },
    {
      icon: <Gift className="h-8 w-8 text-primary" />,
      title: t.whyChoose.amenitiesTitle,
      description: t.whyChoose.amenitiesDesc,
    },
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: t.whyChoose.paymentTitle,
      description: t.whyChoose.paymentDesc,
    },
  ];

  const differenceItems = [
    {
      icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
      title: t.difference.vipTitle,
      description: t.difference.vipDesc,
    },
    {
      icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
      title: t.difference.coffeeTitle,
      description: t.difference.coffeeDesc,
    },
    {
      icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
      title: t.difference.insuranceTitle,
      description: t.difference.insuranceDesc,
    },
    {
      icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
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
      <section className="relative h-screen min-h-[800px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
            style={{ objectPosition: 'center 30%' }}
          >
            <source src="/mazaya_hero_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
        </div>
        
        <div className="container relative z-10 h-full flex items-center">
          <div className="max-w-2xl lg:max-w-4xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-white leading-tight font-heading">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-lg text-gray-100 max-w-lg leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-5 text-base font-medium shadow-lg hover:shadow-primary/30 transition-all"
              >
                <Phone className="mr-2 rtl:ml-2 rtl:mr-0 h-5 w-5" />
                {t.hero.bookNow}
              </Button>  

              <Link href="/departments" className="w-full md:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full md:w-auto border-white/50 hover:border-white bg-white/10 text-white px-6 py-5 text-base font-medium backdrop-blur-sm transition-all"
                >
                  <ArrowRight className="mr-2 rtl:ml-2 rtl:mr-0 h-5 w-5" />
                  {t.hero.services}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="container flex justify-center">
            <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-center justify-center p-1 animate-bounce">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
          <div className="absolute inset-0 bg-[url('/images/dental-pattern.svg')] bg-[length:80px_80px] md:bg-[length:120px_120px] opacity-10" />
        </div>
        
        <div className="container relative z-10 px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 font-heading text-primary">
              {t.departmentsSection.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.departmentsSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesList.map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-white border border-gray-100 rounded-2xl sm:rounded-3xl shadow-sm sm:shadow-lg shadow-primary/5 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl" />
                <div className="relative p-6 sm:p-8">
                  <div className="mb-4 sm:mb-6">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6">
                      <div className="absolute inset-0 bg-primary/10 rounded-xl sm:rounded-2xl transform rotate-45" />
                      <Image
                        src={service.iconSrc}
                        alt={service.alt}
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-10 sm:h-10 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading mb-3 sm:mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">{service.description}</p>
                  <Link href="/departments" className="inline-flex items-center text-primary font-medium group-hover:underline text-sm sm:text-base">
                    {t.departmentsSection.learnMore}
                    <ArrowRight className="ml-2 rtl:mr-2 rtl:ml-0 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <Button asChild className="px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
              <Link href="/departments">{t.departmentsSection.viewAll}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/dental-pattern.svg')] bg-[length:80px_80px] md:bg-[length:120px_120px] opacity-5" />
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-primary">
              {t.whyChoose.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.whyChoose.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Image Section */}
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden transform transition-all duration-700 hover:scale-105 bg-gradient-to-br from-primary/10 to-white">
                <AspectRatio ratio={4/3}>
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="relative w-full h-full">
                      <Image
                        src="/MAZAYA logo Transparent 01.png"
                        alt="Mazaya Dental Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-white/10 to-transparent" />
                <div className="absolute inset-0 border-2 border-white/10 rounded-3xl pointer-events-none" />
              </div>
              
              {/* Floating Rating Card */}
              <div className="absolute -bottom-8 -right-8 rtl:-left-8 rtl:right-auto bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 hidden md:block transform transition-all hover:scale-105">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-2xl font-bold font-heading text-gray-900">4.9</p>
                </div>
                <p className="text-sm text-gray-500 mt-1">{t.difference.ratingLabel}</p>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold font-heading bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {t.difference.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t.difference.description}
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {differenceItems.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Animated Button */}
              <Button asChild className="px-8 py-6 text-lg font-semibold rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/30">
                <Link href="/about" className="flex items-center gap-2">
                  {t.difference.learnAbout}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white via-white/95 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/dental-pattern.svg')] bg-[length:80px_80px] md:bg-[length:120px_120px] opacity-5" />
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-primary">
              {t.testimonials.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.testimonialsList.map((testimonial, index) => (
              <Card key={index} className="bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-primary">{testimonial.service}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: index === 2 ? 4 : 5 }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      {index === 2 && <Star className="h-5 w-5 text-gray-300" />}
                    </div>
                    <span className="text-sm text-muted-foreground">({index === 2 ? 4 : 5}/5)</span>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/dental-pattern.svg')] bg-[length:80px_80px] md:bg-[length:120px_120px] opacity-5" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold font-heading bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {t.contactSection.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t.contactSection.subtitle}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4 rtl:mr-4 rtl:ml-0">
                    <h3 className="font-semibold text-gray-900">{t.contactSection.locationTitle}</h3>
                    <p className="text-gray-600">
                      {t.contactSection.locationAddress}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4 rtl:mr-4 rtl:ml-0">
                    <h3 className="font-semibold text-gray-900">{t.contactSection.phoneTitle}</h3>
                    <p className="text-gray-600">+973 17777234 - {t.contactSection.callLandline}</p>
                    <p className="text-gray-600">+973 39224333 - {t.contactSection.callMobile}</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4 rtl:mr-4 rtl:ml-0">
                    <h3 className="font-semibold text-gray-900">{t.contactSection.emailTitle}</h3>
                    <p className="text-gray-600">info@mazayadc.com</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4 rtl:mr-4 rtl:ml-0">
                    <h3 className="font-semibold text-gray-900">{t.contactSection.hoursTitle}</h3>
                    <p className="text-gray-600">{t.contactSection.hoursDesc}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+97317777234" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto px-4 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full border-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
                    <Phone className="mr-2 rtl:ml-2 rtl:mr-0 h-5 w-5" />
                    {t.contactSection.callLandline}
                  </Button>
                </a>
                <a href="tel:+97339224333" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto px-4 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full border-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
                    <Phone className="mr-2 rtl:ml-2 rtl:mr-0 h-5 w-5" />
                    {t.contactSection.callMobile}
                  </Button>
                </a>
                <Button 
                  onClick={() => setIsModalOpen(true)} 
                  className="w-full sm:w-auto px-4 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                >
                  <CalendarDays className="mr-2 rtl:ml-2 rtl:mr-0 h-5 w-5" />
                  {t.nav.bookAppointment}
                </Button>
              </div>
            </div>
            
            <div>
              <Card className="border-none shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-white p-8">
                  <CardTitle className="text-3xl font-heading">{t.contactSection.formTitle}</CardTitle>
                  <CardDescription className="text-lg">
                    {t.contactSection.formDesc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                          {t.contactSection.nameLabel}
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          placeholder={t.contactSection.placeholderName}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          {t.contactSection.emailLabel}
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          placeholder={t.contactSection.placeholderEmail}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        {t.contactSection.phoneLabel}
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder={t.contactSection.placeholderPhone}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        {t.contactSection.messageLabel}
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder={t.contactSection.placeholderMessage}
                      ></textarea>
                    </div>
                    
                    <Button type="submit" className="w-full py-6 text-lg font-semibold rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                      {t.contactSection.sendButton}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Commitment Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">{t.community.title}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.community.subtitle}
            </p>
          </div>
          <div className="flex justify-center">
            <Button asChild className="px-8 py-6 text-lg font-semibold rounded-full bg-primary hover:bg-primary/90">
              <Link href="/about">{t.community.learnMore}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
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
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-heading">{t.businessHours.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.businessHours.subtitle}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {daysList.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center pb-2 border-b">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-primary mr-2 rtl:ml-2 rtl:mr-0" />
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <span>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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