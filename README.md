## установка модуля
```
npm i --save-dev --save-exact @wspro/linter@latest
```

## подключение конфигов

### eslint
Пример конфига **.eslintrc.js** из корня сервиса.
```
module.exports = {
  overrides: [
    {
      extends: ['./node_modules/@wspro/linter/eslint/js'],
      files: ['*.js'],
    },
    {
      extends: ['./node_modules/@wspro/linter/eslint/ts'],
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        include: ['./src/**/*.ts', './test/**/*.ts'],
        project: './tsconfig.json',
      },
    },
  ],
  root: true,
};
```

### prettier
Добавить в **package.json** строчку
```
"prettier": "@wspro/linter/prettier"
```
