import factory from '@/store/factory'

const customersStore = factory('customers')
const { state, getters, actions, mutations } = customersStore

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
