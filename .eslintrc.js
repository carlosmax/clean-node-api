module.exports = {
  extends: ['airbnb-typescript/base'],
  parserOptions: {
    project: './tsconfig.eslint.json'
  },
  rules: {
    'linebreak-style': ['error', (process.platform === 'win32' ? 'windows' : 'unix')],
    'comma-dangle': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-syntax': 0,
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': 0,
    'max-len': 0
  }
};
