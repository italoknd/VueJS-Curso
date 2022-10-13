<template>
  <div>
    <AppProduct
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import AppProduct from './AppProduct.vue'
export default {
  components: { AppProduct },
  data() {
    return {
      products: this.$store.state.products
    }
  }
}
</script>