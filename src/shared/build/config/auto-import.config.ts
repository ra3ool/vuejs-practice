// auto-import.config.ts
import AutoImport from 'unplugin-auto-import/vite';

export default AutoImport({
  // Auto import Vue composition APIs, Vue Router, Pinia, etc.
  imports: ['vue', 'vue-router' /*'pinia'*/],

  // Scan these dirs for composables & utils
  dirs: [
    'src/shared/composables/**/*.composable.ts',
    'src/shared/utils/**/*.util.ts',
  ],

  // Generate .d.ts file for auto-imported APIs
  dts: 'auto-imports.d.ts',

  // Vue template usage auto import
  vueTemplate: true,

  eslintrc: {
    enabled: true, // generate eslint config
    filepath: './.eslintrc-auto-import.json',
    globalsPropValue: true,
  },
});
