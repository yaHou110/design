'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';

interface AppContextType {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (dark: boolean) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppTheme = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppTheme must be used within AppProvider');
  }
  return context;
};

export const SecurityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default is LIGHT MODE (Day mode - حالت روز) as explicitly requested by the user
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const setTheme = (dark: boolean) => {
    setIsDark(dark);
  };

  useEffect(() => {
    // 1. Passive Anti-Download: Prevent context menu (right click) on preview cards & images
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('.protected-content') || target?.closest('article') || target?.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    // 2. Passive Anti-Save / Anti-Print
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+S / Cmd+S
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
      }
    };

    // 3. Prevent dragging images or card elements
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('dragstart', handleDragStart);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <AppContext.Provider value={{ isDark, toggleTheme, setTheme }}>
      <div className={isDark ? 'dark' : ''}>{children}</div>
    </AppContext.Provider>
  );
};
