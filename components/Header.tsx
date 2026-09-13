'use client';

import React from 'react';
import { useAppTheme } from './SecurityShield';
import { HemooraLogo } from './HemooraLogo';
import { Phone, Palette, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  onOpenOrderModal: () => void;
  phone?: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrderModal, phone = '۰۹۳۵۴۴۶۷۲۶۹' }) => {
  const { isDark, toggleTheme } = useAppTheme();

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        isDark
          ? 'bg-slate-950/85 border-b border-cyan-500/20 text-white'
          : 'bg-white/90 border-b border-slate-200/80 text-slate-900'
      } backdrop-blur-md shadow-xs`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo & Brand Identity */}
        <div className="flex items-center gap-3">
          <HemooraLogo size="md" variant="full" />
        </div>

        {/* Theme Switcher, Phone & Order CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Day / Night Mode Toggle */}
          <button
            onClick={() => {
              toggleTheme();
            }}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
              isDark
                ? 'bg-slate-900/80 hover:bg-slate-800 text-amber-300 border-slate-700/80'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
            }`}
            title={isDark ? 'تغییر به حالت روز' : 'تغییر به حالت شب'}
            aria-label="تغییر حالت شب و روز"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            <span className="hidden sm:inline">{isDark ? 'روز' : 'شب'}</span>
          </button>

          {/* Direct Phone Number */}
          <a
            href="tel:09354467269"
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-mono transition-all group ${
              isDark
                ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/40 text-slate-200'
                : 'bg-slate-50 border-slate-200 hover:border-blue-400 text-slate-800'
            }`}
            title="تماس مستقیم جهت ثبت سفارش"
          >
            <div
              className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-blue-100 text-blue-700'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span className={`font-bold ${isDark ? 'text-cyan-400' : 'text-blue-700'}`} dir="ltr">
              {phone}
            </span>
          </a>

          {/* Primary Order Button */}
          <button
            onClick={() => {
              onOpenOrderModal();
            }}
            className="px-4 sm:px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 hover:opacity-95 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-blue-500/20 transition-all"
          >
            <Palette className="w-4 h-4" />
            <span>سفارش طراحی</span>
          </button>
        </div>
      </div>
    </header>
  );
};
