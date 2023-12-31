import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import StartView from '@/views/StartView.vue'
import HomeView from '@/views/HomeView.vue'
import OrderView from '@/views/OrderView.vue'
import DishView from '@/views/DishView.vue'
import OrderSummaryView from '@/views/OrderSummaryView.vue'
import OrderSuccessView from '@/views/OrderSuccessView.vue'
import LoyaltyPointsView from '@/views/LoyaltyPointsView.vue'

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
    },
    {
      path: '/Order',
      name: 'order',
      component: OrderView
    },
    {
      path: '/Order/Dish/:id',
      name: 'dish',
      component: DishView,
    },
    {
      path: '/OrderSummary',
      name: 'orderSummary',
      component: OrderSummaryView,
    },
    {
      path: '/OrderSuccess/:id',
      name: 'orderSuccess',
      component: OrderSuccessView
    },
    {
      path: '/LoyaltyPoints',
      name: 'loyaltyPoints',
      component: LoyaltyPointsView
    }
  ]
})

export default router
