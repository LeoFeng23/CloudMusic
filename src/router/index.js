import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/recommend',
    children: [
      {
        path: "recommend",
        name: "Recommend",
        component: () => import(/* webpackChunkName: "recommend" */   "@/views/Recommend")
      },
      {
        path: "singers",
        name: "Singers",
        component: () => import(/* webpackChunkName: "singers" */   "@/views/Singers")
      },
      {
        path: "rank",
        name: "Rank",
        component: () => import(/* webpackChunkName: "rank" */   "@/views/RankList")
      },
    ]
  },
  {
    path: '**',
    redirect: '/recommend'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
