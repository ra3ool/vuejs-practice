export const routes = [
  {
    name: 'dashboard',
    path: '/dashboard',
    component: () => import('@/dashboard/views/Dashboard.view.vue'),
    meta: { layout: 'panel' },
  },
];
