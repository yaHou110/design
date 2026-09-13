'use client';

import React from 'react';
import { useAppTheme } from './SecurityShield';
import { HemooraLogo } from './HemooraLogo';

interface FooterProps {
  onOpenOrderModal: () => void;
  phone?: string;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrderModal }) => {
  const { isDark } = useAppTheme();

  return (
    <footer
      className={`w-full border-t pt-16 pb-12 mt-12 text-xs transition-colors ${
        isDark
          ? 'bg-slate-950 border-slate-900 text-slate-400'
          : 'bg-white border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <HemooraLogo size="md" variant="full" />
            <p className={`text-xs leading-relaxed max-w-lg ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              مرکز تخصصی طراحی گرافیک، هویت بصری، انواع کارت ویزیت (پزشکی، لوکس طلاکوب، پی‌وی‌سی، سلفون مات مخملی)، سرنسخه A5 و ست اداری. تمامی طرح‌ها با استانداردهای نوین چاپ افست و به صورت اختصاصی طراحی می‌گردند.
            </p>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
              خدمات طراحی و چاپ
            </h4>
            <ul className="space-y-2 text-xs">
              <li
                className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                onClick={onOpenOrderModal}
              >
                • طراحی کارت ویزیت دورو پزشکی و سلامت
              </li>
              <li
                className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                onClick={onOpenOrderModal}
              >
                • طراحی سرنسخه A5 و پرونده بالینی A4
              </li>
              <li
                className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                onClick={onOpenOrderModal}
              >
                • طراحی کارت ویزیت لوکس طلاکوب و برجسته
              </li>
              <li
                className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                onClick={onOpenOrderModal}
              >
                • طراحی ست اداری سازمانی (سربرگ، پاکت و فولدر)
              </li>
            </ul>
          </div>

          {/* Col 3: Order & Contact */}
          <div className="space-y-3">
            <h4 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
              استعلام آنلاین
            </h4>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              جهت سفارش طراحی اختصاصی جدید یا دریافت فایل لایه‌باز هر یک از نمونه‌های موجود با شماره زیر تماس بگیرید.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenOrderModal}
                className={`w-full py-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                  isDark
                    ? 'bg-slate-900 hover:bg-slate-800 text-cyan-400 border-cyan-500/30'
                    : 'bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200'
                }`}
              >
                ثبت سفارش آنلاین و فوری
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Banner with Mandatory Credit */}
        <div
          className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right ${
            isDark ? 'border-slate-800' : 'border-slate-200'
          }`}
        >
          <div className="text-xs flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
              © {new Date().getFullYear()} تمامی حقوق محفوظ است.
            </span>
            <span className={isDark ? 'text-slate-700' : 'text-slate-300'}>|</span>
            <div className="inline-flex items-center gap-1.5 font-bold">
              <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                دیزاین و توسعه توسط
              </span>
              <span className={`font-black ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
                گروه نرم‌افزاری هیمورا
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

