import { createRouter, createWebHistory } from 'vue-router';
import { routes as playgroundRoute } from './playground';

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: { name: 'playground' },
    },
    ...playgroundRoute,
  ],
  history: createWebHistory(),
});

export default router;
