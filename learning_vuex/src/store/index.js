import { createStore } from 'vuex'
import bola from '../assets/bola.png'
import chuteira from '../assets/chuteira.png'
import meiao from '../assets/meiao.png'

export default createStore({
  state: {
    user: {
      first_name: new String(),
      last_name: new String(),
      age: new Number(),
      role: new String()
    },
    products: [
      {
        id: 1,
        name: 'Bola',
        price: 100,
        img: bola,
        img_alt: 'Bola de Futebol'
      },
      {
        id: 2,
        name: 'Chuteira',
        price: 200,
        img: chuteira,
        img_alt: 'Chuteira de Futebol'
      },
      {
        id: 3,
        name: 'Meião',
        price: 50,
        img: meiao,
        img_alt: 'Meião de Futebol'
      }
    ],
    cart: [],
    total_value: 0,
    sensitive_data: {
      password: '',
      user_name: '',
      genre: ''
    }
  },
  mutations: {
    atualizarUser(state, data) {
      state.user = data
    },
    addProduct(state, data) {
      state.cart.push(data)

      let total = []
      total.push(data.price)

      state.total_value = total
    }
  },
  getters: {},
  actions: {},
  modules: {}
})
