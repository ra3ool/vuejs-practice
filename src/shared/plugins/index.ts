import type { App } from 'vue';
import router from './router';
// import pinia from './pinia';
// import uiLibrary from './ui-library';
// import i18n from './i18n';

const plugins = [
  router,
  // pinia,
  // uiLibrary,
  // i18n,
];

export default {
  install(app: App) {
    plugins.forEach((plugin) => {
      app.use(plugin);
    });
  },
};
