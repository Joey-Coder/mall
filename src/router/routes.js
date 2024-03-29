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
        path: '/login/:id',
        name: 'login',
        component: () => import('pages/Login.vue'),
        props: true
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
      },
      {
        path: '/payment',
        name: 'payment',
        component: () => import('pages/Payment.vue')
      },
      {
        path: '/shipping',
        name: 'shipping',
        component: () => import('pages/Shipping.vue')
      },
      {
        path: '/faq',
        name: 'faq',
        component: () => import('src/pages/Faq.vue')
      },
      {
        path: '/protection',
        name: 'protection',
        component: () => import('src/pages/Protection.vue')
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
