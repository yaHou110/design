'use client';

import React from 'react';
import { useAppTheme } from './SecurityShield';

interface HemooraLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon-only' | 'badge' | 'watermark';
  className?: string;
  forceDark?: boolean;
}

export const HemooraLogo: React.FC<HemooraLogoProps> = ({
  size = 'md',
  variant = 'full',
  className = '',
  forceDark = false,
}) => {
  const { isDark: appDark } = useAppTheme();
  const isDark = forceDark || appDark;

  // Sizing definitions
  const sizeMap = {
    sm: { icon: 'w-7 h-7', text: 'text-sm', sub: 'text-[9px]', pad: 'p-1', radius: 'rounded-lg' },
    md: { icon: 'w-10 h-10', text: 'text-base sm:text-lg', sub: 'text-[10px]', pad: 'p-1.5', radius: 'rounded-xl' },
    lg: { icon: 'w-13 h-13', text: 'text-xl sm:text-2xl', sub: 'text-xs', pad: 'p-2', radius: 'rounded-2xl' },
    xl: { icon: 'w-16 h-16', text: 'text-2xl sm:text-3xl', sub: 'text-xs sm:text-sm', pad: 'p-2.5', radius: 'rounded-2xl' },
  };

  const currentSize = sizeMap[size];

  // SVG Geometric Monogram Icon
  const IconComponent = (
    <div className={`relative ${currentSize.icon} shrink-0 group`}>
      {/* Outer ambient glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 rounded-2xl opacity-75 blur-xs group-hover:opacity-100 transition duration-300" />

      {/* Main geometric container */}
      <div className={`relative w-full h-full bg-gradient-to-tr from-slate-950 via-[#0a1628] to-[#0f2444] ${currentSize.radius} border border-cyan-400/40 p-1 flex items-center justify-center shadow-md shadow-cyan-500/20 overflow-hidden`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-cyan-400 filter drop-shadow-[0_2px_4px_rgba(6,182,212,0.4)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="hemoora-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
            <linearGradient id="hemoora-grad-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>

          {/* Left Wing (Pillar) */}
          <path
            d="M22 18 L38 28 L38 72 L22 82 Z"
            fill="url(#hemoora-grad-1)"
            opacity="0.95"
          />

          {/* Right Wing (Pillar) */}
          <path
            d="M78 18 L62 28 L62 72 L78 82 Z"
            fill="url(#hemoora-grad-1)"
            opacity="0.85"
          />

          {/* Central Connecting Diamond Bridge (Forming 'H' and Persian 'هـ') */}
          <path
            d="M38 42 L62 42 L62 58 L38 58 Z"
            fill="url(#hemoora-grad-1)"
          />

          {/* Center Glowing Accent Core */}
          <circle cx="50" cy="50" r="7" fill="url(#hemoora-grad-gold)" />
          <path
            d="M50 36 L58 50 L50 64 L42 50 Z"
            fill="#ffffff"
            opacity="0.9"
          />
        </svg>
      </div>
    </div>
  );

  if (variant === 'icon-only') {
    return <div className={`inline-flex items-center ${className}`}>{IconComponent}</div>;
  }

  if (variant === 'badge') {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl border backdrop-blur-md shadow-sm select-none transition-colors ${
          isDark
            ? 'bg-slate-900/90 border-cyan-500/30 text-white shadow-cyan-950/40'
            : 'bg-blue-50/90 border-blue-200 text-slate-900 shadow-blue-100'
        } ${className}`}
      >
        {IconComponent}
        <div className="flex flex-col text-right">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black text-sm ${
                isDark ? 'text-cyan-300' : 'text-blue-700'
              }`}
            >
              هیمورا
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          </div>
          <span
            className={`text-[9px] font-mono tracking-wider ${
              isDark ? 'text-cyan-300/80' : 'text-slate-600'
            }`}
          >
            HEMOORA DESIGN GROUP
          </span>
        </div>
      </div>
    );
  }

  // Full Brand Logo with Title and Subtitle
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {IconComponent}
      <div className="flex flex-col text-right justify-center">
        <div className="flex items-center gap-2">
          <span className={`font-black ${currentSize.text} tracking-tight flex items-center gap-1.5`}>
            <span className={isDark ? 'text-white' : 'text-slate-900'}>گروه نرم‌افزاری</span>
            <span className={`font-black ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
              هیمورا
            </span>
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className={`${currentSize.sub} font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'} font-sans`}>
            طراحی تخصصی هویت بصری و کارت ویزیت
          </span>
          <span className={`text-[9px] font-mono font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'} hidden sm:inline-block`}>
            • HEMOORA
          </span>
        </div>
      </div>
    </div>
  );
};
