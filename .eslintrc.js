/** @type { import('eslint').Linter.Config } */
module.exports = {
  extends: 'eslint-config-intense',
  parserOptions: { project: 'tsconfig.json' },
  rules: {
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    'object-curly-newline': 'off',
  },
};
