export const routes = [
  {
    name: 'components',
    path: '/components',
    component: () => import('@/components/views/Index.view.vue'),
    meta: { layout: 'panel' },
    children: [
      {
        name: 'components.input',
        path: '/components/input',
        component: () => import('@/components/views/Input.view.vue'),
      },
      {
        name: 'components.button',
        path: '/components/button',
        component: () => import('@/components/views/Button.view.vue'),
      },
      {
        name: 'components.toggle',
        path: '/components/toggle',
        component: () => import('@/components/views/Toggle.view.vue'),
      },
    ],
  },
];
