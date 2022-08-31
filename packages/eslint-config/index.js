/** @type {import('eslint').Linter.Config} */
module.exports = {
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
    react: { version: '18' },
    next: { rootDir: ['apps/*/'] }
  },
  ignorePatterns: ['dist', 'build', 'node_modules']
}
