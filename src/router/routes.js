const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'index', component: () => import('pages/Index.vue') },
      {
        path: '/products/:id',
        name: 'products',
        component: () => import('pages/Products.vue'),
        props: true
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('pages/About.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
