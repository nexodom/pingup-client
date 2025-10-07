import React, { useEffect, useState } from 'react';

import { ThemeContext } from './ThemeContext';

type theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: theme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<theme>(() => {
    const savedTheme = localStorage.getItem('theme') as theme | null;
    return savedTheme || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);

    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);

    document.body.style.transition = 'none';

    const transitionTimeout = setTimeout(() => {
      document.body.style.transition = '';
    }, 5);
    return clearTimeout(transitionTimeout);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev == 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
