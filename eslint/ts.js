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

module.exports = {
  extends: [
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'prettier',
    'plugin:prettier/recommended',
  ],
  files: ['*.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest', 'simple-import-sort', 'typescript-sort'],
  rules: {
    '@typescript-eslint/await-thenable': 1,
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
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      2,
      {
        accessibility: 'explicit',
        overrides: {
          constructors: 'no-public',
        },
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 2,
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
      2,
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
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/no-magic-numbers': [
      1,
      {
        ignore: [-1, 0, 1],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
      },
    ],
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-unsafe-return': 0,
    '@typescript-eslint/require-await': 1,
    '@typescript-eslint/restrict-template-expressions': [
      2,
      {
        allowAny: true,
        allowBoolean: true,
        allowNullish: true,
        allowNumber: true,
      },
    ],
    '@typescript-eslint/return-await': [2, 'in-try-catch'],
    'arrow-parens': [
      1,
      'always',
      {
        requireForBlockBody: true,
      },
    ],
    'class-methods-use-this': 0,
    'comma-dangle': 0,
    complexity: [2, { max: 10 }],
    'function-paren-newline': 0,
    'implicit-arrow-linebreak': 0,
    'import/default': 2,
    'import/export': 2,
    'import/first': 2,
    'import/named': 2,
    'import/namespace': 2,
    'import/newline-after-import': 2,
    'import/no-cycle': 2,
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: true,
      },
    ],
    'import/order': 0,
    'import/prefer-default-export': 0,
    'max-classes-per-file': 0,
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
    'no-promise-executor-return': 0,
    'no-restricted-syntax': 0,
    'padding-line-between-statements': [
      2,
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
    'react/jsx-filename-extension': 0,
    'require-await': 0,
    'simple-import-sort/imports': [
      2,
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
    'sort-imports': 0,
    'sort-keys': 2,
    'typescript-sort/interface': 2,
    'typescript-sort/type': 2,
    'typescript-sort/enum': 2,
  },
};
