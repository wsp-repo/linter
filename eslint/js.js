module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
    'jest/globals': true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['jest'],
  rules: {
    'arrow-parens': [
      1,
      'always',
      {
        requireForBlockBody: true,
      },
    ],
    'class-methods-use-this': 0,
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
    complexity: [2, { max: 10 }],
    'function-paren-newline': 0,
    'implicit-arrow-linebreak': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'max-lines': [
      2,
      {
        max: 500,
        skipBlankLines: false,
        skipComments: true,
      },
    ],
    'max-lines-per-function': [
      2,
      {
        max: 200,
        skipBlankLines: false,
        skipComments: true,
      },
    ],
    'max-params': [2, { max: 3 }],
    'no-await-in-loop': 0,
    'no-continue': 0,
    'no-plusplus': [
      2,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-restricted-syntax': 0,
    'padding-line-between-statements': [
      2,
      {
        blankLine: 'always',
        next: '*',
        prev: ['block-like'],
      },
    ],
    'react/jsx-filename-extension': 0,
    'require-await': 1,
    'sort-imports': 2,
    'sort-keys': 2,
    strict: 0,
  },
};
