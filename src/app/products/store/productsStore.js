import factory from '@/store/factory'

const productsStore = factory('products')
const { state, getters, actions, mutations } = productsStore

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
