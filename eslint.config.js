import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react'; // Add this import

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: eslintPluginPrettier,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      react: react, // Add this to plugins
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version, or set to "19.1.0"
      },
    },
    extends: [js.configs.recommended, ...tseslint.configs.recommended, prettierConfig],
    rules: {
      // ✅ React Hooks best practices
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react-hooks/exhaustive-deps': 'warn',

      // ✅ Prettier formatting errors as ESLint issues
      'prettier/prettier': 'error',

      // ✅ Import rules
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
      'import/no-duplicates': 'error',
      'import/no-mutable-exports': 'error',
      'import/prefer-default-export': 'off',

      // ✅ A11y rules
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/no-autofocus': 'warn',

      // ✅ Code quality and safety
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'no-shadow': 'error',
      'no-use-before-define': ['error', { functions: false, classes: true }],
      'no-unreachable': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-empty-function': 'warn',
      'consistent-return': 'warn',
      'default-case': 'warn',

      // ✅ Code style and readability
      camelcase: 'warn',
      'max-len': ['warn', { code: 100, ignoreComments: true }],
      'object-curly-spacing': ['error', 'always'],
      'no-unneeded-ternary': 'warn',

      // ✅ React specific
      'react/destructuring-assignment': ['warn', 'always'], // Ensure this rule is valid
      'react/no-danger': 'error',
      'react/prefer-stateless-function': 'warn',

      // ✅ Comments hygiene
      'no-warning-comments': ['warn', { terms: ['todo', 'fixme'], location: 'start' }],
    },
  },
);
