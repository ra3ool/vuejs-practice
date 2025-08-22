export const routes = [
  {
    path: '/playground',
    name: 'playground',
    component: () => import('@/shared/views/PlayGround.view.vue'),
    meta: { isGuest: true },
  },
];
