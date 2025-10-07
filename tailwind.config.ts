import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        background: 'var(--bg-color)',
        text: 'var(--text-color)',
        card: 'var(--card-color)',

        light: {
          primary: '#3b82f6',
          background: '#ffffff',
          text: '#0f172a',
          card: '#f8fafc',
        },
        dark: {
          primary: '#60a5fa',
          background: '#0f172a',
          text: '#f8fafc',
          card: '#1e293b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0, 0, 0, 0.05)',
        card: '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        xl: '1rem',
      },
      transitionProperty: {
        theme: 'background-color, color, border-color',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',
        },
      };

      // Type-safe usage
      addUtilities(newUtilities, ['responsive']);
    }),
  ],
};

export default config;
