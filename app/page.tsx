'use client';

import React, { useState } from 'react';
import { SecurityProvider, useAppTheme } from '@/components/SecurityShield';
import { DesignShowcase } from '@/components/DesignShowcase';
import { OrderModal } from '@/components/OrderModal';
import { SEOFaqSection } from '@/components/SEOFaqSection';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HemooraLogo } from '@/components/HemooraLogo';
import { AppleLiquidGlassBackground } from '@/components/AppleLiquidGlassBackground';
import { SmoothScroll } from '@/components/SmoothScroll';
import {
  CreditCard,
  Phone,
  MessageSquare,
  Printer,
  FileCheck,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

function HomeContent() {
  const { isDark } = useAppTheme();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedDesignForOrder, setSelectedDesignForOrder] = useState<string | undefined>(undefined);

  const handleOpenOrder = (designTitle?: string) => {
    setSelectedDesignForOrder(designTitle);
    setIsOrderModalOpen(true);
  };

  const phone = '۰۹۳۵۴۴۶۷۲۶۹';

  return (
    <div
      className={`min-h-screen flex flex-col selection:bg-cyan-500 selection:text-white relative transition-colors duration-300 overflow-x-hidden ${
        isDark ? 'text-slate-100' : 'text-slate-900'
      }`}
    >
      {/* 120Hz/60Hz Apple-grade Smooth Inertial Scrolling */}
      <SmoothScroll />

      {/* Apple Liquid Glass Mesh Background */}
      <AppleLiquidGlassBackground />

      {/* Top Header */}
      <Header onOpenOrderModal={() => handleOpenOrder()} phone={phone} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 flex flex-col gap-8 relative z-10">
        {/* Hero Section */}
        <section
          className={`relative overflow-hidden rounded-3xl p-6 sm:p-10 border transition-all ${
            isDark
              ? 'bg-slate-900/60 border-cyan-500/20 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl'
              : 'bg-white/70 border-white/60 shadow-xl shadow-slate-200/50 backdrop-blur-xl'
          }`}
        >
          {/* Subtle Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-gradient-to-tr from-indigo-500/15 via-purple-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-5">
            {/* Hemoora Signature Brand Badge */}
            <div className="flex justify-center mb-1">
              <HemooraLogo size="sm" variant="badge" />
            </div>

            {/* H1 SEO Main Heading */}
            <h1
              className={`text-2xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              طراحی هویت بصری، کارت ویزیت و ست اداری لوکس
            </h1>

            <p
              className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              استودیوی طراحی گرافیک و معماری هویت بصری هیمورا؛ خلق کارت ویزیت‌های خاص با متریال طلاکوب برجسته، یووی موضعی و لمینت مخملی. جهت سفارش اختصاصی با ما تماس بگیرید.
            </p>

            {/* Call to Actions & Direct Phone */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => handleOpenOrder()}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 hover:opacity-95 text-white font-black text-sm flex items-center gap-2.5 shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <CreditCard className="w-4 h-4" />
                <span>ثبت سفارش طراحی اختصاصی</span>
              </button>

              <a
                href="tel:09354467269"
                className={`px-6 py-3.5 rounded-2xl font-bold text-sm border flex items-center gap-2.5 transition-all ${
                  isDark
                    ? 'bg-slate-900/80 hover:bg-slate-800 text-cyan-400 border-cyan-500/30 backdrop-blur-md'
                    : 'bg-white/80 hover:bg-white text-slate-800 border-slate-200 backdrop-blur-md shadow-xs'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span dir="ltr">تماس مستقیم: {phone}</span>
              </a>

              <a
                href="https://wa.me/989354467269?text=%D8%B3%D9%84%D8%A7%D9%85%20%D9%82%D8%B5%D8%AF%20%D8%B3%D9%81%D8%A7%D8%B1%D8%B4%20%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C%20%DA%A9%D8%A7%D8%B1%D8%AA%20%D9%88%DB%8C%D8%B2%DB%8C%D8%AA%20%D8%AF%D8%A7%D8%B1%D9%85"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-5 py-3.5 rounded-2xl font-bold text-sm border flex items-center gap-2 transition-all ${
                  isDark
                    ? 'bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 border-emerald-500/40 backdrop-blur-md'
                    : 'bg-emerald-50/80 hover:bg-emerald-100 text-emerald-800 border-emerald-200 backdrop-blur-md'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>مشاوره واتس‌اپ</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div
              className={`pt-4 flex flex-wrap items-center justify-center gap-6 text-xs ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-cyan-500" />
                <span>تحویل فایل لایه‌باز CMYK و 300DPI</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Printer className="w-4 h-4 text-emerald-500" />
                <span>استاندارد چاپ افست و دیجیتال</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>طلاکوب گرم ۲۴ عیار و یووی موضعی</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                <span>طراحی ۱۰۰٪ اختصاصی و یونیک</span>
              </div>
            </div>
          </div>
        </section>

        {/* Design Showcase with Interactive Front/Back Card Controls */}
        <DesignShowcase onOpenOrderModal={handleOpenOrder} />

        {/* SEO Rich FAQ & Structured Schema Info */}
        <SEOFaqSection />
      </main>

      {/* Global Footer */}
      <Footer onOpenOrderModal={() => handleOpenOrder()} phone={phone} />

      {/* Direct Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialDesignTitle={selectedDesignForOrder}
        phone={phone}
      />
    </div>
  );
}

export default function HomePage() {
  return (
    <SecurityProvider>
      <HomeContent />
    </SecurityProvider>
  );
}
