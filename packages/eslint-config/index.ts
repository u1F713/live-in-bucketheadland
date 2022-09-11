import type { Linter } from 'eslint'

const config: Linter.Config = {
  env: {
    es2022: true,
    browser: true
  },
  extends: [
    'next',
    'turbo',
    'prettier',
    'eslint:recommended',
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    react: { version: 'detect' }
  },
  ignorePatterns: ['dist', 'build', 'node_modules']
}

export = config
