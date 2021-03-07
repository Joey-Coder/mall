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
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('pages/Detail.vue'),
        props: true
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
