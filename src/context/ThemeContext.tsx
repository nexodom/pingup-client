import { createContext } from 'react';

type theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
