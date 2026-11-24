"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import BookAppointmentModal from "@/components/BookAppointmentModal";
import ServiceDiagram from "@/components/service/ServiceDiagram";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { serviceChrome, type ServicePageContent } from "@/lib/servicePages";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.0456052774434!2d50.55942427563794!3d26.162644177102262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49afe9fbe4a535%3A0xaaa418f0653d50b1!2sMazaya%20Dental%20Center!5e0!3m2!1sen!2sin!4v1741886257295!5m2!1sen!2sin";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#3A3A3A]">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#4A6356]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ServicePageClient({
  service,
  serifClassName,
}: {
  service: ServicePageContent;
  serifClassName: string;
}) {
  const { language } = useLanguage();
  const copy = service[language];
  const ui = serviceChrome[language];
  const heading = language === "ar" ? "font-heading" : serifClassName;
  const [openFaq, setOpenFaq] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const openBooking = () => setIsModalOpen(true);

  return (
    <article className="bg-white text-[#3A3A3A]">
      <section className="bg-[#F3F0E8]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#4A6356]">
              {copy.eyebrow}
            </p>
            <h1 className={`${heading} text-4xl font-semibold leading-tight text-[#243F31] sm:text-5xl`}>
              {copy.heroTitle}
            </h1>
            <p className="mt-6 text-[15px] leading-relaxed text-[#3A3A3A]">{copy.heroLead}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#3A3A3A]">{copy.heroSupport}</p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <button type="button" onClick={openBooking} className="bg-[#4A6356] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#3D5448]">
                {ui.consultCta}
              </button>
              <a href="tel:+97317777234" className="inline-flex items-center gap-2 text-sm font-medium text-[#243F31] underline-offset-4 hover:underline">
                <span>{ui.callWord}</span>
                <span dir="ltr">{ui.phoneDisplay}</span>
              </a>
            </div>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-xl bg-[#D5DDD4] sm:min-h-[340px]">
            <Image
              src={service.heroImage}
              alt={copy.heroImageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
          <div className="overflow-hidden rounded-xl bg-[#D5DDD4]">
            <ServiceDiagram slug={service.slug} label={copy.diagramLabel} />
          </div>
          <div>
            <h2 className={`${heading} text-3xl font-semibold leading-tight text-[#243F31] sm:text-4xl`}>
              {copy.whatTitle}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed">{copy.whatBody}</p>
            <div className="mt-6">
              <BulletList items={copy.whatPoints} />
            </div>
            <button type="button" onClick={openBooking} className="mt-8 bg-[#4A6356] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#3D5448]">
              {ui.bookCta}
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F0E8]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className={`${heading} text-3xl font-semibold text-[#243F31] sm:text-4xl`}>{copy.whyTitle}</h2>
          <div className="mt-8 max-w-3xl">
            <BulletList items={copy.whyPoints} />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className={`${heading} text-3xl font-semibold text-[#243F31] sm:text-4xl`}>{copy.benefitsTitle}</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {copy.benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-md bg-[#F6F3EC] px-5 py-6">
                <h3 className="text-base font-semibold text-[#243F31]">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A4A4A]">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F0E8]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <h2 className={`${heading} text-3xl font-semibold leading-tight text-[#243F31] sm:text-4xl`}>
              {copy.suitableTitle}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed">{copy.suitableBody}</p>
            <p className="mt-4 text-[15px] leading-relaxed">{copy.suitableClose}</p>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-xl bg-[#D5DDD4] sm:min-h-[320px]">
            <Image
              src={service.detailImage}
              alt={copy.suitableImageAlt}
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className={`${heading} text-3xl font-semibold text-[#243F31] sm:text-4xl`}>{copy.approachTitle}</h2>
          <p className="mt-5 max-w-3xl text-[15px] leading-relaxed">{copy.approachIntro}</p>
          <div className="mt-6 max-w-3xl">
            <BulletList items={copy.approachPoints} />
          </div>
        </div>
      </section>

      <section className="bg-[#F3F0E8]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-16">
          <div>
            <h2 className={`${heading} text-3xl font-semibold text-[#243F31]`}>{copy.safetyTitle}</h2>
            <p className="mt-4 text-[15px] leading-relaxed">{copy.safetyText}</p>
          </div>
          <div>
            <h2 className={`${heading} text-3xl font-semibold text-[#243F31]`}>{copy.philosophyTitle}</h2>
            <p className="mt-4 text-[15px] leading-relaxed">{copy.philosophyText}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#4A6356] text-white">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
          <h2 className={`${heading} text-3xl font-semibold sm:text-4xl`}>{copy.ctaTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">{copy.ctaText}</p>
          <button
            type="button"
            onClick={openBooking}
            className="mt-6 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#243F31] transition-colors hover:bg-[#F3F0E8]"
          >
            {ui.bookCta}
          </button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className={`${heading} text-3xl font-semibold text-[#243F31] sm:text-4xl`}>{ui.faqTitle}</h2>
          <div className="mt-8 border-t border-[#E4E0D6]">
            {copy.faqs.map((faq, index) => {
              const open = openFaq === index;
              return (
                <div key={faq.question} className="border-b border-[#E4E0D6]">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-4 text-start"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? -1 : index)}
                  >
                    <span className="text-sm font-semibold text-[#243F31] sm:text-base">{faq.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-[#4A6356] transition-transform ${
                        open ? "rotate-0" : "-rotate-90 rtl:rotate-90"
                      }`}
                    />
                  </button>
                  {open && <p className="pb-5 text-sm leading-relaxed text-[#4A4A4A]">{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F0E8]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <h2 className={`${heading} text-3xl font-semibold text-[#243F31]`}>{ui.locationTitle}</h2>
            <div className="relative mt-6 h-64 overflow-hidden rounded-xl bg-[#D5DDD4] sm:h-72">
              <iframe
                src={MAP_SRC}
                title={ui.locationTitle}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#3A3A3A]">{ui.locationAddress}</p>
            <p className="mt-2 text-sm leading-relaxed text-[#3A3A3A]">{ui.locationNote}</p>
          </div>
          <div>
            <h2 className={`${heading} text-3xl font-semibold text-[#243F31]`}>{ui.formTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed">
              {ui.formIntroBefore}{" "}
              <span dir="ltr" className="inline-block">{ui.phoneDisplay}</span>{" "}
              {ui.formIntroAfter}
            </p>
            {sent ? (
              <p className="mt-8 text-sm font-medium text-[#243F31]">{ui.sent}</p>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(true);
                }}
              >
                <label className="block text-sm text-[#243F31]">
                  {ui.name}
                  <input required name="name" className="mt-1.5 block w-full border border-[#D9D4C8] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#4A6356]" />
                </label>
                <label className="block text-sm text-[#243F31]">
                  {ui.email}
                  <input required type="email" name="email" className="mt-1.5 block w-full border border-[#D9D4C8] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#4A6356]" />
                </label>
                <label className="block text-sm text-[#243F31]">
                  {ui.phone}
                  <input required type="tel" name="phone" className="mt-1.5 block w-full border border-[#D9D4C8] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#4A6356]" />
                </label>
                <label className="block text-sm text-[#243F31]">
                  {ui.message}
                  <textarea required name="message" rows={4} className="mt-1.5 block w-full resize-y border border-[#D9D4C8] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#4A6356]" />
                </label>
                <button type="submit" className="bg-[#4A6356] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#3D5448]">
                  {ui.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <p className="mx-auto max-w-6xl px-4 py-8 text-xs leading-relaxed text-[#6B6B6B] sm:px-6 lg:px-8">
        {ui.disclaimer}
      </p>

      <BookAppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </article>
  );
}
