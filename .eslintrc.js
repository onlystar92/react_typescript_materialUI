module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks"
  ],
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      tsx: true
    },
    ecmaVersion: 2018,
    project: [
      './packages/*/tsconfig.json',
    ],
    tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: false,
    EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
  },
  rules: {
    "react/display-name": 0,
    "react/prop-types": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-undef": "off",
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    "prettier/prettier": [
      "warn",
      {
        "endOfLine": "auto"
      }
    ]
  },
  settings: {
    "react": {
      "version": "detected"
    }
  }
};