import js from '@eslint/js';
import globals from 'globals';
import * as tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import packageJsonPlugin from 'eslint-plugin-package-json';
import eslintPluginJsonc from 'eslint-plugin-jsonc';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import vitestPlugin from 'eslint-plugin-vitest';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: [
      '.husky/**',
      '.vscode/**',
      '.idea/**',
      '.github/**',
      '.DS_Store',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/node_modules/**',
      '**/*.es.js',
      '**/*.es.js.map',
      '**/*.umd.js',
      '**/*.umd.map',
      '**/docs/**',
      'CHANGELOG.md',
    ],
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...reactHooksPlugin.configs.recommended.rules,

      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],
      'react/jsx-sort-props': [
        'error',
        {
          ignoreCase: true,
          noSortAlphabetically: false,
          reservedFirst: true,
          shorthandFirst: true,
          callbacksLast: true,
          shorthandLast: false,
        },
      ],
    },
  },
  {
    files: ['src/**/*.{test.ts,test.tsx}', 'src/vitest.setup.ts'],
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.vitest,
        ...globals.browser,
      },
      parserOptions: {
        project: './tsconfig.eslint.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      vitest: vitestPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['package.json'],
    languageOptions: {
      parser: eslintPluginJsonc,
    },
    plugins: {
      'package-json': packageJsonPlugin,
    },
    rules: {
      ...packageJsonPlugin.configs.recommended.rules,
    },
  },
  eslintConfigPrettier,
]);
