import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../pages/Menu.vue')
  },
  {
    path: '/item/:id',
    name: 'ItemDetail',
    component: () => import('../pages/ItemDetail.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../pages/Cart.vue')
  },
  {
    path: '/order-history',
    name: 'OrderHistory',
    component:() => import('../pages/OrderHistory.vue')
  },
  {
    path: '/menu-editor',
    name: 'MenuEditor',
    component: () => import('../pages/MenuEditor.vue')
  }
  // 可以根據需要添加更多路由
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router