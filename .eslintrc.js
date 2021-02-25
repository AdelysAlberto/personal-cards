module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'no-console': 'off',
    'no-constant-condition': 2,
    'no-irregular-whitespace': 2,
    'no-multi-spaces': 2,
    'no-lonely-if': 0,
    'no-plusplus': 0,
    'block-spacing': [ 'error', 'always' ],
    'no-mixed-spaces-and-tabs': 2,
    'jsx-quotes': [ 2, 'prefer-single' ],
    'comma-spacing': [ 'error', { before: false, after: true } ],
    'object-curly-spacing': [ 'error', 'always' ],
    'object-curly-newline': [ 'error', { multiline: true } ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'react/self-closing-comp': [ 'error', {
      component: true,
      html: true,
    } ],
    'react/jsx-filename-extension': [ 1, { extensions: [ '.js', '.jsx' ] } ],
    'arrow-parens': [ 'error', 'as-needed' ],
  },
};
