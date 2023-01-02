<template>
  <h1>Produtos</h1>
  <AppProducts class="flex" />
  <h1>Carrinho:</h1>
  <AppCart />
  <div style="margin-top: 250px">
    <!-- <p>Comes from the store: {{ $store.state.products }}</p> -->
    <br />
    <p>Entire object: {{ user }}</p>
    <p>First name: {{ first_name }}</p>
    <p>Last name: {{ last_name }}</p>
    <p>1 - Full name: {{ fullName }}</p>
    <button @click="updateUser()">Update data</button>
    <ShowData />
    <map-store/>
  </div>
</template>

<script>
import ShowData from "../src/components/ShowData.vue";
import AppProducts from "./components/Products/AppProducts.vue";
import AppCart from "./components/Cart/AppCart.vue";
import MapStore from './components/MapStore.vue';

export default {
  name: "App",
  components: {
    ShowData,
    AppProducts,
    AppCart,
    MapStore
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    first_name() {
      return this.$store.state.user.first_name;
    },
    last_name() {
      return this.$store.state.user.last_name;
    }
  },
  methods: {
    updateUser() {
      const newUser = {
        first_name: "Italo",
        last_name: "Pedroza",
        age: 24,
        role: "Developer"
      };
      this.$store.dispatch("storeUser", newUser);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 0 0 0;
  padding: 0;
}

.flex {
  display: flex;
  justify-content: space-between;
}
</style>
