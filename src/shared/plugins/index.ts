import type { App } from 'vue';
import pinia from './pinia';
import router from './router';
// import uiLibrary from './ui-library';
// import i18n from './i18n';

const plugins = [
  pinia,
  router,
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
