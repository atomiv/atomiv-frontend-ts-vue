import Vue from 'vue'
import Vuex from 'vuex'

import customers from '@/app/customers/store/customersStore'
import orders from '@/app/orders/store/ordersStore'
import products from '@/app/products/store/productsStore'
import suppliers from '@/app/suppliers/store/suppliersStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    customers,
    orders,
    products,
    suppliers
  }
})
