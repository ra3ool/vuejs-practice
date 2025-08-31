import router from '@shared/router';
import type { App } from 'vue';

export default {
  async install(app: App) {
    app.use(router);

    await router.isReady();
  },
};
