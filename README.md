## установка модуля
Сначала нужно установить модуль через "npm i @wspro/eslint"

## подключение конфигов

### eslint
Пример конфига .eslintrc.js из корня сервиса.

module.exports = {
  overrides: [
    {
      extends: ['@wspro/eslint/js'],
      files: ['*.js'],
    },
    {
      extends: ['@wspro/eslint/ts'],
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        include: ['src/**/*.ts', 'test/**/*.ts', 'typings/**/*.ts'],
        project: './tsconfig.json',
      },
    },
  ],
  root: true,
};

### prettier
Добавить в `package.json` строчку

  "prettier": "@wspro/eslint"

