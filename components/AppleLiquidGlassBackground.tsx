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
      {/* Soft colour wash 1 - Cyan / Azure. Radial gradients fade out on their own,
          so no CSS filter layer is needed (measured as the cheapest option). */}
      <div
        className={`absolute -top-[15%] -right-[10%] w-[55vw] h-[55vw] max-w-[850px] max-h-[850px] rounded-full ${
          isDark
            ? 'bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.28),rgba(3,105,161,0.16)_45%,transparent_72%)]'
            : 'bg-[radial-gradient(circle_at_center,rgba(103,232,249,0.45),rgba(147,197,253,0.26)_45%,transparent_72%)]'
        }`}
      />

      {/* Soft colour wash 2 - Violet / Indigo */}
      <div
        className={`absolute top-[35%] -left-[15%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full ${
          isDark
            ? 'bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.24),rgba(147,51,234,0.14)_45%,transparent_72%)]'
            : 'bg-[radial-gradient(circle_at_center,rgba(196,181,253,0.45),rgba(240,171,252,0.28)_45%,transparent_72%)]'
        }`}
      />

      {/* Soft colour wash 3 - Teal / Amber */}
      <div
        className={`absolute -bottom-[20%] right-[20%] w-[50vw] h-[50vw] max-w-[750px] max-h-[750px] rounded-full ${
          isDark
            ? 'bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.20),rgba(217,119,6,0.10)_48%,transparent_74%)]'
            : 'bg-[radial-gradient(circle_at_center,rgba(167,243,208,0.42),rgba(253,230,138,0.28)_48%,transparent_74%)]'
        }`}
      />
    </div>
  );
};
