'use client';

import React from 'react';

interface WatermarkOverlayProps {
  phone?: string;
  customText?: string;
  className?: string;
}

export const WatermarkOverlay: React.FC<WatermarkOverlayProps> = ({
  phone = '۰۹۳۵۴۴۶۷۲۶۹',
  customText = 'هیمورا',
  className = '',
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none z-30 rounded-[inherit] overflow-hidden protected-content ${className}`}
      aria-hidden="true"
    >
      {/* Middle-Left (Center-Left) Sleek Watermark Badge */}
      <div className="absolute top-1/2 left-3 -translate-y-1/2 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-black/50 dark:bg-black/70 backdrop-blur-md border border-white/20 text-white/90 shadow-lg shadow-black/30">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        <span className="text-[10px] font-bold tracking-tight text-white/95">
          {customText}
        </span>
        <span className="text-[9px] font-mono text-cyan-300 font-bold border-l border-white/25 pl-1.5 ml-0.5" dir="ltr">
          {phone}
        </span>
      </div>
    </div>
  );
};
