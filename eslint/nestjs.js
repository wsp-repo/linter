const nestjsPlugin = require('./plugin-nestjs');

module.exports = ({ files } = {}) => [
  {
    files: files || ['**/*.controller.ts'],
    plugins: {
      nestjs: nestjsPlugin,
    },
    rules: {
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          paths: [
            {
              allowTypeImports: true,
              importNames: ['Controller'],
              message: 'Use @ApiController decorator',
              name: '@nestjs/common',
            },
          ],
        },
      ],
      'nestjs/api-response': 'error',
    },
  },
];
