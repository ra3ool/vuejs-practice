import { routes as componentsRoutes } from '@/components/routes';
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
    ...componentsRoutes,
  ],
  history: createWebHistory(),
});

export default router;
