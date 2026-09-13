'use client';

import React from 'react';
import { useAppTheme } from './SecurityShield';

export const AppleLiquidGlassBackground: React.FC = () => {
  const { isDark } = useAppTheme();

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none transition-colors duration-700"
      aria-hidden="true"
    >
      {/* Base Canvas */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isDark ? 'bg-[#050b14]' : 'bg-[#f8fafc]'
        }`}
      />

      {/* Floating Liquid Orb 1 - Cyan / Azure */}
      <div
        className={`absolute -top-[15%] -right-[10%] w-[55vw] h-[55vw] max-w-[850px] max-h-[850px] rounded-full blur-[90px] sm:blur-[130px] opacity-70 animate-liquid-1 transition-all duration-1000 ${
          isDark
            ? 'bg-gradient-to-br from-cyan-500/25 via-sky-600/20 to-blue-700/15'
            : 'bg-gradient-to-br from-cyan-300/40 via-sky-200/35 to-blue-300/25'
        }`}
      />

      {/* Floating Liquid Orb 2 - Violet / Indigo / Purple */}
      <div
        className={`absolute top-[35%] -left-[15%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full blur-[100px] sm:blur-[140px] opacity-65 animate-liquid-2 transition-all duration-1000 ${
          isDark
            ? 'bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-600/10'
            : 'bg-gradient-to-tr from-indigo-200/40 via-violet-200/35 to-fuchsia-100/30'
        }`}
      />

      {/* Floating Liquid Orb 3 - Warm Amber / Teal shimmer in center */}
      <div
        className={`absolute -bottom-[20%] right-[20%] w-[50vw] h-[50vw] max-w-[750px] max-h-[750px] rounded-full blur-[90px] sm:blur-[120px] opacity-55 animate-liquid-3 transition-all duration-1000 ${
          isDark
            ? 'bg-gradient-to-t from-teal-500/15 via-blue-600/15 to-amber-500/10'
            : 'bg-gradient-to-t from-emerald-200/30 via-teal-100/30 to-amber-100/25'
        }`}
      />

      {/* Apple Glass Refraction Mesh Overlay */}
      <div
        className={`absolute inset-0 backdrop-blur-[40px] sm:backdrop-blur-[60px] ${
          isDark
            ? 'bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.15),rgba(255,255,255,0))]'
            : 'bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.12),rgba(255,255,255,0))]'
        }`}
      />

      {/* Ultra-subtle Apple Specular Shimmer Texture */}
      <div
        className={`absolute inset-0 opacity-[0.035] dark:opacity-[0.05] pointer-events-none mix-blend-overlay ${
          isDark ? 'bg-white' : 'bg-black'
        }`}
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
};
