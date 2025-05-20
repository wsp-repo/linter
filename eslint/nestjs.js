const nestjsPlugin = require('./plugin-nestjs');

module.exports = ({ files } = {}) => ({
  files: files || ['**/*.controller.ts'],
  plugins: {
    nestjs: nestjsPlugin,
  },
  rules: {
    'nestjs/api-response': 'error',
  },
});
