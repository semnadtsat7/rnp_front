module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off"
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  }
}
