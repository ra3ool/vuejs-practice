export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
  ],
  rules: {
    quotes: 'single',
    'color-hex-length': 'short',
    'vue/block-order': ['script', 'template', 'style'],
  },
};
