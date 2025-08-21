export const routes = [
  {
    path: '/playground',
    name: 'playground',
    component: () => import('@shared/views/playground.view.vue'),
    meta: { isGuest: true },
  },
];
