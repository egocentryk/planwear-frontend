module.exports = {
  "parser": "@typescript-eslint/parser",
  "root": true,
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended", // React rules
    "plugin:react-hooks/recommended", // React hooks rules
    "plugin:jsx-a11y/recommended", // Accessibility rules
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  },
  "rules": {
    // We will use TypeScript's types for component props instead
    'react/prop-types': 'off',

    // No need to import React when using Next.js
    'react/react-in-jsx-scope': 'off',

    // This rule is not compatible with Next.js's <Link /> components
    'jsx-a11y/anchor-is-valid': 'off',
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow-with-description",
        "ts-ignore": true,
        "ts-nocheck": true,
        "ts-check": false,
        "minimumDescriptionLength": 5
      }
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": [
      "error",
      { "allow": ["arrowFunctions"] }
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { "varsIgnorePattern": "^_", "argsIgnorePattern": "^_" }
    ],

    // TODO - enable these new recommended rules
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    // TODO - enable this
    "@typescript-eslint/naming-convention": "off",

    //
    // Internal repo rules
    //

    "@typescript-eslint/internal/no-poorly-typed-ts-props": "error",
    "@typescript-eslint/internal/no-typescript-default-import": "error",
    "@typescript-eslint/internal/prefer-ast-types-enum": "error",

    //
    // eslint base
    //

    "curly": ["error", "all"],
    "no-mixed-operators": "error",
    "no-console": "error",
    "no-process-exit": "error",

    //
    // eslint-plugin-eslint-comment
    //

    // require a eslint-enable comment for every eslint-disable comment
    "eslint-comments/disable-enable-pair": [
      "error",
      {
        "allowWholeFile": true
      }
    ],
    // disallow a eslint-enable comment for multiple eslint-disable comments
    "eslint-comments/no-aggregating-enable": "error",
    // disallow duplicate eslint-disable comments
    "eslint-comments/no-duplicate-disable": "error",
    // disallow eslint-disable comments without rule names
    "eslint-comments/no-unlimited-disable": "error",
    // disallow unused eslint-disable comments
    "eslint-comments/no-unused-disable": "error",
    // disallow unused eslint-enable comments
    "eslint-comments/no-unused-enable": "error",
    // disallow ESLint directive-comments
    "eslint-comments/no-use": [
      "error",
      {
        "allow": [
          "eslint-disable",
          "eslint-disable-line",
          "eslint-disable-next-line",
          "eslint-enable"
        ]
      }
    ],

    //
    // eslint-plugin-import
    //

    // disallow non-import statements appearing before import statements
    "import/first": "error",
    // Require a newline after the last import/require in a group
    "import/newline-after-import": "error",
    // Forbid import of modules using absolute paths
    "import/no-absolute-path": "error",
    // disallow AMD require/define
    "import/no-amd": "error",
    // forbid default exports
    "import/no-default-export": "error",
    // Forbid the use of extraneous packages
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true,
        "peerDependencies": true,
        "optionalDependencies": false
      }
    ],
    // Forbid mutable exports
    "import/no-mutable-exports": "error",
    // Prevent importing the default as if it were named
    "import/no-named-default": "error",
    // Prohibit named exports
    "import/no-named-export": "off", // we want everything to be a named export
    // Forbid a module from importing itself
    "import/no-self-import": "error",
    // Require modules with a single export to use a default export
    "import/prefer-default-export": "off" // we want everything to be named
  }
}
