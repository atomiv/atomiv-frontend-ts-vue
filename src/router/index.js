import Vue from 'vue'
import VueRouter from 'vue-router'

import Customers from '@/app/customers/pages/Customers'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: { name: 'Customers' }
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import(/* webpackChunkName: "orders" */ '@/app/orders/pages/Orders')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "products" */ '@/app/products/pages/Products')
  },
  {
    path: '/suppliers',
    name: 'Suppliers',
    component: () => import(/* webpackChunkName: "suppliers" */ '@/app/suppliers/pages/Suppliers')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
