import factory from '@/store/factory'

const ordersStore = factory('orders')
const { state, getters, actions, mutations } = ordersStore

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
