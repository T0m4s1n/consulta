"use client";

import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render after mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed top-4 md:top-8 right-4 md:right-8 z-50 p-2 md:p-3 rounded-full bg-white shadow-lg border border-gray-200 opacity-0">
        <Moon size={20} className="md:w-6 md:h-6" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 md:top-8 right-4 md:right-8 z-50 p-2 md:p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon size={20} className="md:w-6 md:h-6 text-gray-700 dark:text-gray-300" />
      ) : (
        <Sun size={20} className="md:w-6 md:h-6 text-yellow-500" />
      )}
    </button>
  );
}

