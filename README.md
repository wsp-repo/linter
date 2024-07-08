## Установка модуля
```
npm i --save-dev --save-exact @wspro/linter@latest
```

## Подключение конфигов

### eslint
Пример конфига **.eslintrc.js** из корня сервиса.
```
const jsEslintConfig = require('@wspro/linter/eslint/js');
const tsEslintConfig = require('@wspro/linter/eslint/ts');

module.exports = {
  overrides: [
    {
      ...jsEslintConfig,
      files: ['*.js'],
    },
    {
      ...tsEslintConfig,
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
Добавить в **package.json** в корневую секцию:
```
"prettier": "@wspro/linter/prettier"
```

## Использование

### Подключение "коротких" команд
Добавить в **package.json** в секцию **scripts**:
```
"format": "prettier --write 'src/**/*.ts'",
"lint": "eslint 'src/**/*.{ts,js}' --quiet",
"lint:fix": "eslint 'src/**/*.{js,ts}' --quiet --fix",
"lint:warns": "eslint 'src/**/*.ts' --max-warnings 0",
```

### Автоматизация при работе в репозитории
Установить пакет **husky**:
```
npm i --save-dev --save-exact husky@latest
```

Добавить в **package.json** в корневую секцию:
```
"lint-staged": {
  "*.{js,ts}": [
    "eslint --quiet --max-warnings 0",
    "eslint --quiet --fix",
    "prettier --write"
  ]
},
"husky": {
  "hooks": {
    "pre-commit": "lint-staged --allow-empty"
  }
},
```

### Версии пакетов с отсуствием конфликтов
```
"devDependencies": {
  "@typescript-eslint/eslint-plugin": "6.21.0",
  "@typescript-eslint/parser": "6.21.0",
  "eslint": "8.57.0",
  "eslint-config-airbnb-base": "15.0.0",
  "eslint-config-airbnb-typescript": "17.1.0",
  "eslint-config-prettier": "9.1.0",
  "eslint-plugin-import": "2.29.1",
  "eslint-plugin-jest": "28.5.0",
  "eslint-plugin-jsx-a11y": "6.8.0",
  "eslint-plugin-prettier": "5.1.3",
  "eslint-plugin-simple-import-sort": "12.1.0",
  "eslint-plugin-typescript-sort": "0.1.11",
  "jest": "29.7.0",
  "prettier": "3.2.5",
  "typescript": "5.4.5"
}
```
