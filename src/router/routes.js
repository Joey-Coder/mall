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
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('pages/Login.vue')
      },
      {
        path: '/user/:id',
        name: 'user',
        props: true,
        component: () => import('pages/User.vue')
      },
      {
        path: '/forgot',
        name: 'forgot',
        component: () => import('pages/Forgot.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  //
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('pages/Checkout.vue')
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
