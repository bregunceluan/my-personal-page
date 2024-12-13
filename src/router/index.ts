import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import BlogViem from '@/views/BlogViem.vue'
import Portfolio from '@/views/Portfolio.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/blog', component: BlogViem },
  { path: '/portfolio', component: Portfolio },

]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
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