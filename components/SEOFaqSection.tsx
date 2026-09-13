'use client';

import React, { useState } from 'react';
import { useAppTheme } from './SecurityShield';
import { ChevronDown, HelpCircle, Shield, Award, PhoneCall } from 'lucide-react';

export const SEOFaqSection: React.FC = () => {
  const { isDark } = useAppTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'چگونه می‌توانم طرح کارت ویزیت یا سرنسخه باکیفیت اصلی (300 DPI) را سفارش دهم؟',
      a: 'برای سفارش هر یک از طرح‌ها یا طراحی اختصاصی جدید، کافیست با شماره همراه ۰۹۳۵۴۴۶۷۲۶۹ (گروه نرم‌افزاری هیمورا) تماس حاصل فرمایید یا از طریق واتس‌اپ پیام ارسال نمایید تا در کمتر از ۲۴ ساعت، فایل لایه‌باز تفکیک رنگی CMYK افست با حاشیه امن برش به شما تحویل گردد.',
    },
    {
      q: 'چه نوع کارت ویزیت‌هایی توسط تیم طراحی هیمورا اجرا می‌شود؟',
      a: 'تیم طراحی گروه نرم‌افزاری هیمورا انواع کارت ویزیت شامل: کارت ویزیت پزشکی و درمانگاهی منطبق بر قوانین نظام پزشکی، کارت ویزیت لوکس طلاکوب و نقره‌کوب، کارت‌های لمینت مات و برجسته یووی، کارت ویزیت پی‌وی‌سی ضدآب، کارت ویزیت اداری شرکتی، وکالت و مهندسی را با جدیدترین ترندهای تایپوگرافی طراحی می‌نماید.',
    },
    {
      q: 'آیا فایل‌های خروجی با چاپخانه‌های استاندارد افست کشور هماهنگ هستند؟',
      a: 'بله، تمامی فایل‌های خروجی با استاندارد بین‌المللی چاپ افست و دیجیتال (رزولوشن 300 DPI واقعی، پروفایل رنگی CMYK، حاشیه اطمینان برش 3 الی 5 میلی‌متری Bleed و لایه‌های تفکیک‌شده مجزای طلاکوب و یووی موضعی) تولید و تحویل می‌شوند.',
    },
    {
      q: 'مدت زمان طراحی اختصاصی کارت ویزیت و ست اداری چقدر است؟',
      a: 'اتودهای اولیه معمولاً ظرف ۲۴ الی ۴۸ ساعت آماده و جهت ویرایش و اعمال نظرات به شما ارائه می‌شود. اصلاحات تا رسیدن به تایید نهایی شما بدون هزینه اضافی انجام می‌گردد.',
    },
  ];

  return (
    <section className={`w-full py-12 border-t transition-colors ${isDark ? 'border-slate-800' : 'border-slate-200'}`} id="faq-seo-section">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {/* Section Heading */}
        <div className="text-center space-y-2">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border ${
              isDark
                ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                : 'bg-blue-50 border-blue-200 text-blue-700'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>راهنمای جامع سفارش و استانداردهای طراحی</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
            سوالات متداول سفارش طراحی انواع کارت ویزیت و ست چاپی
          </h2>
          <p className={`text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            اطلاعات در خصوص فرآیند طراحی، متریال‌های چاپ و نحوه تحویل فایل‌های اصلی
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 ${
                  isDark
                    ? 'bg-slate-900/70 border-slate-800'
                    : 'bg-white border-slate-200 shadow-2xs'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-right gap-4 transition-colors"
                >
                  <span className={`font-bold text-sm sm:text-base ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-blue-600 text-white'
                        : isDark
                        ? 'bg-slate-800 text-slate-400'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div
                    className={`px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t ${
                      isDark ? 'text-slate-400 border-slate-800/60' : 'text-slate-600 border-slate-100'
                    }`}
                  >
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div
            className={`p-4 rounded-2xl border flex flex-col gap-2 ${
              isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
              کیفیت چاپ افست استاندارد
            </h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              ارسال فایل‌ها در فرمت استاندارد لایه‌باز و وکتور ۳۰۰ DPI آماده تحویل به چاپخانه‌ها.
            </p>
          </div>

          <div
            className={`p-4 rounded-2xl border flex flex-col gap-2 ${
              isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
              طرح‌های کاملاً اختصاصی
            </h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              طراحی یونیک متناسب با هویت برند شما بدون استفاده از قالب‌های تکراری اینترنتی.
            </p>
          </div>

          <div
            className={`p-4 rounded-2xl border flex flex-col gap-2 ${
              isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <PhoneCall className="w-5 h-5" />
            </div>
            <h3 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
              مشاوره مستقیم رایگان
            </h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              مشاوره انتخاب ابعاد و متریال کاغذ با شماره همراه ۰۹۳۵۴۴۶۷۲۶۹.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
