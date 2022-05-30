import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import registerRouteGuard from './Interceptor'
// routes.push({
//   path: '/',
//   redirect: '/login',
// })
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/pages/index.vue'),
    children: [
      { path: '/home', component: () => import('@/pages/index/index.vue'), name: 'home' },
      { path: 'exchange', component: () => import('@/pages/exchange/index.vue'), name: 'exchange' },
      { path: 'help', component: () => import('@/pages/help/index.vue'), name: 'help' },
      { path: 'about', component: () => import('@/pages/about/index.vue'), name: 'about' },
    ],
  },
]
//导入生成的路由数据
const router = createRouter({
  history: createWebHistory(),
  routes,
})
// 注册路由守卫
registerRouteGuard(router)
export default router
