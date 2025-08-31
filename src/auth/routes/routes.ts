export const routes = [
  {
    name: 'auth',
    path: '/auth',
    component: () => import('@/auth/views/Index.view.vue'),
    meta: { isGuest: true },
    children: [
      {
        name: 'signin',
        path: '/signin',
        component: () => import('@/auth/views/SignIn.view.vue'),
      },
      {
        name: 'signup',
        path: '/signup',
        component: () => import('@/auth/views/SignUp.view.vue'),
      },
    ],
  },
];
