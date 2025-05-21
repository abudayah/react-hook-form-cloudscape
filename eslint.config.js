import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginJsonc from "eslint-plugin-jsonc";
import packageJsonPlugin from "eslint-plugin-package-json";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import eslintPluginVitest from "eslint-plugin-vitest";
import globals from "globals";
import * as tseslint from "typescript-eslint";

const IGNORE_PATTERNS = [
  // Build artifacts and generated files
  "components/**",
  "**/coverage/**",
  "**/*.es.js",
  "**/*.es.js.map",
  "**/*.umd.js",
  "**/*.umd.map",

  // Configuration and metadata
  "index.d.ts",
  "*.config.ts",
  "CHANGELOG.md",
  "package-lock.json",

  // Directories
  ".husky/**",
  ".vscode/**",
  ".idea/**",
  ".github/**",
  "**/node_modules/**",
  "**/docs/**",

  // System files
  ".DS_Store",
];

export default defineConfig([
  {
    // For faster linting
    ignores: IGNORE_PATTERNS,
  },
  // Base JS/TS configuration
  {
    files: ["**/*.{js,ts,tsx,jsx}"],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],
      "no-unused-vars": "off", // Handled by TypeScript
    },
  },
  // TypeScript specific configuration
  {
    files: ["**/*.{ts,tsx}"],
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  // React specific configuration
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/prop-types": "off", // Not needed with TypeScript
      "react/react-in-jsx-scope": "off", // Not needed with newer React
      "react/jsx-uses-react": "off", // Not needed with newer React
      "react/jsx-no-undef": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-key": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  // Import plugin configuration
  {
    files: ["**/*.{js,ts,tsx,jsx}"],
    plugins: {
      import: eslintPluginImport,
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "import/no-duplicates": "error",
    },
  },
  // Vitest configuration for test files
  {
    files: ["src/**/*.{test.ts,test.tsx}", "src/vitest.setup.ts"],
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.vitest,
        ...globals.browser,
      },
      parserOptions: {
        project: "./tsconfig.eslint.json",
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      vitest: eslintPluginVitest,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  // JSON configuration
  {
    files: ["**/*.json"],

    plugins: {
      jsonc: eslintPluginJsonc,
    },
    languageOptions: {
      parser: eslintPluginJsonc,
    },
    rules: {
      ...eslintPluginJsonc.configs["recommended-with-json"].rules,
    },
  },
  // Package.json specific configuration
  {
    files: ["package.json"],
    languageOptions: {
      parser: eslintPluginJsonc,
    },
    plugins: {
      "package-json": packageJsonPlugin,
    },
    rules: {
      ...packageJsonPlugin.configs.recommended.rules,
    },
  },
  // Apply Prettier config at the end to override formatting rules
  eslintConfigPrettier,
]);
