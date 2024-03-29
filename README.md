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
