## Установка модуля
```
npm i --save-dev --save-exact @zalib/linter
```

## Подключение конфигов

### eslint
Начиная с версии **eslint@9** изменился подход к файлам настройки. Файлы .eslintignore и .eslint.js заменяются одним файлом eslint.config.js (по умолчанию). Пример конфига **eslint.config.js** из корня сервиса.
```
const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
  {
    ignores: ['**/node_modules/**', '**/dist/**'],
  },
  require('@zalib/linter/eslint/node')(),
  require('@zalib/linter/eslint/node-ts')(), // если нужен
]);
```

Если необходимо ограничить путь к файлам только определенными директориями или для TS-проекта файл tsconfig.json имеет специфический путь или имя, тогда подключение нужно проводить с указанием необходимых параметров:
```
const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
  {
    ignores: ['**/node_modules/**', '**/dist/**'],
  },
  require('@zalib/linter/eslint/node')({
    files: ['src/**/*.js', 'src/**/*.ts'] // или просто ['src/**/*.js']
  }),
  require('@zalib/linter/eslint/node-ts')({
    files: ['src/**/*.ts', 'examples/**/*.ts'],
    tsconfig: './tsconfig.dev.json'
  }),
]);
```

### prettier
Добавить в **package.json** в корневую секцию:
```
"prettier": "@zalib/linter/prettier"
```

## Использование

### Подключение "коротких" команд
Добавить в **package.json** в секцию **scripts**:
```
"format": "prettier --write 'src/**/*.ts'",
"lint": "eslint --quiet",
"lint:fix": "eslint --quiet --fix",
"lint:warns": "eslint --max-warnings 0",
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
