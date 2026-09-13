import type {Metadata} from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css';

const vazir = Vazirmatn({
  subsets: ['arabic', 'latin'],
  display: 'swap',
  variable: '--font-vazir',
});

export const metadata: Metadata = {
  title: 'طراحی انواع کارت ویزیت و ست اداری | گروه نرم‌افزاری هیمورا',
  description: 'سامانه تخصصی نمونه‌کارها و سفارش طراحی انواع کارت ویزیت، سرنسخه و ست اداری - تماس: ۰۹۳۵۴۴۶۷۲۶۹',
  keywords: [
    'طراحی کارت ویزیت',
    'طراحی کارت ویزیت پزشکی',
    'طراحی کارت ویزیت لوکس',
    'طراحی سرنسخه پزشکی',
    'طراحی ست اداری',
    'سفارش کارت ویزیت',
    'گروه نرم افزاری هیمورا',
    'چاپ کارت ویزیت',
    '۰۹۳۵۴۴۶۷۲۶۹'
  ],
  authors: [{name: 'تیم طراحی گروه نرم‌افزاری هیمورا'}],
  creator: 'تیم طراحی گروه نرم‌افزاری هیمورا',
  publisher: 'گروه نرم‌افزاری هیمورا',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'طراحی انواع کارت ویزیت و ست اداری | گروه نرم‌افزاری هیمورا',
    description: 'سامانه تخصصی نمونه‌کارها و سفارش طراحی انواع کارت ویزیت و سرنسخه پزشکی - تماس: ۰۹۳۵۴۴۶۷۲۶۹',
    type: 'website',
    locale: 'fa_IR',
    siteName: 'گروه نرم‌افزاری هیمورا',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'طراحی انواع کارت ویزیت و ست اداری | گروه نرم‌افزاری هیمورا',
    description: 'سامانه تخصصی نمونه‌کارها و سفارش طراحی انواع کارت ویزیت - تماس: ۰۹۳۵۴۴۶۷۲۶۹',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'خدمات تخصصی طراحی کارت ویزیت و هویت بصری هیمورا',
    'description': 'طراحی حرفه‌ای انواع کارت ویزیت پزشکی، شرکتی، لوکس، سرنسخه و ست اوراق اداری با استانداردهای چاپ افست و افکت‌های پس از چاپ',
    'telephone': '09354467269',
    'priceRange': '$$',
    'image': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqoFQ0ysgBuvUVWg5T11dYThcFtLGwz_cc4nZVSo6uuRgKOvAtLWCniPfPswEOm0YXQUnoTeE6bgBoK_UFtFzSgGcbbYtPQzwOsFElfHz2sOBR8_YZCtvntAUL7ADXCgPL-dN2CC0Gz_5_51JFOS9JgAPL9eZ-pmupvnk69utf_wkT8t8oh0oj0NeW6RjhEF2npGCb49JriRYDyB1C1ehvul_0IMMqcty-ycIpYwnQinuq4fQ5_26L',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'IR',
      'addressLocality': 'تهران',
    },
    'provider': {
      '@type': 'Organization',
      'name': 'گروه نرم‌افزاری هیمورا',
      'url': '/',
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'طراحی کارت ویزیت و ست چاپی',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'طراحی کارت ویزیت دورو پزشکی و تخصصی',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'طراحی سرنسخه A5 و فرم بالینی A4 پزشکی',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'طراحی کارت ویزیت لوکس طلاکوب و برجسته',
          },
        },
      ],
    },
  };

  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
      </head>
      <body className={`${vazir.className} font-sans antialiased bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
