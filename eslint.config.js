import globals from 'globals';
import pluginJs from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';

export default [
    pluginJs.configs.recommended,
    reactPlugin.configs.flat['jsx-runtime'],
    prettier,
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
            globals: { ...globals.browser },
        },
        plugins: {
            'react-refresh': reactRefreshPlugin,
            'react-hooks': reactHooksPlugin,
            import: importPlugin,
        },
        settings: {
            react: { version: 'detect' },
        },
        rules: {
            // React
            'react/prop-types': 'off',

            // Hooks
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            // Imports
            'import/no-duplicates': 'error',
            'import/order': [
                'warn',
                {
                    groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],

            // JS buenas prácticas
            'no-unused-vars': 'off',
            'no-undef': 'error',
            'no-console': 'warn',
            'no-var': 'error',
            'prefer-const': 'error',
        },
    },
];
