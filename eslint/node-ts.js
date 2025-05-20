/* eslint-disable sort-keys */
/* eslint-disable max-lines-per-function */

const tsParser = require('@typescript-eslint/parser');
const tsEslintPlugin = require('@typescript-eslint/eslint-plugin');
const tsImportSortPlugin = require('eslint-plugin-simple-import-sort');
const tsSortPlugin = require('eslint-plugin-typescript-sort');
const tsImportPlugin = require('eslint-plugin-import');

function eslintMembersGroup(suffix) {
  return [
    `public-static-${suffix}`,
    `protected-static-${suffix}`,
    `private-static-${suffix}`,
    `#private-static-${suffix}`,

    `public-instance-${suffix}`,
    `protected-instance-${suffix}`,
    `private-instance-${suffix}`,
    `#private-instance-${suffix}`,

    `public-abstract-${suffix}`,
    `protected-abstract-${suffix}`,

    `public-${suffix}`,
    `protected-${suffix}`,
    `private-${suffix}`,
    `#private-${suffix}`,

    `static-${suffix}`,
    `instance-${suffix}`,
    `abstract-${suffix}`,

    suffix,
  ];
}

module.exports = ({ files, tsconfig } = {}) => ({
  files: files || ['**/*.ts'],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaFeatures: { modules: true },
      project: tsconfig || './tsconfig.json',
      sourceType: 'module',
    },
  },
  plugins: {
    '@typescript-eslint': tsEslintPlugin,
    'simple-import-sort': tsImportSortPlugin,
    'typescript-sort': tsSortPlugin,
    import: tsImportPlugin,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: tsconfig || './tsconfig.json',
      },
    },
  },
  rules: {
    ...tsEslintPlugin.configs.recommended.rules,
    ...tsEslintPlugin.configs['recommended-requiring-type-checking'].rules,
    ...tsImportPlugin.configs.errors.rules,
    ...tsImportPlugin.configs.warnings.rules,
    ...tsImportPlugin.configs.typescript.rules,

    'import/no-unresolved': 'error',
    'import/extensions': ['error', 'ignorePackages', { ts: 'never' }],

    '@typescript-eslint/await-thenable': 'warn',
    '@typescript-eslint/brace-style': 'off',
    /*
    '@typescript-eslint/comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        enums: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        generics: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
        tuples: 'always-multiline',
      },
    ],
    */
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          constructors: 'no-public',
        },
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          // Index signature
          'signature',
          'call-signature',

          // Fields
          ...eslintMembersGroup('field'),

          // Static initialization
          'static-initialization',

          // Constructors
          'public-constructor',
          'protected-constructor',
          'private-constructor',

          'constructor',

          // Getters
          ...eslintMembersGroup('get'),

          // Setters
          ...eslintMembersGroup('set'),

          // Methods
          ...eslintMembersGroup('method'),
        ],
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        selector: 'default',
        trailingUnderscore: 'forbid',
      },
      {
        format: null,
        modifiers: ['requiresQuotes'],
        selector: [
          'accessor',
          'classMethod',
          'classProperty',
          'enumMember',
          'objectLiteralMethod',
          'objectLiteralProperty',
          'typeMethod',
          'typeProperty',
        ],
      },
      {
        format: null,
        modifiers: ['destructured', 'unused'],
        selector: 'variable',
      },
      {
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'forbid',
        selector: 'variable',
        trailingUnderscore: 'forbid',
      },
      {
        format: ['camelCase', 'snake_case'],
        leadingUnderscore: 'forbid',
        selector: 'property',
        trailingUnderscore: 'forbid',
      },
      {
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        selector: 'parameter',
        trailingUnderscore: 'forbid',
      },
      {
        format: ['PascalCase'],
        leadingUnderscore: 'forbid',
        selector: 'typeLike',
        trailingUnderscore: 'forbid',
      },
      {
        format: ['PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'forbid',
        selector: 'enum',
        trailingUnderscore: 'forbid',
      },
      {
        format: ['PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'forbid',
        selector: 'enumMember',
        trailingUnderscore: 'forbid',
      },
    ],
    '@typescript-eslint/no-base-to-string': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: [
          'constructors',
          'private-constructors',
          'protected-constructors',
          'decoratedFunctions',
          'overrideMethods',
          'setters',
        ],
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-magic-numbers': [
      'warn',
      {
        ignore: [-1, 0, 1],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
      },
    ],
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/require-await': 'warn',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowAny: true,
        allowBoolean: true,
        allowNullish: true,
        allowNumber: true,
      },
    ],
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
    'import/default': 'error',
    'import/export': 'error',
    'import/first': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
    'import/no-cycle': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'max-classes-per-file': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group.
          ['^'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
          // Interfaces, typings
          ['^\\..*(\\/|\\.)(interface|types$|typings$)'],
          // Constants
          ['^\\..*(\\/|\\.)(constant|config)'],
        ],
      },
    ],
    'sort-imports': 'off',
    'typescript-sort/interface': 'error',
    'typescript-sort/type': 'error',
    'typescript-sort/enum': 'error',
  },
});
