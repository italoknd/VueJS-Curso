import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: new String(),
      last_name: new String(),
      age: new Number(),
      role: new String()
    },
    products: ['Perfume', 'Sabão', 'Pão', 'Arroz', 'Vassoura'],
    sensitive_data: {
      password: '',
      user_name: '',
      genre: ''
    }
  },
  mutations: {
    atualizarUser(state, data) {
      state.user = data
    }
  },
  getters: {},
  actions: {},
  modules: {}
})
