import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/Menu',
    name: 'Menu',
    component: () => import('@/pages/Menu.vue'),
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: () => import('@/pages/Cart.vue'),
  },
]

export default routes
