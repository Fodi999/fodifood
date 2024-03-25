import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', name: 'home',component: HomeView },
  {path: '/sturgeon', name: 'sturgeon', component: () => import('../views/SturgeonRecipe.vue')}
]
})

export default router
