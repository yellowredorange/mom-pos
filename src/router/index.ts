import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(), // 使用 Hash 模式
  routes,
})

export default router
