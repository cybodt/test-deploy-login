import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import react from 'eslint-plugin-react';
import jsA11y from 'eslint-plugin-jsx-a11y';

export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['**/*.{js,jsx}'],
		extends: [js.configs.recommended, reactHooks.configs['recommended-latest'], reactRefresh.configs.vite],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module'
			}
		},
		plugins: {
			react: react,
			'jsx-a11y': jsA11y
		},
		rules: {
			'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'no-console': 'error',
			strict: ['error', 'global'],
			'one-var': ['error', { let: 'consecutive', const: 'never' }],
			'prefer-const': 0,
			'no-restricted-syntax': 0,
			'no-use-before-define': ['error', { functions: false }],
			'prefer-arrow-callback': 0,
			'func-names': ['error', 'never'],
			'consistent-return': 0,
			'array-callback-return': 0,
			'prefer-destructuring': 0,
			'no-unused-expressions': 'off',
			'no-plusplus': 'off',
			'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
			'no-underscore-dangle': 0,
			'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
			'react/jsx-one-expression-per-line': 'off',
			'react/jsx-boolean-value': ['error', 'always'],
			'react/prop-types': 0,
			'react/no-unescaped-entities': 0,
			'jsx-a11y/media-has-caption': 'off',
			'jsx-a11y/label-has-associated-control': [
				2,
				{
					assert: 'either' // either check for `htmlFor` or `nesting`
				}
			]
		}
	}
]);
