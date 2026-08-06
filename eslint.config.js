import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      react.configs.flat.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      // react-in-jsx-scope / react/prop-types are noise with the new JSX
      // transform + this codebase's style; jsx-uses-vars (the part we
      // actually need, to stop `motion` etc. being flagged unused) stays on.
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      // Stylistic-only; this codebase writes real apostrophes/quotes in
      // copy throughout, and escaping them is a content edit, not cleanup.
      'react/no-unescaped-entities': 'off',
    },
  },
])
