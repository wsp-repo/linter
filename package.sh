#!/bin/bash

echo "Remove node_modules & package-lock.json"
rm -r -f -d ./node_modules ./package-lock.json

echo "Install devDependencies..."
npm install --save-dev --save-exact \
    @typescript-eslint/eslint-plugin@latest \
    @typescript-eslint/parser@latest \
    eslint@latest \
    eslint-config-airbnb-base@latest \
    eslint-config-airbnb-typescript@latest \
    eslint-config-prettier@latest \
    eslint-plugin-import@latest \
    eslint-plugin-jest@latest \
    eslint-plugin-jsx-a11y@latest \
    eslint-plugin-prettier@latest \
    eslint-plugin-simple-import-sort@latest \
    jest@latest \
    prettier@latest \
    typescript@latest

echo "Installed devDependencies"
