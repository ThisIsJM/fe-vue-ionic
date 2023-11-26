import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import StartView from "../views/StartView.vue"
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: StartView
    },
    {
      path: '/Login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/Home',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
