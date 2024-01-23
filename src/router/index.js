import { createRouter, createWebHistory } from 'vue-router'
import applyIntership from '../views/applyIntership.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'applyInternship',
      component: applyIntership
    }
  ]
})

export default router
