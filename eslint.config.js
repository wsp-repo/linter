const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
  { ignores: ['**/node_modules/**'] },
  ...require('./eslint/node')(),
]);
