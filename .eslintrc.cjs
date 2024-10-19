/**
 * @file ESLint configuration file.
 * This file configures ESLint for the project, setting up rules, parser options,
 * and plugins for linting TypeScript and React code.
 * 
 * @see {@link https://eslint.org/docs/latest/use/configure/|ESLint Configuration Documentation}
 * @see {@link https://typescript-eslint.io/|TypeScript ESLint Documentation}
 * @see {@link https://github.com/jsx-eslint/eslint-plugin-react|eslint-plugin-react Documentation}
 * @see {@link https://chakra-ui.com/docs/components/with-scripts#eslint-plugin|chakra-ui ESLint Plugin Documentation}
 * @see {@link https://github.com/storybookjs/eslint-plugin-storybook|eslint-plugin-storybook Documentation}
 */

const path = require('path')

module.exports = {
  /** 
   * Define this configuration as the root of the project. 
   * @type {boolean}
   * @default true
   */
  root: true,

  /**
   * Environment settings.
   * Specifies the environments in which the code runs, adding predefined global variables.
   * - `browser`: Enable browser global variables.
   * - `es2020`: Enable ECMAScript 2020 globals and features.
   * 
   * @type {Object}
   * @property {boolean} browser - Enables browser environment.
   * @property {boolean} es2020 - Enables ES2020 environment.
   * @see {@link https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-environments|ESLint Environment Documentation}
   */
  env: {
    browser: true,
    es2020: true
  },

  /**
   * Extend configuration with recommended ESLint and plugin rules.
   * - `eslint:recommended`: Base recommended rules by ESLint.
   * - `plugin:react/recommended`: Recommended React-specific rules.
   * - `plugin:react/jsx-runtime`: Enables rules for JSX without importing React.
   * - `plugin:react-hooks/recommended`: Enforces rules for React Hooks.
   * - `plugin:storybook/recommended`: Recommended rules for Storybook.
   * 
   * @type {string[]}
   * @see {@link https://eslint.org/docs/latest/rules/|ESLint Recommended Rules}
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react#recommended|React Plugin Recommended Rules}
   * @see {@link https://github.com/storybookjs/eslint-plugin-storybook#recommended|Storybook Plugin Recommended Rules}
   */
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended'
  ],

  /**
   * Ignore specific files and directories.
   * - `dist`: Ignoring the build output folder.
   * - `.eslintrc.cjs`: Prevent linting of this configuration file.
   * 
   * @type {string[]}
   * @see {@link https://eslint.org/docs/latest/user-guide/configuring/ignoring-code#ignorepatterns-in-config-files|ESLint Ignore Patterns Documentation}
   */
  ignorePatterns: ['dist', '.eslintrc.cjs'],

  /**
   * Specify the parser to use for ESLint.
   * Using `@typescript-eslint/parser` for parsing TypeScript files.
   * 
   * @type {string}
   * @see {@link https://typescript-eslint.io/parser|TypeScript ESLint Parser Documentation}
   */
  parser: "@typescript-eslint/parser",

  /**
   * Configuration options for the TypeScript parser.
   * - `ecmaVersion`: Specify the ECMAScript version to use.
   * - `sourceType`: Set to `module` to enable ECMAScript modules.
   * - `project`: Enable project-based linting (requires `tsconfig.json`).
   * - `tsconfigRootDir`: Specifies the directory containing `tsconfig.json`.
   * 
   * @type {Object}
   * @property {string} ecmaVersion - Specify the ECMAScript version.
   * @property {string} sourceType - Type of modules (module or script).
   * @property {boolean} project - Enable TypeScript project-based linting.
   * @property {string} tsconfigRootDir - Root directory for `tsconfig.json`.
   * @see {@link https://typescript-eslint.io/parser/#parseroptionsproject|TypeScript Parser Options}
   */
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },

  /**
   * Settings for the `eslint-plugin-react` and module resolver.
   * - `react`: Specifies React version to use (18.2).
   * - `import/resolver`: Define path aliases for resolving modules.
   * 
   * @type {Object}
   * @property {Object} react - React-specific settings.
   * @property {string} react.version - React version to be used.
   * @property {Object} import.resolver - Module resolution settings.
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react#configuration|React Plugin Configuration}
   * @see {@link https://github.com/benmosher/eslint-plugin-import#resolvers|eslint-plugin-import Resolvers Documentation}
   */
  settings: {
    react: { version: '18.2' },
    'import/resolver': {
      alias: {
        map: [
          ['@components', path.resolve(__dirname, 'src')],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
    }
  },

  /**
   * Plugins used for additional linting rules.
   * - `react-refresh`: Enables React Fast Refresh linting.
   * - `jsdoc`: Adds JSDoc linting rules.
   * - `chakra-ui`: Enforces best practices for Chakra UI components.
   * 
   * @type {string[]}
   * @see {@link https://www.npmjs.com/package/eslint-plugin-jsdoc|eslint-plugin-jsdoc Documentation}
   * @see {@link https://github.com/chakra-ui/eslint-plugin-chakra-ui|chakra-ui Plugin Documentation}
   */
  plugins: [
    'react-refresh',
    'jsdoc',
    "chakra-ui"
  ],

  /**
   * Custom rules to enforce or modify linting behavior.
   * - `jsdoc/no-undefined-types`: Warns on undefined types in JSDoc.
   * - `react/jsx-no-target-blank`: Disables rule for `target="_blank"` without `rel="noopener"`.
   * - `react-refresh/only-export-components`: Warn when non-components are exported.
   * - `chakra-ui/props-order`: Enforces consistent ordering of Chakra UI props.
   * - `chakra-ui/props-shorthand`: Requires shorthand properties for Chakra UI components.
   * - `chakra-ui/require-specific-component`: Enforces the usage of specific Chakra UI components.
   * 
   * @type {Object}
   * @property {number|string} jsdoc/no-undefined-types - JSDoc linting rule for undefined types.
   * @property {string} react/jsx-no-target-blank - React rule for anchor security.
   * @property {Object[]} react-refresh/only-export-components - Fast Refresh rule for component exports.
   * @property {string} chakra-ui/props-order - Rule for Chakra UI prop ordering.
   * @property {string} chakra-ui/props-shorthand - Rule for Chakra UI shorthand props.
   * @property {string} chakra-ui/require-specific-component - Rule to enforce Chakra UI component specificity.
   * @see {@link https://eslint.org/docs/latest/rules/|ESLint Rules Documentation}
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react|React Plugin Rules}
   * @see {@link https://github.com/chakra-ui/eslint-plugin-chakra-ui|Chakra UI Plugin Rules}
   */
  rules: {
    "jsdoc/no-undefined-types": 1,
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "chakra-ui/props-order": "error",
    "chakra-ui/props-shorthand": "error",
    "chakra-ui/require-specific-component": "error",
  },
}
