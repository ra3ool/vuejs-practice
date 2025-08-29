import { routes as componentsRoutes } from '@/components/routes';
import { routes as dashboardRoutes } from '@/dashboard/routes';
import { createRouter, createWebHistory } from 'vue-router';
import { routes as playgroundRoute } from './playground';

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'dashboard' },
    },
    ...playgroundRoute,
    ...dashboardRoutes,
    ...componentsRoutes,
  ],
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  //TODO all authentication check
  // if (!to.meta.isGuest && !isAuthenticated.value) {
  //   return next({ name: AUTH_ROUTES.LOGIN_NAME });
  // }

  // if (to.meta.isGuest && isAuthenticated.value) {
  //   return next({ name: "dashboard" });
  // }

  //TODO add acl

  //TODO add title and description change

  next();
});

export default router;
