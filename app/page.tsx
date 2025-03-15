  "use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, Clock, MapPin, Phone, Mail, ArrowRight, Star, CheckCircle2, Award, Users, Globe, Stethoscope, Gift, CreditCard } from "lucide-react";
import BookAppointmentModal from "@/components/BookAppointmentModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
              Mazaya Dental Center
            </h1>
            <p className="text-lg md:text-lg text-gray-100 max-w-lg leading-relaxed">
              Digital dental care with One-Day Dentistry. Crowns, bridges, and restorations in a single visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-5 text-base font-medium shadow-lg hover:shadow-primary/30 transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Now
              </Button>  

              <Link href="/departments" className="w-full md:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full md:w-auto border-white/50 hover:border-white bg-white/10 text-white px-6 py-5 text-base font-medium backdrop-blur-sm transition-all"
                >
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Services
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb极6 font-heading text-primary">
              Our Dental Departments
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive dental care services to meet all your oral health needs in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Orthodontics",
                description: "Specialized care for teeth alignment and bite correction using braces and aligners.",
                icon: (
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-xl sm:rounded-2xl transform rotate-45" />
                    <Image
                      src="/ortho.png"
                      alt="Orthodontics Icon"
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                    </div>
                ),
              },
              {
                title: "Pedodontics",
                description: "Comprehensive dental care for children, ensuring healthy smiles from an early age.",
                icon: (
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-xl sm:rounded-2xl transform rotate-45" />
                    <Image
                      src="/pedia.png"
                      alt="Pedodontics Icon"
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                ),
              },
              {
                title: "Implantology",
                description: "Advanced tooth replacement solutions with durable and natural-looking dental implants.",
                icon: (
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-xl sm:rounded-2xl transform rotate-45" />
                    <Image
                      src="/implant.png"
                      alt="Implantology Icon"
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                ),
              },
              {
                title: "Prosthodontics",
                description: "Restorative treatments including crowns, bridges, and dentures for optimal oral function.",
                icon: (
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-xl sm:rounded-2xl transform rotate-45" />
                    <Image
                      src="/clean.png"
                      alt="Prosthodontics Icon"
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                ),
              },
              {
                title: "Periodontics",
                description: "Specialized care for gum health and treatment of periodontal diseases.",
                icon: (
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-xl sm:rounded-2xl transform rotate-45" />
                    <Image
                      src="/periodo.png"
                      alt="Periodontics Icon"
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                ),
              },
              {
                title: "Endodontics",
                description: "Expert root canal treatments to save and preserve damaged teeth.",
                icon: (
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-xl sm:rounded-2xl transform rotate-45" />
                    <Image
                      src="/endo.png"
                      alt="Endodontics Icon"
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                ),
              },
            ].map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-white border border-gray-100 rounded-2xl sm:rounded-3xl shadow-sm sm:shadow-lg shadow-primary/5 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl" />
                <div className="relative p-6 sm:p-8">
                  <div className="mb-4 sm:mb-6">{service.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading mb-3 sm:mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">{service.description}</p>
                  <Link href="/departments" className="inline-flex items-center text-primary font-medium group-hover:underline text-sm sm:text-base">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <Button asChild className="px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
              <Link href="/departments">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Add Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/dental-pattern.svg')] bg-[length:80px_80px] md:bg-[length:120px_120px] opacity-5" />
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-primary">
              Why Choose Mazaya Dental Center?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience excellence in dental care with our unique combination of expertise, technology, and patient comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-primary" />,
                title: "One-Day Dentistry",
                description: "Get your crowns, bridges, and restorations in a single visit with our advanced digital technology."
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "International Expertise",
                description: "Access world-class dental care from renowned specialists from the UK, Luxembourg, and beyond."
              },
              {
                icon: <Globe className="h-8 w-8 text-primary" />,
                title: "Dental Tourism Pioneer",
                description: "First center in Bahrain focusing on dental health tourism, making quality care accessible to all."
              },
              {
                icon: <Stethoscope className="h-8 w-8 text-primary" />,
                title: "Comprehensive Care",
                description: "Full range of dental specialties under one roof for seamless, coordinated treatment."
              },
              {
                icon: <Gift className="h-8 w-8 text-primary" />,
                title: "Premium Amenities",
                description: "Enjoy our VIP lounge and coffee shop while experiencing luxury dental care."
              },
              {
                icon: <CreditCard className="h-8 w-8 text-primary" />,
                title: "Flexible Payment Options",
                description: "Multiple insurance affiliations and in-house financing plans available."
              },
            ].map((feature, index) => (
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

      {/* Add Insurance Partners Section */}
      {/* <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Our Insurance Partners</h2>
            <p className="text-lg text-muted-foreground">
              We work with major insurance providers to make quality dental care accessible.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl flex items-center justify-center">
                <p className="text-gray-400">[Insurance Logo]</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Add Special Offers Section */}
      {/* <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-primary">
              Special Offers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take advantage of our current promotional packages and discounts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "New Patient Special",
                description: "Comprehensive exam, cleaning, and X-rays package",
                price: "49",
                features: ["Complete Oral Examination", "Professional Cleaning", "Digital X-rays", "Treatment Plan Consultation"]
              },
              {
                title: "Smile Makeover",
                description: "Transform your smile with our cosmetic package",
                price: "999",
                features: ["Teeth Whitening", "Dental Veneers Consultation", "Digital Smile Design", "Treatment Plan"]
              },
              {
                title: "Family Package",
                description: "Special discount for families of 4 or more",
                price: "199",
                features: ["Family Dental Check-up", "Children's Dental Education", "Preventive Care Plan", "20% Off Additional Services"]
              }
            ].map((offer, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-primary/5 pb-8">
                  <CardTitle className="text-2xl font-bold">{offer.title}</CardTitle>
                  <CardDescription>{offer.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">${offer.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {offer.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Book Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Image Section */}
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden  transform transition-all duration-700 hover:scale-105 bg-gradient-to-br from-primary/10 to-white">
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
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 hidden md:block transform transition-all hover:scale-105">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-2xl font-bold font-heading text-gray-900">4.9</p>
                </div>
                <p className="text-sm text-gray-500 mt-1">Patient Rating</p>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold font-heading bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                The Mazaya Difference
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                As the pioneer in dental health tourism in Bahrain, we bring world-renowned dentists from the UK, Luxembourg, and beyond, offering exceptional dental care with unmatched convenience and comfort.
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
                    title: "VIP Lounge",
                    description: "Luxurious environment for comfortable consultations"
                  },
                  {
                    icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
                    title: "Coffee Shop",
                    description: "Enjoy beverages while you wait"
                  },
                  {
                    icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
                    title: "Insurance Coverage",
                    description: "Affiliated with major local & international providers"
                  },
                  {
                    icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
                    title: "Flexible Financing",
                    description: "In-house payment plans available"
                  }
                ].map((item, index) => (
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
                  Learn About Mazaya
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
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
              Patient Experiences
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the transformative journeys of our valued patients and their exceptional experiences at our clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ameera Shah",
                service: "Comprehensive Dental Care",
                content: "I'm incredibly grateful to the Mazaya Dental Center team for their exceptional care. Their professionalism and attention to detail are unmatched. From the warm welcome to the skilled treatment, every aspect was perfect. I wholeheartedly recommend Mazaya for anyone seeking premium dental services.",
                rating: 5,
              },
              {
                name: "Rincy Neel",
                service: "Root Canal Treatment",
                content: "My root canal experience at Mazaya was excellent. The friendly staff immediately put me at ease, and Dr. Stanley's clear explanations calmed my nerves. The procedure was comfortable, with constant care checks, and the thorough aftercare instructions ensured proper healing. Their affordable treatment packages make them my top choice for dental care.",
                rating: 5,
              },
              {
                name: "Vengilyn Castro",
                service: "Pediatric Dental Care",
                content: "Our children's dental visit to Mazaya was wonderful. The clinic's cleanliness and comfortable waiting area impressed us. Dr. Mary and Dr. Stan were exceptional - our kids experienced minimal discomfort during scaling and polishing. We especially appreciated Dr. Stan's patient explanation of proper dental care techniques. We'll definitely return for all our family's dental needs.",
                rating: 4,
              },
              {
                name: "Samra Bint Ahmed",
                service: "Comprehensive Dental Consultation",
                content: "My first visit to Mazaya was fantastic. The professional yet friendly approach of the staff and dentists made me feel at ease. Dr. Stanley's expertise and attentive listening were particularly impressive. It's reassuring to find a dentist who truly understands and addresses your concerns. Thank you for the excellent care!",
                rating: 5,
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-primary">{testimonial.service}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-gray-300" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({testimonial.rating}/5)</span>
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
                Connect With Mazaya
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience world-class dental care at Mazaya. Our dedicated team is here to provide personalized treatment and exceptional service for all your dental needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">
                    Flat No,6,7,8,9,10, Building No. 515, Road 1332, Block 813, Isa Town, Kingdom of Bahrain
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+973 17777234 - Landline</p>
                    <p className="text-gray-600">+973 39224333 - Mobile</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@mazayadc.com</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Hours</h3>
                    <p className="text-gray-600">Open 7 days a week</p>
                    <p className="text-gray-600">9:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+97317777234" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto px-4 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full border-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Landline
                  </Button>
                </a>
                <a href="tel:+97339224333" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto px-4 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full border-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Mobile
                  </Button>
                </a>
                <Button 
                  onClick={() => setIsModalOpen(true)} 
                  className="w-full sm:w-auto px-4 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                >
                  <CalendarDays className="mr-2 h-5 w-5" />
                  Book Appointment
                </Button>
              </div>
            </div>
            
            <div>
              <Card className="border-none shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-white p-8">
                  <CardTitle className="text-3xl font-heading">Send Us a Message</CardTitle>
                  <CardDescription className="text-lg">
                    We'll respond within 24 hours to discuss your dental needs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="(202) 555-1234"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <Button type="submit" className="w-full py-6 text-lg font-semibold rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Community Commitment</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We actively conduct charity drives in association with various NGOs and corporate partners, reinforcing our commitment to improving dental health awareness and accessibility for all.
            </p>
          </div>
          <div className="flex justify-center">
            <Button asChild className="px-8 py-6 text-lg font-semibold rounded-full bg-primary hover:bg-primary/90">
              <Link href="/about">Learn More About Our Impact</Link>
              
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

      {/* Calendly Integration */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Schedule Your Appointment</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose a convenient time for your visit using our online scheduling system.
            </p>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-muted-foreground">
              [Calendly integration widget would be placed here]
            </p>
            <Button className="mt-4">
              Book Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Update Business Hours Section */}
      <section className="py-16 bg-white">
        <div className="container">
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
      </section>

      {/* Add Community Commitment Section before Calendly */}
     
      {/* Modal */}
      <BookAppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}