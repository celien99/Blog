import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: '首页',
      component: () => import('../layout/index.vue')
    },
    {
      path: '/login',
      name: '登录',
      component: () => import('../views/login/Login.vue')
    },
  ]
})

export default router
