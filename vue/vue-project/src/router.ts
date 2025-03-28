import { createRouter, createWebHistory } from 'vue-router'
import CatalogPage from './view/CatalogPage.vue'
import HomePage from './view/HomePage.vue'
import ParentPage from './view/ParentPage.vue'
const routes = [
  { path: '/catalog', name: 'catalog', component: CatalogPage },
  { path: '/', name: 'home', component: HomePage },
  { path: '/parent', name: 'parent', component: ParentPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
