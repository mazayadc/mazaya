import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageSquare, CalendarDays, Instagram, Facebook, MessageCircle } from "lucide-react";
import { FaSnapchat } from "react-icons/fa";
import JsonLd from "@/components/JsonLd";
import { faqItems } from "@/lib/departments";

export const metadata: Metadata = {
  title: "Contact Mazaya Dental Center | Book Appointment in Isa Town, Bahrain",
  description:
    "Contact Mazaya Dental Center in Isa Town, Bahrain. Call +973 17777234 (landline) or +973 39224333 (mobile). Open 7 days a week, 9 AM – 11 PM. Email info@mazayadc.com.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Mazaya Dental Center | Book Appointment",
    description:
      "Get in touch with Mazaya Dental Center. Call, email, or visit us in Isa Town, Bahrain. Open 7 days a week.",
  },
};

// FAQ Page JSON-LD for AEO — makes FAQ answers citable by AI search engines
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC02197.webp"
            alt="Contact Mazaya Dental Center"
            fill
            priority
            className="object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-极3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Have questions or ready to schedule your appointment? Get in touch with our friendly team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Call Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-heading text-gray-900">Call Us</CardTitle>
                <CardDescription className="text-gray-500">We're here to help during business hours</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-4 space-y-3">
                <div>
                  <p className="text-lg font-semibold text-gray-800">+973 17777234</p>
                  <p className="text-sm text-gray-500">Landline</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">+973 39224333</p>
                  <p className="text-sm text-gray-500">Mobile</p>
                </div>
                <a href="tel:+97317777234" className="inline-block">
                  <Button variant="outline" className="mt-4 border-primary text-primary hover:bg-primary/10 hover:text-primary">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-heading text-gray-900">Email Us</CardTitle>
                <CardDescription className="text-gray-500">We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-4">
                <p className="text-lg font-semibold text-gray-800">info@mazayadc.com</p>
                <p className="text-sm text-gray-500 mb-4">For general inquiries</p>
                <Link href="mailto:info@mazayadc.com" className="inline-block">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Visit Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-heading text-gray-900">Visit Us</CardTitle>
                <CardDescription className="text-gray-500">Our state-of-the-art facility</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-4">
                <p className="text-lg font-semibold text-gray-800">Unit 6, Bldg. 515</p>
                <p className="text-sm text-gray-500 mb-4">Road 1332, Block 813, Kingdom of Bahrain</p>
                <a href="https://maps.app.goo.gl/qjJcJVZZMY6Gxbgf6" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Social Media Section */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 font-heading bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Connect With Us on Social Media
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Stay connected for exclusive updates, dental tips, and special offers
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    platform: "Instagram",
                    icon: <Instagram className="h-10 w-10 text-white" />,
                    url: "https://www.instagram.com/mazaya.edc?igsh=MWV1ODRsb3d2ODlobQ%3D%3D&utm_source=qr",
                    bg: "bg-gradient-to-br from-pink-500 to-purple-600",
                  },
                  {
                    platform: "TikTok",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10 text-white">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z"/>
                      </svg>
                    ),
                    url: "https://www.tiktok.com/@mazayabh?_t=8rOMH90x4iI&_r=1",
                    bg: "bg-gradient-to-br from-black to-gray-900",
                  },
                  {
                    platform: "Snapchat",
                    icon: <FaSnapchat className="h-10 w-10 text-white" />,
                    url: "https://snapchat.com/t/LHo1AOSN",
                    bg: "bg-gradient-to-br from-yellow-400 to-yellow-500",
                  },
                  {
                    platform: "Facebook",
                    icon: <Facebook className="h-10 w-10 text-white" />,
                    url: "https://www.facebook.com/profile.php?id=61559196819721",
                    bg: "bg-gradient-to-br from-blue-600 to-blue-700",
                  },
                ].map((social) => (
                  <Link
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    className={`${social.bg} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2`}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="mb-4">{social.icon}</div>
                      <span className="text-2xl font-semibold text-white">{social.platform}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
     <section  className="h-[400px] bg-white mt-16">
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
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 font-heading">Business Hours</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're open 7 days a week to serve your dental needs.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                      <div key={day} className="flex justify-between items-center pb-2 border-b">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-primary mr-2" />
                          <span className="font-medium">{day}</span>
                        </div>
                        <span>
                          {day === 'Friday' ? '1:00 PM - 9:00 PM' : '9:00 AM - 11:00 PM'}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Add FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our services, appointments, and policies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-2 font-heading">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}