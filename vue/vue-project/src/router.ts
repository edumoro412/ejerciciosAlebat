import { createRouter, createWebHistory } from 'vue-router'
import CatalogPage from './view/CatalogPage.vue'
import HomePage from './view/HomePage.vue'
const routes = [
  { path: '/catalog', name: 'catalog', component: CatalogPage },
  { path: '/', name: 'home', component: HomePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
