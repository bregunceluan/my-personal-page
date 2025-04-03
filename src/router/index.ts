import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import BlogView from '@/views/BlogViem.vue'
import BlogPostView from '@/views/BlogPostView.vue'
import PortfolioView from '@/views/PortfolioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/blog/:postName',
      name: 'blog-post',
      component: BlogPostView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView
    }
  ]
})

export const availableRoutesBR = [
  {nome:"Início", value:'/'},
  {nome:'Sobre', value:'/about'},
  {nome:'Blog', value:'/blog'},
  {nome:'Portfólio', value:'/portfolio'},
]

export const availableRoutesENG = [
  {nome:"Home", value:'/'},
  {nome:'About', value:'/about'},
  {nome:'Blog', value:'/blog'},
  {nome:'Portfolio', value:'/portfolio'},
]

export default router;