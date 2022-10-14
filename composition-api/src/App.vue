<template>
  <div id="app">
    <CompAPI />
  </div>
</template>

<script>
import MixinsListarPessoas from './components/Mixins/MixinsListarPessoas.vue'
import CompAPI from './components/CompAPI.vue'

export default {
  name: 'App',
  mixins: [MixinsListarPessoas],
  mounted() {
    this.MixinsListarPessoas()
  },
  components: { CompAPI }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
