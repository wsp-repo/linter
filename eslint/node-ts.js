const nodeBaseConfig = require('./node');

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
  env: {
    ...nodeBaseConfig.env,
  },
  extends: [
    ...nodeBaseConfig.extends,
    'typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:import/warnings',
  ],
  files: ['*.ts'],
  parser: '@typescript-eslint/parser',
  plugins: [
    ...nodeBaseConfig.plugins,
    '@typescript-eslint', 
    'simple-import-sort',
    'typescript-sort',
  ],
  rules: {
    ...nodeBaseConfig.rules,
    '@typescript-eslint/await-thenable': 1,
    '@typescript-eslint/brace-style': 0,
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
    '@typescript-eslint/indent': 0,
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
      // Правило, разрешающее написание "_id" с нижним подчеркиванием
      {
        filter: {
          match: true,
          regex: '^_id$',
        },
        format: null,
        leadingUnderscore: 'allow',
        selector: 'typeProperty',
        trailingUnderscore: 'forbid',
      },
    ],
    '@typescript-eslint/no-base-to-string': 0,
    '@typescript-eslint/no-empty-function': [
      2,
      {
        allow: [
          'constructors',
          'private-constructors',
          'protected-constructors',
          'decoratedFunctions',
          'overrideMethods',
          'setters',
        ]
      }
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
    '@typescript-eslint/no-unsafe-argument': 0,
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
    'typescript-sort/interface': 2,
    'typescript-sort/type': 2,
    'typescript-sort/enum': 2,
  },
};
