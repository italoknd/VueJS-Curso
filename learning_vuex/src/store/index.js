import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
      first_name: "Italo",
      last_name: "Pedroza",
      age: 22,
      role: "Dev"
    },
    products: ['Perfume', 'Sabão', 'Pão', 'Arroz', 'Vassoura']
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})