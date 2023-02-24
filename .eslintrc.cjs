// @ts-check
module.exports = {
  extends: [
    // https://github.com/storybookjs/eslint-plugin-storybook
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // have a single tsconfig for type-aware eslint rules to prevent OOMs
    // see https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/MONOREPO.md#important-note-regarding-large--10-multi-package-monorepos
    project: ['./tsconfig.json'],
  },
  plugins: [
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    '@typescript-eslint',
  ],
  root: true,
};
