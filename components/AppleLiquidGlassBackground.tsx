'use client';

import React from 'react';
import { useAppTheme } from './SecurityShield';

/**
 * Soft gradient backdrop.
 *
 * Kept deliberately static: the orbs used to run infinite keyframe animations
 * behind a viewport-sized `backdrop-blur` layer plus a full-screen
 * `mix-blend-overlay` texture, which forced the compositor to re-blur and
 * re-blend the whole viewport on every scroll frame. The gradients are now
 * painted once and simply composited.
 */
export const AppleLiquidGlassBackground: React.FC = () => {
  const { isDark } = useAppTheme();

  return (
    <div
      className={`fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none transition-colors duration-700 ${
        isDark ? 'bg-[#050b14]' : 'bg-[#f8fafc]'
      }`}
      aria-hidden="true"
    >
      {/* Soft colour wash 1 - Cyan / Azure */}
      <div
        className={`absolute -top-[15%] -right-[10%] w-[55vw] h-[55vw] max-w-[850px] max-h-[850px] rounded-full blur-[70px] opacity-70 ${
          isDark
            ? 'bg-gradient-to-br from-cyan-500/25 via-sky-600/20 to-blue-700/15'
            : 'bg-gradient-to-br from-cyan-300/40 via-sky-200/35 to-blue-300/25'
        }`}
      />

      {/* Soft colour wash 2 - Violet / Indigo */}
      <div
        className={`absolute top-[35%] -left-[15%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full blur-[80px] opacity-65 ${
          isDark
            ? 'bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-600/10'
            : 'bg-gradient-to-tr from-indigo-200/40 via-violet-200/35 to-fuchsia-100/30'
        }`}
      />

      {/* Soft colour wash 3 - Teal / Amber */}
      <div
        className={`absolute -bottom-[20%] right-[20%] w-[50vw] h-[50vw] max-w-[750px] max-h-[750px] rounded-full blur-[70px] opacity-55 ${
          isDark
            ? 'bg-gradient-to-t from-teal-500/15 via-blue-600/15 to-amber-500/10'
            : 'bg-gradient-to-t from-emerald-200/30 via-teal-100/30 to-amber-100/25'
        }`}
      />
    </div>
  );
};
