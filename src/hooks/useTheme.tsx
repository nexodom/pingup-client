import { useContext } from 'react';

import { type ThemeContextType } from '../context/ThemeProvider';
import { ThemeContext } from '../context/ThemeContext';

export const useTheme = () => {
  const context: ThemeContextType | undefined = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
