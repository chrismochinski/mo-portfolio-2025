import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import react from "eslint-plugin-react";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    ignores: ["dist",
      "node_modules",
      "coverage",
    ],
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/no-unknown-property": "error", // Enforce camelCase for JSX attributes
      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
      'react/react-in-jsx-scope': 'off', // Vite takes care of importing React
      'import/no-unresolved': 'off', // Defer to TS
      'no-undef': 'off', // Defer to TS
      'react/no-array-index-key': 'off', // TS can type-check array keys
      'no-use-before-define': ['error', { functions: false }], // Allow function hoisting
      'react/require-default-props': 'off', // TS performs strict null checking, not necessary.
      'no-underscore-dangle': 'off', // Allow underscore in object keys
      'no-new': 'off',
      'no-nested-ternary': 'off',
      'no-console': ['error', { allow: ['error'] }],
      'no-restricted-syntax': 'off', // We bundle all our code, so we don't need to worry about using newer JS syntax
      'no-shadow': 'off',
      'react-hooks/rules-of-hooks': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
];
