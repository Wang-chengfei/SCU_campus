import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jiangan',
    name: 'jiangan',
    component: () => import('../views/jiangan.vue')
  },
  {
    path: '/wangjiang',
    name: 'wangjiang',
    component: () => import('../views/wangjiang.vue')
  },
  {
    path: '/huaxi',
    name: 'huaxi',
    component: () => import('../views/huaxi.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('../views/history.vue')
  },
  {
    path: '/fellow',
    name: 'fellow',
    component: () => import('../views/fellow.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
