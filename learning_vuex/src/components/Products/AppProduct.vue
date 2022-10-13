<template>
  <div class="card">
    <div class="product-n-name">
      <img class="img" :src="product.img" :alt="product.img_alt" /><br />
      {{ product.name }} por apenas:
      {{
        product.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })
      }}
      <button class="btn-card" @click="addProduct(product)">
        <strong>Adicionar ao carrinho</strong>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppProduct',
  props: ['product'],
  methods: {
    addProduct(param) {
      this.$store.commit('addProduct', param)
    }
  }
}
</script>

<style scoped>
.card {
  background-color: #464de0;
  padding: 15px;
  color: white;
  width: 25vw;
  margin-top: 10px;
  border-radius: 8px;
  max-width: 30vw;
  max-height: 50vh;
}

.btn-card {
  margin-top: 10px;
  border: none;
  padding: 10px;
  border-radius: 4px;
  background: #f3b90c;
  color: white;
  font-size: 15px;
  cursor: pointer;
  transition: 0.3s;
  width: 25vw;
}

.btn-card:hover {
  background: #a18513;
}

.img {
  height: 10vh;
  width: auto;
}
</style>
