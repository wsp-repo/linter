const nodeBaseConfig = require('./node');

module.exports = {
  env: {
    ...nodeBaseConfig.env,
  },
  extends: [
    ...nodeBaseConfig.extends,
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'prettier',
    'plugin:prettier/recommended',
    'airbnb-base',
  ],
  files: ['*.js'],
  plugins: [
    ...nodeBaseConfig.plugins,
  ],
  rules: {
    ...nodeBaseConfig.rules,
    strict: 0,
  },
};
