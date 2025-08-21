import router from '@shared/router';
import type { App } from 'vue';

export default {
  install(app: App) {
    app.use(router);
  },
};
