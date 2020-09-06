import Vue from 'vue'
import MainApi from '@/apis/MainApiClass'

const api = new MainApi()

export default routeName => ({
  /************
  *   STATE   *
  ************/
  state: {
    [routeName]: null
  },

  /**************
  *   GETTERS   *
  **************/
  getters: {},

  /**************
  *   ACTIONS   *
  **************/
  actions: {
    load: async (ctx) => {
      const { data } = await api.get({ path: routeName })
      ctx.commit('setAll', data)
    },
  
    create: async (ctx, { payload }) => {
      const { data } = await api.post({ path: routeName, data: payload })
      ctx.commit('add', data)
    },
  
    update: async (ctx, { id, payload }) => {
      const { data } = await api.put({ path: routeName, id, data: payload })
      ctx.commit('edit', data)
    },
  
    delete: async (ctx, { id }) => {
      await api.delete({ path: routeName, id })
      ctx.commit('remove', id)
    }
  },

  /****************
  *   MUTATIONS   *
  ****************/
  mutations: {
    setAll: (state, data) => {
      Vue.set(state, routeName, data)
    },
  
    add: (state, item) => {
      const data = state[routeName].slice()
      data.push(item)
      Vue.set(state, routeName, data)
    },
  
    edit: (state, item) => {
      const data = state[routeName].slice()
      const index = data.findIndex(i => i.id === item.id)
      data[index] = item
      Vue.set(state, routeName, data)
    },
  
    remove: (state, item) => {
      const data = state[routeName].slice()
      const index = data.findIndex(i => i.id === item.id)
      data.splice(index, 1)
      Vue.set(state, routeName, data)
    }
  }
})
