import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Order from '../views/Order.vue'
import OrderSummary from '../views/OrderSummary.vue'
import TableForm from '../views/TableForm.vue'
import QrCode from '../views/qrCode.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/ordersummary',
      name: 'ordersummary',
      component: OrderSummary
    },
    {
      path: '/tables',
      name: 'tables',
      component: TableForm
    },
    {
      path: '/qrCode',
      name: 'qrCode',
      component: QrCode
    }
  ]
})

export default router
