export default {
  // JavaScript/TypeScript/Vue files
  'src/**/*.{js,mjs,cjs,ts,mts,cts,vue}': [
    'prettier --write',
    'eslint --fix',
    'git add', // Add files back to staging after fixes
  ],

  // Styles (Vue SFC styles + standalone SCSS)
  'src/**/*.{vue,scss,sass,css}': ['stylelint --fix', 'git add'],

  // Optional: Handle other file types
  '*.{json,md,yml,yaml}': ['prettier --write', 'git add'],
};
