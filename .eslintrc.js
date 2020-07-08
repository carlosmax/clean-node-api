module.exports = {
  extends: ['airbnb-typescript/base'],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'linebreak-style': ['error', (process.platform === 'win32' ? 'windows' : 'unix')],
    'comma-dangle': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off'
  }
};
