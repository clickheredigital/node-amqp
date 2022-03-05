module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
  },
  extends: [
    "airbnb-base",
    "prettier",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": [ "@typescript-eslint" ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: 11 },
  settings: { "import/resolver": { node: { extensions: [ ".js", ".jsx", ".ts", ".tsx" ] } } },
  ignorePatterns: [ "dist" ],
  rules: {
    strict: [ "error", "global" ],
    quotes: [ "error", "double", { allowTemplateLiterals: true } ],
    semi: [ "error", "always" ],
    curly: [ "error", "all" ],
    "dot-notation": [ "error", { allowKeywords: true } ],
    "no-multi-spaces": [ "error", { exceptions: { Property: false }, ignoreEOLComments: true } ],
    "no-restricted-syntax": "off",
    "no-plusplus": [ "error", { allowForLoopAfterthoughts: true } ],
    "no-await-in-loop": "off",
    "no-param-reassign": "off",
    "no-loop-func": "off",
    "no-console": "off",
    "no-underscore-dangle": "off",
    "no-shadow": "off",
    "import/no-extraneous-dependencies": [ "error", { devDependencies: true } ],
    "brace-style": [ "error", "1tbs", { "allowSingleLine": true } ],
    "indent": "off",
    "array-bracket-spacing": [ "error", "always", { objectsInArrays: true } ],
    "object-curly-spacing": [ "error", "always" ],
    "comma-dangle": [ "error", "only-multiline" ],
    "newline-after-var": [ "error", "always" ],
    "array-bracket-newline": [ "error", { multiline: true } ],
    "function-paren-newline": [ "error", "consistent" ],
    "object-curly-newline": [ "error", { multiline: true } ],
    "eol-last": [ "error", "always" ],
    "space-before-function-paren": [ "error", { "anonymous": "always", "named": "never", "asyncArrow": "always" } ],
    "multiline-comment-style": [ "error", "starred-block" ],
    "lines-around-comment": [ "error", { beforeBlockComment: true, afterBlockComment: false, beforeLineComment: true, afterLineComment: false } ],
    "no-multiple-empty-lines": [ "error", { max: 1, maxEOF: 1, maxBOF: 0 } ],
    "space-before-blocks": [ "error", "always" ],
    "keyword-spacing": [ "error", { before: true, after: true } ],
    "arrow-spacing": [ "error", { before: true, after: true } ],
    "no-self-assign": [ "error", { "props": true } ],
    "@typescript-eslint/no-shadow": [ "error" ],
    "@typescript-eslint/indent": [ "error", 2 ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ]
  }
};
