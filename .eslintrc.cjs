/** @type {import("eslint").Linter.Config} */
module.exports = {
  "root": true,

  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "prettier"],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports"
      },
    ],
    "import/order": [
      "error",
      {
        "alphabetize": {
          "order": "asc"
        }
      }
    ],
    "jsx-a11y/no-autofocus": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        "allow": "as-needed",
        "extensions": [
          ".jsx",
          ".tsx"
        ]
      }
    ],
    "react/jsx-key": "error",
    "react/jsx-no-useless-fragment": [
      "error",
      {
        "allowExpressions": true,
      }
    ],
    "react/jsx-sort-props": [
      "error",
      {
        "ignoreCase": true
      }
    ],
    "react/no-string-refs": "error",
    "react-hooks/rules-of-hooks": "error",
    "require-await": "error",
    "react-hooks/exhaustive-deps": "error",
    "react-/no-direct-mutation-state": "error",
    "react/no-array-index-key": "error",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "quotes": [
      "error",
      "double",
      {
        "allowTemplateLiterals": true
      }
    ],
    "object-curly-spacing": [
      "error",
      "always",
      {
        "arraysInObjects": true,
        "objectsInObjects": true,
      },
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true,
      },
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true,
      },
    ],
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true,
      },
    ],
    "rest-spread-spacing": ["error", "never"], "no-multiple-empty-lines": [
      "error",
      {
        "max": 2,
      },
    ],
    "space-before-blocks": ["error", "always"],
    /** @see https://eslint.org/docs/latest/rules/padding-line-between-statements#rule-details */
    "padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev": "*",
        "next": "return",
      },
      {
        "blankLine": "always",
        "prev": ["const", "let", "var"],
        "next": "*",
      },
      {
        "blankLine": "any",
        "prev": ["const", "let", "var"],
        "next": ["const", "let", "var"],
      },
      {
        "blankLine": "always",
        "prev": ["case", "default"],
        "next": "*",
      },
      {
        "blankLine": "always",
        "prev": "if",
        "next": "*",
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "if",
      },
    ],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always",
      },
    ],
    "switch-colon-spacing": [
      "error",
      {
        "after": true,
        "before": false,
      },
    ],
    "curly": "error",
    "semi": "error",
    "semi-spacing": "error",
    "semi-style": ["error", "last"],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_",
      },
    ],
  },
};
