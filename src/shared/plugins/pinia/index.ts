import { piniaPersist } from '@shared/libs';
import { createPinia } from 'pinia';
import type { App } from 'vue';

export default {
  install(app: App) {
    const pinia = createPinia();
    pinia.use(piniaPersist);
    app.use(pinia);
  },
};
