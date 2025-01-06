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
    path: '/user',
    name: 'User',
    component:() => import('../pages/UserPage.vue')
  },
  {
    path: '/menu-editor',
    name: 'MenuEditor',
    component: () => import('../pages/MenuEditor.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    // 如果有保存的位置 (例如，返回按鈕)，則滾動到保存的位置
    if (savedPosition) {
      return savedPosition;
    } else {
      // 否則，滾動到頁面的頂部
      return { top: 0 };
    }
  },
})

export default router