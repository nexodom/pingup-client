import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
