'use client';

import React, { useState } from 'react';
import { WatermarkOverlay } from './WatermarkOverlay';
import { useAppTheme } from './SecurityShield';
import {
  RotateCw,
  Phone,
  Layers,
  FileText,
  Building,
  Scale,
  HeartPulse,
  Crown,
  Globe,
  Mail,
  ShieldCheck,
  Sparkles,
  QrCode,
  Compass,
} from 'lucide-react';

interface DesignShowcaseProps {
  onOpenOrderModal: (designTitle?: string) => void;
}

export const DesignShowcase: React.FC<DesignShowcaseProps> = ({ onOpenOrderModal }) => {
  const { isDark } = useAppTheme();
  const [activeTab, setActiveTab] = useState<'all' | 'medical' | 'corporate' | 'luxury' | 'stationery'>('all');
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const setSide = (id: string, side: 'front' | 'back') => {
    setFlippedCards((prev) => ({ ...prev, [id]: side === 'back' }));
  };

  const handleTabChange = (id: 'all' | 'medical' | 'corporate' | 'luxury' | 'stationery') => {
    setActiveTab(id);
  };

  const categories = [
    { id: 'all', label: 'همه طرح‌ها', icon: Layers },
    { id: 'medical', label: 'کارت ویزیت تخصصی پزشکی و قلب', icon: HeartPulse },
    { id: 'luxury', label: 'کارت ویزیت لوکس بلک اند گلد', icon: Crown },
    { id: 'corporate', label: 'کارت ویزیت مدرن شرکتی و تک', icon: Building },
    { id: 'stationery', label: 'سرنسخه و اوراق پزشکی A5', icon: FileText },
  ];

  return (
    <section className="w-full flex flex-col gap-8 py-4" id="showcase-section">
      {/* Category Filter Bar */}
      <div
        className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-3 rounded-2xl border ${
          isDark ? 'bg-slate-900/70 border-cyan-500/20 shadow-xl' : 'bg-white border-slate-200 shadow-xs'
        }`}
      >
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleTabChange(cat.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white shadow-md shadow-blue-500/20 font-bold'
                    : isDark
                    ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Designs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 1. MEDICAL & CARDIOVASCULAR (INSPIRED BY REFERENCE IMAGE) */}
        {(activeTab === 'all' || activeTab === 'medical') && (
          <article
            className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-6 border transition-all ${
              isDark
                ? 'bg-slate-900/80 border-cyan-500/20 shadow-xl shadow-cyan-950/20'
                : 'bg-white border-slate-200/90 shadow-lg shadow-slate-100'
            }`}
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                    کد: MED-CARDIO-2025
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-md ${
                      isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    قطع استاندارد: ۸۵ × ۴۸ میلی‌متر
                  </span>
                </div>
                <h3 className={`text-lg sm:text-xl font-black mt-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  کارت ویزیت تخصصی قلب و عروق (طرح شکوه‌ی دارک پترولیوم)
                </h3>
                <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  طراحی مینیمال پزشکی با خط ضربان اختصاصی، استتوسکوپ قلبی و ترکیب دارک بلو/سیان
                </p>
              </div>

              {/* Side toggle */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 self-start">
                <button
                  onClick={() => setSide('med-card', 'front')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    !flippedCards['med-card']
                      ? 'bg-white dark:bg-slate-900 text-cyan-700 dark:text-cyan-300 shadow-xs'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  روی کارت
                </button>
                <button
                  onClick={() => setSide('med-card', 'back')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    flippedCards['med-card']
                      ? 'bg-white dark:bg-slate-900 text-cyan-700 dark:text-cyan-300 shadow-xs'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  پشت کارت
                </button>
                <button
                  onClick={() => toggleFlip('med-card')}
                  title="چرخش کارت"
                  className="p-1 rounded-lg text-slate-500 hover:text-cyan-500 transition-colors"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Realistic Floating Mockup Container */}
            <div className="w-full flex items-center justify-center py-4 relative">
              <div className="w-full max-w-[440px] aspect-[85/48] rounded-[22px] shadow-[0_20px_50px_rgba(6,38,54,0.25)] relative transition-all duration-500 overflow-hidden border border-cyan-500/20">
                {/* Front Side */}
                {!flippedCards['med-card'] ? (
                  <div className="w-full h-full bg-gradient-to-br from-[#06202c] via-[#0b384d] to-[#041620] text-white p-5 sm:p-6 flex flex-col justify-between relative select-none">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-400/20 via-sky-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-teal-500/15 via-blue-600/10 to-transparent rounded-full blur-2xl pointer-events-none" />

                    <div className="flex justify-end items-start relative z-10">
                      <div className="flex items-center gap-2.5">
                        <div className="text-left font-mono">
                          <div className="text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-sky-100 font-bold tracking-wider">
                            DR. SHOKUHI
                          </div>
                          <div className="text-[8px] text-cyan-200/60 font-medium">CARDIOLOGY</div>
                        </div>

                        <div className="relative flex items-center justify-center">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500/30 to-blue-500/20 p-1 flex items-center justify-center">
                            <svg
                              className="w-10 h-10 text-cyan-300"
                              viewBox="0 0 100 100"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M50 82C50 82 20 62 20 38C20 25 31 16 43 18C50 19 56 24 58 28C60 24 66 19 73 18C85 16 96 25 96 38C96 62 66 82 66 82"
                                stroke="currentColor"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <circle cx="34" cy="18" r="4" fill="currentColor" />
                              <circle cx="82" cy="18" r="4" fill="currentColor" />
                            </svg>

                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-4.5 h-4.5 bg-gradient-to-b from-white to-slate-100 text-[#092b3a] rounded-xs flex items-center justify-center font-black text-xs shadow-md">
                                +
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="my-auto relative z-10 space-y-1">
                      <div className="flex items-baseline gap-2">
                        <h4 className="text-lg sm:text-2xl font-black tracking-tight font-sans text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-100">
                          Dr. Nasrin Shokuhi
                        </h4>
                      </div>

                      <div className="w-48 h-[2px] bg-gradient-to-r from-cyan-400 via-sky-300 to-transparent rounded-full" />

                      <p className="text-xs sm:text-sm text-cyan-200 font-light tracking-wide pt-0.5">
                        Cardiovascular specialist
                      </p>

                      <p className="text-[11px] text-slate-200 font-medium pt-1">
                        دکتر نسرین شکوهی • متخصص بیماری‌های قلب، عروق و آنژیوپلاستی
                      </p>
                    </div>

                    <div className="relative z-10 pt-2 flex items-end justify-between">
                      <div className="w-[50%] flex items-center relative">
                        <svg
                          className="w-full h-8 text-cyan-300 overflow-visible filter drop-shadow-[0_0_6px_rgba(6,182,212,0.4)]"
                          viewBox="0 0 200 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 24 L40 24 L48 24 L52 8 L58 38 L65 2 L72 34 L78 20 L84 26 L90 24 L200 24"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      <div className="text-right text-[9px] sm:text-[10px] space-y-1 text-cyan-100 font-mono">
                        <div className="flex items-center justify-end gap-1.5 hover:text-white transition-colors">
                          <span dir="ltr">www.Dr.Nasrin.Shokuhi.com</span>
                          <Globe className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                        </div>
                        <div className="flex items-center justify-end gap-1.5 hover:text-white transition-colors">
                          <span dir="ltr">Dr.Nasrin.Shokuhi@gmail.com</span>
                          <Mail className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                        </div>
                        <div className="flex items-center justify-end gap-1.5 font-bold text-white">
                          <span dir="ltr">تلفن و نوبت‌دهی: ۰۹۳۵۴۴۶۷۲۶۹</span>
                          <Phone className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Back Side */
                  <div className="w-full h-full bg-gradient-to-br from-[#041720] via-[#092938] to-[#031118] text-white p-6 flex flex-col items-center justify-between text-center relative select-none">
                    <div className="w-full flex items-center justify-between text-[9px] font-mono text-cyan-400">
                      <span>APPOINTMENT &amp; CLINIC CARD</span>
                      <span className="bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800/40 font-bold">
                        نظام پزشکی: ۱۱۴۷۸۲
                      </span>
                    </div>

                    <div className="flex flex-col items-center justify-center my-auto gap-2">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 p-[1.5px] shadow-lg shadow-cyan-500/25">
                        <div className="w-full h-full bg-gradient-to-br from-[#06202c] to-[#0b384d] rounded-[14px] flex items-center justify-center">
                          <HeartPulse className="w-7 h-7 text-cyan-300" />
                        </div>
                      </div>

                      <div className="text-sm sm:text-base font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-sky-200 uppercase">
                        SHOKUHI HEART &amp; CARDIO CLINIC
                      </div>
                      <div className="text-xs text-cyan-200 font-medium">
                        کلینیک تخصصی قلب، تست ورزش، اکوکاردیوگرافی و آنژیوگرافی
                      </div>
                      <div className="text-[10px] text-slate-300 mt-1 max-w-[80%]">
                        تهران، خ ولیعصر، نرسیده به توانیر، ساختمان پزشکان دی، طبقه ۳
                      </div>
                    </div>

                    <div className="w-full flex items-center justify-between border-t border-cyan-900/60 pt-2 text-[9px] text-cyan-300 font-mono">
                      <span>شنبه تا چهارشنبه ۱۶ الی ۲۰</span>
                      <span>سفارش چاپ: ۰۹۳۵۴۴۶۷۲۶۹</span>
                    </div>
                  </div>
                )}

                <WatermarkOverlay />
              </div>
            </div>

            {/* Quick Action & Specifications */}
            <div
              className={`flex flex-wrap items-center justify-between gap-3 pt-4 border-t ${
                isDark ? 'border-slate-800' : 'border-slate-100'
              }`}
            >
              <div className={`text-xs space-y-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <div className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>متریال: لمینت مات مخملی ۳۰۰ میکرون + گوشه‌گرد استاندارد</span>
                </div>
                <div className="text-[11px]">طراحی با بالاترین استانداردهای چاپ افست و تفکیک رنگ</div>
              </div>

              <button
                onClick={() => {
                  onOpenOrderModal('کارت ویزیت تخصصی قلب و عروق طرح شکوه‌ی (کد MED-CARDIO-2025)');
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-cyan-600/20 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>سفارش این طرح (۰۹۳۵۴۴۶۷۲۶۹)</span>
              </button>
            </div>
          </article>
        )}

        {/* 2. ULTRA-LUXURY BLACK & GOLD MINIMALIST CARD */}
        {(activeTab === 'all' || activeTab === 'luxury') && (
          <article
            className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-6 border transition-all ${
              isDark
                ? 'bg-slate-900/80 border-amber-500/20 shadow-xl shadow-amber-950/20'
                : 'bg-white border-slate-200/90 shadow-lg shadow-slate-100'
            }`}
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                    کد: LUX-GOLD-2025
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-md ${
                      isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    قطع: ۸۵ × ۴۸ میلی‌متر
                  </span>
                </div>
                <h3 className={`text-lg sm:text-xl font-black mt-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  کارت ویزیت لوکس بلک اند گلد (معماری، املاک و برندهای خاص)
                </h3>
                <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  طلاکوب برجسته گرم روی مقوای فابریانو مشکی ۶۰۰ گرم با تکسچر مینیمال، یووی موضعی و حس لمس اشرافی
                </p>
              </div>

              {/* Side toggle */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 self-start">
                <button
                  onClick={() => setSide('lux-card', 'front')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    !flippedCards['lux-card']
                      ? 'bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-300 shadow-xs'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  روی کارت
                </button>
                <button
                  onClick={() => setSide('lux-card', 'back')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    flippedCards['lux-card']
                      ? 'bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-300 shadow-xs'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  پشت کارت
                </button>
                <button
                  onClick={() => toggleFlip('lux-card')}
                  title="چرخش کارت"
                  className="p-1 rounded-lg text-slate-500 hover:text-amber-500 transition-colors"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Realistic Floating Mockup Container */}
            <div className="w-full flex items-center justify-center py-4 relative">
              <div className="w-full max-w-[440px] aspect-[85/48] rounded-[22px] shadow-[0_20px_50px_rgba(0,0,0,0.45)] relative transition-all duration-500 overflow-hidden border border-amber-500/25">
                {/* Front Side */}
                {!flippedCards['lux-card'] ? (
                  <div className="w-full h-full bg-gradient-to-br from-[#0e0e12] via-[#1a1714] to-[#08080a] text-amber-100 p-5 sm:p-6 flex flex-col justify-between relative select-none">
                    <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-amber-500/15 via-yellow-600/10 to-transparent rounded-full blur-2xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-amber-600/10 to-transparent rounded-full blur-2xl pointer-events-none" />

                    <div className="flex items-start justify-between relative z-10">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ffe599] via-[#d4af37] to-[#8a661c] p-[1.5px] shadow-lg shadow-amber-500/20">
                          <div className="w-full h-full bg-gradient-to-br from-[#121214] to-[#1c1917] rounded-[10px] flex items-center justify-center">
                            <Crown className="w-5 h-5 text-amber-300" />
                          </div>
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffe599] via-[#f5b324] to-[#d4af37] font-mono tracking-widest uppercase">
                            AURUM STUDIO
                          </div>
                          <div className="text-[8px] text-amber-200/70 font-mono">ARCHITECTURAL DESIGN</div>
                        </div>
                      </div>

                      <div className="text-[9px] font-mono text-amber-300 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-500/30 font-bold">
                        PREMIUM BLACK &amp; GOLD
                      </div>
                    </div>

                    <div className="my-auto relative z-10 space-y-1">
                      <h4 className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ffe599] via-[#f5b324] to-[#e6a519]">
                        مهندس آرشام ستوده
                      </h4>
                      <div className="w-40 h-[2px] bg-gradient-to-r from-amber-400 via-yellow-200 to-transparent rounded-full" />
                      <p className="text-xs text-amber-200/90 font-medium">معمار ارشد و مدیر پروژه‌های لوکس ساختمانی</p>
                      <p className="text-[10px] text-slate-400 font-mono">Chief Architect &amp; Interior Designer</p>
                    </div>

                    <div className="relative z-10 flex items-end justify-between border-t border-amber-500/20 pt-2 text-[9px] sm:text-[10px] text-amber-200/80 font-mono">
                      <div>
                        <div className="text-slate-300">arsham@aurum-studio.com</div>
                        <div className="text-amber-300 font-bold" dir="ltr">
                          +98 935 446 7269
                        </div>
                      </div>
                      <div className="text-left text-slate-300">
                        <div>TEHRAN • ELAHIYEH</div>
                        <div className="text-amber-300 font-bold">WWW.AURUM.DESIGN</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Back Side */
                  <div className="w-full h-full bg-gradient-to-br from-[#09090b] via-[#141210] to-[#040405] text-amber-100 p-6 flex flex-col items-center justify-between text-center relative select-none">
                    <div className="w-full flex justify-between text-[9px] font-mono text-amber-400">
                      <span>LUXURY ARCHITECTURE</span>
                      <span className="bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-700/40">TEHRAN HQ</span>
                    </div>

                    <div className="flex flex-col items-center justify-center my-auto gap-2">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ffe599] via-[#f5b324] to-[#b37a12] p-[1.5px] shadow-lg shadow-amber-500/30">
                        <div className="w-full h-full bg-gradient-to-br from-[#121110] to-[#1c1917] rounded-[14px] flex items-center justify-center">
                          <Crown className="w-7 h-7 text-amber-300" />
                        </div>
                      </div>
                      <div className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffe599] via-[#f5b324] to-[#e6a519] tracking-widest uppercase">
                        AURUM LUXURY HOMES
                      </div>
                      <div className="text-xs text-amber-200/90 font-medium">طراحی، نظارت و اجرای ویلاهای مدرن و پنت‌هاوس</div>
                    </div>

                    <div className="w-full border-t border-amber-900/40 pt-2 flex justify-between text-[9px] font-mono text-slate-300">
                      <span>WWW.AURUM-DESIGN.COM</span>
                      <span className="text-amber-400 font-bold">۰۹۳۵۴۴۶۷۲۶۹</span>
                    </div>
                  </div>
                )}

                <WatermarkOverlay />
              </div>
            </div>

            {/* Quick Action */}
            <div
              className={`flex flex-wrap items-center justify-between gap-3 pt-4 border-t ${
                isDark ? 'border-slate-800' : 'border-slate-100'
              }`}
            >
              <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                مقوای فابریانو مشکی ۶۰۰ گرم دوبل + طلاکوب حرارتی دورو
              </div>
              <button
                onClick={() => {
                  onOpenOrderModal('کارت ویزیت لوکس بلک اند گلد (کد LUX-GOLD-2025)');
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-amber-600/20 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>سفارش این طرح (۰۹۳۵۴۴۶۷۲۶۹)</span>
              </button>
            </div>
          </article>
        )}

        {/* 3. MODERN CORPORATE & TECH TITANIUM */}
        {(activeTab === 'all' || activeTab === 'corporate') && (
          <article
            className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-6 border transition-all ${
              isDark
                ? 'bg-slate-900/80 border-blue-500/20 shadow-xl shadow-blue-950/20'
                : 'bg-white border-slate-200/90 shadow-lg shadow-slate-100'
            }`}
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                    کد: TECH-TITANIUM-2025
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-md ${
                      isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    سایز: ۸۵ × ۴۸ میلی‌متر
                  </span>
                </div>
                <h3 className={`text-lg sm:text-xl font-black mt-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  کارت ویزیت مدرن شرکتی، زیرساخت و فناوری (هیمورا تک)
                </h3>
                <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  پی‌وی‌سی هوشمند مات با چاپ سیلک تیتانیومی، چیپ ان‌اف‌سی (NFC Ready) و المان‌های مهندسی نرم‌افزار
                </p>
              </div>

              {/* Side toggle */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 self-start">
                <button
                  onClick={() => setSide('tech-card', 'front')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    !flippedCards['tech-card']
                      ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-300 shadow-xs'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  روی کارت
                </button>
                <button
                  onClick={() => setSide('tech-card', 'back')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    flippedCards['tech-card']
                      ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-300 shadow-xs'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  پشت کارت
                </button>
                <button
                  onClick={() => toggleFlip('tech-card')}
                  title="چرخش کارت"
                  className="p-1 rounded-lg text-slate-500 hover:text-blue-500 transition-colors"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Realistic Floating Mockup Container */}
            <div className="w-full flex items-center justify-center py-4 relative">
              <div className="w-full max-w-[440px] aspect-[85/48] rounded-[22px] shadow-[0_20px_50px_rgba(15,23,42,0.3)] relative transition-all duration-500 overflow-hidden border border-blue-500/20">
                {/* Front Side */}
                {!flippedCards['tech-card'] ? (
                  <div className="w-full h-full bg-gradient-to-br from-[#081325] via-[#102447] to-[#060c18] text-slate-100 p-5 sm:p-6 flex flex-col justify-between relative select-none">
                    <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-indigo-500/20 to-transparent rounded-full blur-2xl pointer-events-none" />

                    <div className="flex items-start justify-between relative z-10">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-[1.5px] shadow-lg shadow-blue-500/20">
                          <div className="w-full h-full bg-gradient-to-br from-[#0b162c] to-[#122852] rounded-[10px] flex items-center justify-center text-cyan-300 font-bold">
                            <Building className="w-5 h-5" />
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white tracking-wide">
                            گروه فناوری اطلاعات و مهندسی هیمورا
                          </div>
                          <div className="text-[8px] font-mono text-cyan-300 font-bold">HEMOORA TECH CORP</div>
                        </div>
                      </div>

                      <div className="text-[9px] font-mono text-cyan-300 bg-blue-950/80 px-2.5 py-0.5 rounded-full border border-cyan-500/30 font-bold">
                        ENTERPRISE
                      </div>
                    </div>

                    <div className="my-auto relative z-10 space-y-1">
                      <h4 className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-cyan-200">
                        مهندس نیما رادمهر
                      </h4>
                      <div className="w-44 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-400 to-transparent rounded-full" />
                      <p className="text-xs text-cyan-200 font-medium">مدیر ارشد معماری سیستم‌ها و توسعه زیرساخت</p>
                      <p className="text-[10px] text-slate-300 font-mono">Chief Technology Officer (CTO)</p>
                    </div>

                    <div className="relative z-10 flex items-end justify-between border-t border-blue-500/20 pt-2 text-[9px] sm:text-[10px] text-slate-300 font-mono">
                      <div>
                        <div className="text-slate-200">info@hemoora.com • www.hemoora.com</div>
                        <div className="text-cyan-300 font-bold" dir="ltr">
                          +98 935 446 7269
                        </div>
                      </div>
                      <div className="text-cyan-400 font-bold flex items-center gap-1 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/30">
                        <QrCode className="w-4 h-4 text-cyan-300" />
                        <span>NFC READY</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Back Side */
                  <div className="w-full h-full bg-gradient-to-br from-[#060c18] via-[#0f2142] to-[#181335] text-white p-6 flex flex-col items-center justify-between text-center relative select-none">
                    <div className="w-full flex justify-between text-[9px] font-mono text-cyan-300">
                      <span>SOFTWARE DEVELOPMENT</span>
                      <span className="bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-700/40">TEHRAN HQ</span>
                    </div>

                    <div className="flex flex-col items-center justify-center my-auto gap-2">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-[1.5px] shadow-lg shadow-blue-500/30">
                        <div className="w-full h-full bg-gradient-to-br from-[#09152b] to-[#122852] rounded-[14px] flex items-center justify-center text-cyan-300">
                          <Building className="w-7 h-7" />
                        </div>
                      </div>
                      <div className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-blue-200 tracking-wide">
                        HEMOORA SOFTWARE GROUP
                      </div>
                      <div className="text-xs text-cyan-200">پیشرو در توسعه راهکارهای نوین، پلتفرم‌ها و هویت بصری مدرن</div>
                    </div>

                    <div className="w-full border-t border-blue-800/40 pt-2 flex justify-between text-[9px] font-mono text-slate-300">
                      <span>WWW.HEMOORA.COM</span>
                      <span className="text-cyan-300 font-bold">۰۹۳۵۴۴۶۷۲۶۹</span>
                    </div>
                  </div>
                )}

                <WatermarkOverlay />
              </div>
            </div>

            {/* Quick Action */}
            <div
              className={`flex flex-wrap items-center justify-between gap-3 pt-4 border-t ${
                isDark ? 'border-slate-800' : 'border-slate-100'
              }`}
            >
              <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                پی‌وی‌سی تیتانیوم مات ۵۰۰ میکرون + چیپ الکترونیکی NFC
              </div>
              <button
                onClick={() => {
                  onOpenOrderModal('کارت ویزیت مدرن شرکتی تیتانیوم (کد TECH-TITANIUM-2025)');
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-blue-600/20 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>سفارش این طرح (۰۹۳۵۴۴۶۷۲۶۹)</span>
              </button>
            </div>
          </article>
        )}

        {/* 4. LAW & LEGAL CONSULTING CARD */}
        {(activeTab === 'all' || activeTab === 'corporate') && (
          <article
            className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-6 border transition-all ${
              isDark
                ? 'bg-slate-900/80 border-indigo-500/20 shadow-xl shadow-indigo-950/20'
                : 'bg-white border-slate-200/90 shadow-lg shadow-slate-100'
            }`}
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                  <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    کد: LAW-PRESTIGE-2025
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-md ${
                      isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    سایز: ۸۵ × ۴۸ میلی‌متر
                  </span>
                </div>
                <h3 className={`text-lg sm:text-xl font-black mt-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  کارت ویزیت دفتر وکالت، امور حقوقی و مشاورین دادگستری
                </h3>
                <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  طراحی باوقار با نشان ترازوی عدالت طلاکوب، تایپوگرافی کلاسیک و کادر رسمی طلایی
                </p>
              </div>

              {/* Side toggle */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 self-start">
                <button
                  onClick={() => setSide('law-card', 'front')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    !flippedCards['law-card']
                      ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-300 shadow-xs'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  روی کارت
                </button>
                <button
                  onClick={() => setSide('law-card', 'back')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    flippedCards['law-card']
                      ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-300 shadow-xs'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  پشت کارت
                </button>
                <button
                  onClick={() => toggleFlip('law-card')}
                  title="چرخش کارت"
                  className="p-1 rounded-lg text-slate-500 hover:text-indigo-500 transition-colors"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="w-full flex items-center justify-center py-4 relative">
              <div className="w-full max-w-[440px] aspect-[85/48] rounded-[22px] shadow-[0_20px_50px_rgba(15,23,42,0.3)] relative transition-all duration-500 overflow-hidden border border-indigo-500/20">
                {/* Front Side */}
                {!flippedCards['law-card'] ? (
                  <div className="w-full h-full bg-gradient-to-br from-[#080e1c] via-[#141f38] to-[#070b16] text-slate-100 p-5 sm:p-6 flex flex-col justify-between relative select-none">
                    <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-amber-500/15 via-indigo-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

                    <div className="flex items-start justify-between relative z-10">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ffe599] via-[#f5b324] to-[#b37a12] p-[1.5px] shadow-lg shadow-amber-500/20">
                          <div className="w-full h-full bg-gradient-to-br from-[#0c1322] to-[#16233f] rounded-[10px] flex items-center justify-center text-amber-300">
                            <Scale className="w-5 h-5" />
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">دفتر وکالت و مشاوره حقوقی</div>
                          <div className="text-[8px] text-indigo-200 font-mono">ATTORNEY AT LAW</div>
                        </div>
                      </div>
                      <span className="text-[9px] bg-indigo-950/90 text-amber-300 px-2.5 py-0.5 rounded-full font-mono border border-amber-500/30 font-bold">
                        پروانه وکالت: ۲۴۹۱۸
                      </span>
                    </div>

                    <div className="my-auto relative z-10 space-y-1">
                      <h4 className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ffe599] via-[#f5b324] to-[#e6a519]">
                        دکتر علی‌رضا بزرگ‌مهر
                      </h4>
                      <div className="w-40 h-[2px] bg-gradient-to-r from-amber-400 via-indigo-300 to-transparent rounded-full" />
                      <p className="text-xs text-indigo-200 font-medium">وکیل پایه‌یک دادگستری و مشاور امور قراردادهای تجاری</p>
                      <p className="text-[10px] text-slate-400 font-mono">Senior Legal Counsel &amp; Arbitrator</p>
                    </div>

                    <div className="relative z-10 flex items-end justify-between border-t border-indigo-500/20 pt-2 text-[9px] sm:text-[10px] text-indigo-200/80 font-mono">
                      <div>
                        <div className="text-slate-300">dr.bozorgmehr@law-firm.ir</div>
                        <div className="text-amber-300 font-bold" dir="ltr">
                          +98 935 446 7269
                        </div>
                      </div>
                      <div className="text-left text-slate-300">
                        <div>TEHRAN • JORDAN ST.</div>
                        <div className="text-amber-300 font-bold">WWW.BOZORGMEHR.LAW</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Back Side */
                  <div className="w-full h-full bg-gradient-to-br from-[#060a14] via-[#101930] to-[#04070e] text-slate-100 p-6 flex flex-col items-center justify-between text-center relative select-none">
                    <div className="w-full flex justify-between text-[9px] font-mono text-indigo-300">
                      <span>BOZORGMEHR LAW FIRM</span>
                      <span className="bg-indigo-950/60 px-2 py-0.5 rounded-full border border-indigo-700/40">TEHRAN HQ</span>
                    </div>

                    <div className="flex flex-col items-center justify-center my-auto gap-2">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ffe599] via-[#f5b324] to-[#b37a12] p-[1.5px] shadow-lg shadow-amber-500/30">
                        <div className="w-full h-full bg-gradient-to-br from-[#0a1120] to-[#14203c] rounded-[14px] flex items-center justify-center text-amber-300">
                          <Scale className="w-7 h-7" />
                        </div>
                      </div>
                      <div className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffe599] via-[#f5b324] to-[#e6a519] tracking-widest uppercase">
                        JUSTICE &amp; INTEGRITY
                      </div>
                      <div className="text-xs text-indigo-200 font-medium">قبول کلیه دعاوی ملکی، بین‌الملل، شرکت‌ها و داوری</div>
                    </div>

                    <div className="w-full border-t border-indigo-900/40 pt-2 flex justify-between text-[9px] font-mono text-slate-300">
                      <span>WWW.BOZORGMEHR.LAW</span>
                      <span className="text-amber-400 font-bold">۰۹۳۵۴۴۶۷۲۶۹</span>
                    </div>
                  </div>
                )}

                <WatermarkOverlay />
              </div>
            </div>

            <div
              className={`flex flex-wrap items-center justify-between gap-3 pt-4 border-t ${
                isDark ? 'border-slate-800' : 'border-slate-100'
              }`}
            >
              <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                کرافت کتان آلمانی ۶۵۰ گرم + طلاکوب مات اختصاصی
              </div>
              <button
                onClick={() => {
                  onOpenOrderModal('کارت ویزیت دفتر وکالت (کد LAW-PRESTIGE-2025)');
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-indigo-600/20 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>سفارش این طرح (۰۹۳۵۴۴۶۷۲۶۹)</span>
              </button>
            </div>
          </article>
        )}

        {/* 5. MEDICAL PRESCRIPTION & CLINIC STATIONERY (A5) */}
        {(activeTab === 'all' || activeTab === 'stationery') && (
          <article
            className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-6 border transition-all lg:col-span-2 ${
              isDark
                ? 'bg-slate-900/80 border-teal-500/20 shadow-xl shadow-teal-950/20'
                : 'bg-white border-slate-200/90 shadow-lg shadow-slate-100'
            }`}
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                  <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400">
                    کد: STATIONERY-MED-A5
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-md ${
                      isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    قطع: A5 استاندارد (۱۴۸ × ۲۱۰ میلی‌متر)
                  </span>
                </div>
                <h3 className={`text-lg sm:text-xl font-black mt-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  ست اداری و سرنسخه پزشکی تخصصی هماهنگ با کارت ویزیت دکتر نسرین شکوهی
                </h3>
                <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  سرنسخه اختصاصی با تم دارک پترولیوم و خط ضربان قلب منطبق بر استانداردهای بیمه سلامت، تامین اجتماعی و الکترونیک
                </p>
              </div>
            </div>

            {/* Realistic Prescription Mockup (A5 Sheet Aspect) */}
            <div className="w-full flex items-center justify-center py-4 relative">
              <div className="w-full max-w-[500px] aspect-[148/210] rounded-[18px] bg-white text-slate-900 p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.18)] relative border border-slate-200 overflow-hidden select-none">
                {/* Header of Prescription */}
                <div className="flex items-start justify-between border-b-2 border-[#0a2e3f] pb-4">
                  <div className="text-right space-y-1">
                    <h4 className="text-base sm:text-lg font-black text-[#0a2e3f]">دکتر نسرین شکوهی</h4>
                    <p className="text-xs font-bold text-cyan-800">متخصص بیماری‌های قلب و عروق و فشار خون</p>
                    <p className="text-[10px] text-slate-600">فلوشیپ آنژیوپلاستی و اکوکاردیوگرافی پیشرفته</p>
                    <p className="text-[10px] font-mono text-cyan-900 font-bold">نظام پزشکی: ۱۱۴۷۸۲</p>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-2xl bg-[#092b3a] text-cyan-300 p-2 flex items-center justify-center shadow-md">
                      <HeartPulse className="w-8 h-8" />
                    </div>
                    <span className="text-[9px] font-mono font-bold text-slate-600">SHOKUHI CLINIC</span>
                  </div>
                </div>

                {/* Patient Info Row */}
                <div className="flex items-center justify-between text-xs border-b border-dashed border-slate-300 py-2.5 text-slate-700">
                  <div className="flex gap-1.5">
                    <span className="font-bold">نام بیمار:</span>
                    <span className="w-32 border-b border-dotted border-slate-400" />
                  </div>
                  <div className="flex gap-1.5">
                    <span className="font-bold">سن / وزن:</span>
                    <span className="w-16 border-b border-dotted border-slate-400" />
                  </div>
                  <div className="flex gap-1.5">
                    <span className="font-bold">تاریخ:</span>
                    <span className="w-20 border-b border-dotted border-slate-400 font-mono text-slate-500">۱۴۰۴/ / </span>
                  </div>
                </div>

                {/* Prescription Body with subtle watermark pattern */}
                <div className="my-auto py-6 relative flex flex-col justify-start min-h-[140px]">
                  <div className="text-3xl font-serif font-black text-[#0a2e3f]/25 mb-4">Rx.</div>
                  <div className="space-y-4 opacity-30">
                    <div className="h-[1px] bg-slate-400 w-full" />
                    <div className="h-[1px] bg-slate-400 w-full" />
                    <div className="h-[1px] bg-slate-400 w-full" />
                    <div className="h-[1px] bg-slate-400 w-full" />
                  </div>

                  {/* Faint Center ECG Motif */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                    <HeartPulse className="w-32 h-32 text-cyan-800" />
                  </div>
                </div>

                {/* Footer of Prescription */}
                <div className="border-t-2 border-[#0a2e3f] pt-3 text-[10px] text-slate-600 space-y-1">
                  <div className="flex items-center justify-between font-bold text-slate-800">
                    <span>آدرس مطب: تهران، خ ولیعصر، توانیر، ساختمان پزشکان دی، طبقه ۳</span>
                    <span dir="ltr">تلفن: ۰۹۳۵۴۴۶۷۲۶۹</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-500 font-mono text-[9px]">
                    <span>ساعت حضور: شنبه تا چهارشنبه ۱۶ الی ۲۰</span>
                    <span>WWW.DR.NASRIN.SHOKUHI.COM</span>
                  </div>
                </div>

                <WatermarkOverlay />
              </div>
            </div>

            {/* Quick Action */}
            <div
              className={`flex flex-wrap items-center justify-between gap-3 pt-4 border-t ${
                isDark ? 'border-slate-800' : 'border-slate-100'
              }`}
            >
              <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                کاغذ تحریر ۱۰۰ گرم کتان با چاپ چهار رنگ افست و پرفراژ اختصاصی
              </div>
              <button
                onClick={() => {
                  onOpenOrderModal('ست اداری و سرنسخه پزشکی A5 (کد STATIONERY-MED-A5)');
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-teal-600/20 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>سفارش ست اداری سرنسخه (۰۹۳۵۴۴۶۷۲۶۹)</span>
              </button>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};
