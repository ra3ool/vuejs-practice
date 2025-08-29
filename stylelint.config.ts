import type { Config } from 'stylelint';

const config: Config = {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    // General rules
    'import-notation': 'string',
    'at-rule-no-unknown': null,
    'unit-no-unknown': [
      true,
      {
        ignoreFunctions: ['size'],
      },
    ],
    'property-no-unknown': null,
    'selector-class-pattern': null,
    'custom-property-pattern': null,
    'no-empty-source': null,
    'block-no-empty': null,
    'function-name-case': null,
    'no-duplicate-selectors': null,
    'keyframes-name-pattern': null,
    'comment-no-empty': null,
    'no-descending-specificity': null,

    // SCSS rules
    'scss/dollar-variable-pattern': null,
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/at-rule-no-unknown': true,
    'scss/at-extend-no-missing-placeholder': null,
    'scss/no-global-function-names': null,
    'scss/function-no-unknown': null,
    'scss/operator-no-unspaced': null,
    'scss/media-feature-value-dollar-variable': null,
    'scss/double-slash-comment-whitespace-inside': null,
    'scss/double-slash-comment-inline': null,
    'scss/declaration-nested-properties': 'never',

    // Pseudo-class handling (Vue deep selector)
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', ':deep'], // use "::v-deep" if Vue 3 only
      },
    ],

    // Ordering
    'order/order': [
      [
        'declarations',
        'custom-properties',
        { type: 'at-rule', name: 'include' },
      ],
    ],
    'order/properties-alphabetical-order': null,

    // Others
    'declaration-block-no-redundant-longhand-properties': null,
    'number-max-precision': null,
  },

  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
};

export default config;
