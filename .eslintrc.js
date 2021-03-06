module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
  },
  settings: {
    'import/extensions': ['.ts', '.tsx'],
    'import/resolver': {
      alias: {
        map: [
          ['@navigation', './src/Navigation'],
          ['@screen', './src/Screen'],
          ['@assets', './assets'],
          ['@root', './src'],
          ['@components', './src/Components'],
          ['@redux', './src/Redux'],
          ['@theme', './src/Theme'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
};
