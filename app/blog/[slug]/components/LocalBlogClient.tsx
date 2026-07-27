'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, Phone, MapPin, CheckCircle2, BookOpen, Calendar, User, ChevronRight, MessageCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReadAloud from '@/components/ReadAloud';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LocalBlogPost } from '@/lib/blogData';

interface LocalBlogClientProps {
  post: LocalBlogPost;
}

export default function LocalBlogClient({ post }: LocalBlogClientProps) {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  
  const content = isAr ? post.content.ar : post.content.en;
  const title = isAr ? post.title.ar : post.title.en;
  const excerpt = isAr ? post.excerpt.ar : post.excerpt.en;
  const readTime = isAr ? post.readTimeAr : post.readTimeEn;
  const campaign = post.campaignInfo;
  const offerBadge = campaign ? (isAr ? campaign.offerBadgeAr : campaign.offerBadgeEn) : null;
  const highlights = campaign ? (isAr ? campaign.highlightsAr : campaign.highlightsEn) : [];

  // Extract full text for ReadAloud
  const fullText = [
    title,
    excerpt,
    ...content.sections.flatMap(s => [s.heading || '', ...s.paragraphs, ...(s.bulletPoints || [])]),
    ...(content.faqs || []).flatMap(f => [f.question, f.answer])
  ].filter(Boolean).join('. ');

  return (
    <article className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12 md:py-20">
      <div className="container max-w-6xl mx-auto px-4">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-emerald-700 transition-colors">
            {isAr ? 'الرئيسية' : 'Home'}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
          <Link href="/blog" className="hover:text-emerald-700 transition-colors">
            {isAr ? 'المدونة' : 'Blog'}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
          <span className="text-gray-900 font-medium truncate max-w-[200px] md:max-w-xs">{title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Content */}
          <div className="lg:col-span-8">
            {/* Post Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-100 to-teal-50 text-emerald-800 border border-emerald-200/60">
                  <BookOpen className="w-3 h-3 me-1.5" />
                  {post.category}
                </span>
                {offerBadge && (
                  <span className="inline-flex items-center text-xs font-bold px-3 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-300">
                    {offerBadge}
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading leading-tight mb-6">
                {title}
              </h1>

              {/* Author & Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-5 bg-white border border-gray-200 rounded-xl text-xs md:text-sm text-gray-600 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 font-medium text-gray-900">
                    <User className="w-4 h-4 text-emerald-600" />
                    <span>{post.author}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>{readTime}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <ReadAloud text={fullText} />
                </div>
              </div>
            </div>

            {/* Campaign Offer Highlight Box (No Image, Rich Text Box) */}
            {campaign && (
              <div className="mb-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="inline-block text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-amber-950/60 px-3 py-1 rounded-full mb-3 border border-amber-400/30">
                    {isAr ? 'عرض حالي' : 'Current Offer'}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-white">
                    {offerBadge}
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-emerald-50">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <Button asChild className="bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold text-sm px-6">
                      <a href="tel:+97317777234" className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>{isAr ? 'اتصل وحجز العرض: 17777234' : 'Claim Offer: Call 17777234'}</span>
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="border-emerald-300/40 text-white hover:bg-emerald-800 font-semibold text-sm">
                      <a href="https://wa.me/97339224333" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-emerald-400" />
                        <span>{isAr ? 'تواصل عبر الواتساب' : 'WhatsApp Us'}</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Excerpt Intro — Pull-quote style */}
            <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-teal-50/50 border border-emerald-100 text-emerald-950 text-base md:text-lg leading-[1.85] mb-10 font-medium shadow-sm">
              <div className="absolute top-4 left-4 rtl:right-4 rtl:left-auto text-emerald-200 text-6xl font-serif leading-none select-none" aria-hidden="true">&ldquo;</div>
              <p className="relative z-10 ps-6 rtl:pe-6 rtl:ps-0">{excerpt}</p>
            </div>

            {/* Article Sections */}
            <div className="prose prose-emerald prose-lg max-w-none text-gray-800 space-y-10">
              {content.sections.map((section, idx) => (
                <section key={idx} className="space-y-5 relative">
                  {section.heading && (
                    <div className="flex items-start gap-4">
                      <div className="hidden md:flex shrink-0 w-10 h-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white text-sm font-bold shadow-md mt-0.5">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading leading-tight">
                        {section.heading}
                      </h2>
                    </div>
                  )}
                  {section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="text-gray-700 leading-[1.85] text-base md:text-lg">
                      {para}
                    </p>
                  ))}
                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className="space-y-3 my-4 bg-gradient-to-br from-gray-50 to-emerald-50/30 p-6 rounded-2xl border border-gray-100 list-none ps-0 shadow-sm">
                      {section.bulletPoints.map((point, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-gray-800 text-base">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* Subtle gradient divider between sections */}
                  {idx < content.sections.length - 1 && (
                    <div className="pt-4">
                      <div className="h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* FAQ Accordion Section */}
            {content.faqs && content.faqs.length > 0 && (
              <FAQSection faqs={content.faqs} isAr={isAr} />
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Quick Contact & Booking Widget */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm sticky top-24 space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1 font-heading">
                  {isAr ? 'مركز مزايا لطب الأسنان' : 'Mazaya Dental Center'}
                </h3>
                <p className="text-xs text-gray-600">
                  {isAr ? 'مدينة عيسى، مملكة البحرين' : 'Isa Town, Kingdom of Bahrain'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 space-y-3 text-xs text-emerald-950">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>
                    {isAr
                      ? 'مبنى 515، طريق 1332، مجمع 813، مدينة عيسى'
                      : 'Building 515, Road 1332, Block 813, Isa Town'}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{isAr ? 'مفتوح 7 أيام في الأسبوع (9 ص - 11 م)' : 'Open 7 days a week (9 AM - 11 PM)'}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button asChild className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm py-6">
                  <a href="tel:+97317777234" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{isAr ? 'اتصل الآن: 17777234' : 'Call Center: 17777234'}</span>
                  </a>
                </Button>

                <Button asChild variant="outline" className="w-full border-gray-300 text-gray-700 font-semibold text-sm">
                  <Link href="/contact">
                    {isAr ? 'حجز موعد عبر الموقع' : 'Book Online Consultation'}
                  </Link>
                </Button>
              </div>

              <div className="pt-4 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-500">
                  {isAr ? 'خدمة طب الأسنان في يوم واحد | تغطية تأمينية شاملة' : 'One-Day Dentistry | Full Insurance Coverage'}
                </p>
              </div>
            </div>
          </aside>
        </div>

      </div>
    </article>
  );
}

/* ─── Interactive FAQ Accordion ─── */
function FAQSection({ faqs, isAr }: { faqs: { question: string; answer: string }[]; isAr: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-14 pt-8 border-t border-gray-200">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-md">
          <span className="text-lg">?</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading">
          {isAr ? 'الأسئلة الشائعة حول هذا العلاج' : 'Frequently Asked Questions'}
        </h3>
      </div>
      <div className="space-y-3">
        {faqs.map((faq, fIdx) => {
          const isOpen = openIndex === fIdx;
          return (
            <div
              key={fIdx}
              className={`rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? 'bg-white border-emerald-200 shadow-md'
                  : 'bg-gray-50/80 border-gray-100 hover:border-emerald-100'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : fIdx)}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left rtl:text-right"
              >
                <h4 className={`font-bold text-base md:text-lg leading-snug transition-colors ${
                  isOpen ? 'text-emerald-800' : 'text-gray-900'
                }`}>
                  {faq.question}
                </h4>
                <ChevronDown className={`w-5 h-5 shrink-0 text-emerald-600 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`} />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                  <div className="h-px bg-gradient-to-r from-emerald-100 via-emerald-200 to-emerald-100 mb-4" />
                  <p className="text-gray-600 text-sm md:text-base leading-[1.8]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
