import mainAxios from '@/axios-instances/mainAxios'

export default class MainApi {
  get ({ path, query = null }) {
    return mainAxios.get(path, { params: query })
  }

  post ({ path, data, options = null }) {
    return mainAxios.post(path, data, options)
  }

  put ({ path, id = '', data, options = null }) {
    return mainAxios.put(`${path}/${id}`, data, options)
  }

  delete ({ path, id = '', query = null }) {
    return mainAxios.delete(`${path}/${id}`, { params: query })
  }
}
