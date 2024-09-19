import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  ...tseslint.configs.recommended,

  {
    ignores: ['.node_modules/*'],
  },
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-unused-expressions': 'warn',
      'prefer-const': 'warn',
      'no-var': 'warn',
      'no-console': 'warn',
      '@typescript-eslint/no-require-imports': 'error',
    },
  },
];
