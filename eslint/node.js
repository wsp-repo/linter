const jestPlugin = require('eslint-plugin-jest');
const prettierPlugin = require('eslint-plugin-prettier');
const { isModuleInstalled } = require('./helpers');

module.exports = ({ files } = {}) => ({
  files: files || ['**/*.js', '**/*.ts'],
  plugins: {
    jest: jestPlugin,
    prettier: prettierPlugin,
  },
  rules: {
    ...jestPlugin.configs.recommended.rules,
    ...jestPlugin.configs.style.rules,
    ...prettierPlugin.configs.recommended.rules,

    'arrow-parens': [
      'warn',
      'always',
      {
        requireForBlockBody: true,
      },
    ],
    'class-methods-use-this': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    complexity: ['error', { max: 10 }],
    'function-paren-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'jest/no-deprecated-functions': isModuleInstalled('jest') ? 'error' : 'off',
    'max-lines': [
      'error',
      {
        max: 500,
        skipBlankLines: false,
        skipComments: true,
      },
    ],
    'max-lines-per-function': [
      'error',
      {
        max: 200,
        skipBlankLines: false,
        skipComments: true,
      },
    ],
    'max-params': ['error', { max: 3 }],
    'no-await-in-loop': 'off',
    'no-continue': 'off',
    'no-empty-function': 'off',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-promise-executor-return': 'off',
    'no-restricted-syntax': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: '*',
        prev: ['block-like'],
      },
      {
        blankLine: 'always',
        next: 'if',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: '*',
        prev: 'if',
      },
    ],
    'prettier/prettier': 'error',
    'require-await': 'off',
    'sort-imports': 'error',
    'sort-keys': 'error',
    strict: 'off',
  },
});
