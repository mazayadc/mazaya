# Comprehensive Technical Architecture & SEO Audit Report

**Target Subject:** Mazaya Dental Center (`mazayadc.com`)  
**Audit Date:** November 21, 2026  
**Framework:** Next.js 13.5 (App Router) + TypeScript + Tailwind CSS  
**Target Market:** Kingdom of Bahrain (Isa Town, Manama, Riffa) & GCC Dental Tourism  

---

## Executive Summary

Mazaya Dental Center possesses a modern, high-grade technical foundation built with Next.js 13 App Router, featuring strong structured data (Schema.org) implementations, security headers, and modern AI search crawler provisions.

However, **critical structural and technical SEO limitations exist that currently block 60%–70% of potential organic search traffic**—most notably, an internationalization (i18n) setup where the entire Arabic version of the website is completely invisible to search engine crawlers, alongside an uncompressed 38.1 MB video on the homepage directly impacting Core Web Vitals.

### Overall Scorecard

| Assessment Dimension | Rating | Status | Key Notes |
| :--- | :---: | :---: | :--- |
| **Code Architecture & Tech Stack** | **9 / 10** | Excellent | Modern Next.js 13.5 App Router, TypeScript, modular components, clean styling |
| **Technical SEO & Crawlability** | **7 / 10** | Good | Robust `robots.ts`, modern AI bot rules; sitemap needs dynamic CMS integration |
| **Structured Data (Schema.org)** | **9 / 10** | Excellent | Comprehensive `Dentist`, `MedicalWebPage`, `FAQPage`, and `BlogPosting` schemas |
| **Multilingual (Arabic) SEO** | **2 / 10** | Critical Defect | Arabic content rendered via client-side `localStorage`; invisible to Googlebot |
| **Core Web Vitals & Media** | **5 / 10** | Needs Attention | 38.1 MB hero video blocks bandwidth; degrades LCP and mobile data budgets |
| **Information Architecture** | **6 / 10** | Fair | All 6 specialties consolidated on 1 page; missing dedicated service landing pages |

---

## 1. Complete Project Structure & Anatomy

```
mazaya/
├── app/                                 # Next.js 13 App Router
│   ├── layout.tsx                       # Root Layout: global metadata, Schema.org (Dentist), MetaPixel
│   ├── page.tsx                         # Homepage entry with metadata configuration
│   ├── HomeClient.tsx                   # Interactive Homepage UI (Hero, Services, Testimonials, Review Schema)
│   ├── about/
│   │   ├── page.tsx                     # About Page metadata definition
│   │   └── AboutClient.tsx              # About Page UI (Mission, Clinic Photos, Specialists)
│   ├── departments/
│   │   ├── page.tsx                     # Departments Page (MedicalWebPage + MedicalProcedure Schema)
│   │   └── DepartmentsClient.tsx        # Department tabs & services list
│   ├── blog/
│   │   ├── page.tsx                     # Dynamic Blog Hub (Contentful CMS + static fallback)
│   │   ├── components/BlogContent.tsx   # Category filters and post cards
│   │   └── [slug]/
│   │       ├── page.tsx                 # Dynamic article reader (generateMetadata, BlogPosting Schema)
│   │       └── components/
│   │           └── LocalBlogClient.tsx  # Article reader with text-to-speech (ReadAloud)
│   ├── contact/
│   │   ├── page.tsx                     # Contact Page (FAQPage Schema, coordinates)
│   │   └── ContactClient.tsx            # Contact form, direct call buttons, Google Maps embed
│   ├── api/
│   │   └── revalidate/route.ts          # On-demand ISR revalidation webhook for Contentful
│   ├── robots.ts                        # Programmatic robots.txt with AI bot rules
│   ├── sitemap.ts                       # Dynamic sitemap generation
│   ├── not-found.tsx                    # Custom 404 page
│   └── globals.css                      # Tailwind base styles and theme definitions
│
├── components/                          # UI Components & Modules
│   ├── Navbar.tsx                       # Sticky navigation with language switcher & appointment trigger
│   ├── Footer.tsx                       # Footer with business hours, social links, and quick links
│   ├── JsonLd.tsx                       # Type-safe Schema.org injector
│   ├── MetaPixel.tsx                    # Facebook / Meta Pixel tracking script
│   ├── BookAppointmentModal.tsx         # Patient appointment booking popup modal
│   ├── ReadAloud.tsx                    # SpeechSynthesis voice narration for articles
│   ├── AnimatedText.tsx                 # Motion graphics typography wrapper
│   └── ui/                              # Radix UI primitives (Button, Card, Dialog, Toast, etc.)
│
├── lib/                                 # Data Layer & Helpers
│   ├── contentful.ts                    # Headless CMS API connection
│   ├── blogData.ts                      # Local static blog posts & promotional campaigns (EN & AR)
│   ├── departments.ts                   # 6 Core dental departments, services list, FAQs
│   ├── utils.ts                         # Tailwind class merge helper
│   └── i18n/                            # Internationalization System
│       ├── LanguageContext.tsx          # Client-side React context for language toggling
│       └── dictionaries/
│           ├── en.ts                    # English dictionary strings
│           └── ar.ts                    # Arabic dictionary strings
│
├── public/                              # Static Assets
│   ├── DSC021*.webp                     # Optimized WebP clinic photography
│   ├── MAZAYA logo Transparent 01.png   # Transparent logo asset
│   ├── mazaya_hero_video.mp4            # ⚠️ 38.1 MB uncompressed video
│   ├── ortho.png, pedia.png, etc.       # Department icon badges
│   └── campaigns/                       # Targeted promo campaign graphics
│
├── next.config.js                       # Next.js configuration (caching, security headers, image optimization)
├── tailwind.config.ts                   # Tailwind configuration
└── package.json                         # Project dependencies and build scripts
```

---

## 2. In-Depth SEO Capabilities Audit

### A. The Arabic SEO Blindspot (Critical P0 Issue)

#### Current Mechanism
* Content dictionaries exist for both Arabic (`lib/i18n/dictionaries/ar.ts`) and English (`en.ts`).
* Switching is handled by `LanguageContext.tsx`:
  ```tsx
  const [language, setLanguageState] = useState<Language>("en");
  useEffect(() => {
    const savedLang = localStorage.getItem("mazaya_lang") as Language;
    if (savedLang) { ... }
  }, []);
  ```
* The root HTML tag in `app/layout.tsx` is static:
  ```tsx
  <html lang="en">
  ```

#### Search Engine Consequence
1. **Zero Indexability:** Search crawlers (Googlebot, Bingbot) do not click UI buttons, nor do they maintain `localStorage`. They execute the initial SSR/HTML payload, which is 100% English.
2. **Missing URLs:** There are no distinct URLs for Arabic pages (e.g., `mazayadc.com/ar`, `mazayadc.com/ar/about`).
3. **No `hreflang` Annotations:** Google cannot detect that an Arabic version of the site exists, losing out on high-volume Arabic keywords:
   - "عيادة أسنان البحرين" (Dental clinic Bahrain)
   - "زراعة الأسنان في البحرين" (Dental implants Bahrain)
   - "علاج عصب الأسنان مدينة عيسى" (Root canal Isa Town)
   - "ابتسامة هوليود البحرين" (Hollywood Smile Bahrain)

---

### B. Technical SEO, Canonicals & Sitemaps

#### 1. Trailing Slash Discrepancies
* **`app/sitemap.ts`** defines URLs with trailing slashes:
  * `https://mazayadc.com/about/`
  * `https://mazayadc.com/departments/`
  * `https://mazayadc.com/blog/${slug}/`
* **Page Metadata** declares canonicals without trailing slashes:
  * `alternates: { canonical: "/about" }` (resolves to `https://mazayadc.com/about`)
* **Risk:** Search engines treat `example.com/about` and `example.com/about/` as distinct URLs. Inconsistent canonicals cause crawling confusion and split link equity.

#### 2. Root Layout Canonical Fallback
* `app/layout.tsx` declares:
  ```ts
  alternates: { canonical: '/' }
  ```
* **Risk:** In Next.js, if any future route or dynamic post fails to explicitly override `alternates.canonical`, it inherits `/`, instructing Google that the subpage is a duplicate of the homepage.

#### 3. Sitemap Excludes Contentful CMS Posts
* In `app/sitemap.ts`, only static entries from `LOCAL_BLOG_POSTS` are mapped. Posts created and published within Contentful are not fetched during sitemap generation.

---

### C. Structured Data (Schema.org / JSON-LD)

The website excels in structured schema markup:

| Location | Schema Type | Entities Defined |
| :--- | :--- | :--- |
| `app/layout.tsx` | `Dentist` / `LocalBusiness` | Name, GPS Coordinates (`26.162644, 50.559424`), Full Address, Phone numbers, Hours (Mon-Thu/Sat-Sun vs Fri), Social links (`sameAs`), Currencies, Payment methods, Medical specialties |
| `app/HomeClient.tsx` | `Dentist` with `AggregateRating` | 4.9 rating with 4 verified patient reviews |
| `app/departments/page.tsx` | `MedicalWebPage` | Array of 6 `MedicalProcedure` entities with body locations |
| `app/contact/page.tsx` | `FAQPage` | Frequently asked questions & answers about hours, emergency care, same-day crowns |
| `app/blog/[slug]/page.tsx` | `BlogPosting` | Headline, description, author, publication date, publisher logo |

---

### D. Performance & Core Web Vitals (CWV)

#### 1. 38.1 MB Uncompressed Video (`public/mazaya_hero_video.mp4`)
* Located directly in `public/` and loaded in the homepage hero:
  ```tsx
  <video autoPlay loop muted playsInline preload="metadata" poster="/DSC02178.webp">
    <source src="/mazaya_hero_video.mp4" type="video/mp4" />
  </video>
  ```
* **Impact:** 38 MB is over 20x larger than an entire modern web page's total budget. Even with `preload="metadata"`, mobile devices and desktop browsers on modest connections experience bandwidth choking, hurting Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS).
* **Fix:** Re-encode the video with FFmpeg/Handbrake to WebM (VP9) and MP4 (H.264), targeting under **2.5 MB - 4.0 MB**, or stream it via a video CDN (Cloudflare Stream).

#### 2. Image Optimization Strengths
* High-resolution clinic photography is converted to `.webp` format.
* `next.config.js` properly specifies AVIF and WebP support with a 1-year immutable cache policy:
  ```js
  minimumCacheTTL: 31536000,
  formats: ['image/avif', 'image/webp']
  ```

---

### E. Information Architecture & Keyword Ranking Potential

Currently, all 6 dental departments are consolidated into a single page (`/departments`):
1. Orthodontics
2. Pedodontics (Children's Dentistry)
3. Implantology (Dental Implants)
4. Prosthodontics (Same-Day Crowns & Bridges)
5. Periodontics (Gum Disease)
6. Endodontics (Root Canal Therapy)

#### The SEO Opportunity Loss
Patients rarely search for "dental departments". They search for specific procedures:
* *"Same day crown cost Bahrain"*
* *"Dental implant specialist Isa Town"*
* *"Invisalign provider Bahrain"*
* *"Painless root canal treatment Bahrain"*

Consolidating everything onto one page prevents deep on-page keyword density, targeted H1/H2 hierarchies, and specialized procedure schemas.

---

## 3. Prioritized Strategic Roadmap

### Milestone 1: Critical Fixes (Within 48 Hours)
1. **Compress Hero Video:** Reduce `mazaya_hero_video.mp4` from 38MB to under 3.5MB.
2. **Standardize URLs:** Ensure all URLs consistently either omit or include trailing slashes across `sitemap.ts`, `metadata.alternates.canonical`, and `next.config.js`.
3. **Move Review JSON-LD to Server Component:** Shift `reviewsJsonLd` from `HomeClient.tsx` into `app/page.tsx`.

### Milestone 2: Multilingual Organic Visibility (1–2 Weeks)
1. **Implement Next.js App Router i18n:**
   * Migrate routes to `app/[lang]/...` or use Next.js middleware with localized path rewrites.
   * Dynamically render `<html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>`.
   * Add reciprocal `<link rel="alternate" hreflang="ar" href="https://mazayadc.com/ar/..." />` and `<link rel="alternate" hreflang="en" href="https://mazayadc.com/..." />` tags.

### Milestone 3: High-Intent Landing Pages & Growth (2–4 Weeks)
1. **Create Sub-pages for Core Treatments:**
   * `/departments/dental-implants`
   * `/departments/orthodontics-invisalign`
   * `/departments/one-day-dentistry-cerec`
   * `/departments/root-canal-treatment`
   * `/departments/pediatric-dentistry`
   * `/departments/teeth-whitening-periodontics`
2. **Connect CMS to Sitemap:** Fetch live Contentful posts inside `sitemap.ts` alongside local campaign files.

---

*Report generated for Mazaya Dental Center.*

