<template>
  <div>
    <div v-if="cart_products.length === 0">
      <img class="img" :src="empty_cart" alt="Imagem de carrinho vazio." />
      <h1>Seu carrinho está vazio.</h1>
    </div>
    <div v-else class="display-cards">
      <div class="card" v-for="product in cart_products" :key="product.id">
        <img class="img" :src="product.img" :alt="product.img_alt" /><br />
        {{ product.name }}:
        {{
          product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })
        }}
        <br />
        Quantidade:
        <br />
        <button class="btn-card" @click="removeProduct(product)">
          <strong> Remover do carrinho </strong>
        </button>
      </div>
    </div>
    <div>
      <h2>
        Valor total:
        {{
          $store.getters.total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })
        }}
      </h2>
    </div>
  </div>
</template>

<script>
import cart_img from '../../assets/cart.png'

export default {
  name: 'AppCart',
  data() {
    return {
      empty_cart: cart_img,
      cart_products: this.$store.state.cart,
      amount: []
    }
  },
  methods: {
    removeProduct(product) {
      this.$store.commit('removeProduct', product.id)
    }
  }
}
</script>

<style scoped>
.img {
  height: 20vh;
  width: auto;
}

.card {
  background-color: #464de0;
  padding: 15px;
  color: white;
  width: 25vw;
  margin-bottom: 5vh;
  border-radius: 8px;
  max-height: 50vh;
}

.display-cards {
  display: grid;
  grid-template-columns: 27vw 27vw 27vw;
  justify-content: space-between;
}

.btn-card {
  margin-top: 10px;
  border: none;
  padding: 10px;
  border-radius: 4px;
  background: #f51c1c;
  color: white;
  font-size: 15px;
  cursor: pointer;
  transition: 0.3s;
  width: 25vw;
}

.btn-card:hover {
  background: #b91a1a;
}
</style>
