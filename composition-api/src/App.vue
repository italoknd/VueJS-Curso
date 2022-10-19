<template>
  <div id="app">
    <CompAPI />
    <Computed />
    <Watch />
    <Hooks />
    <ReceberDados />
  </div>
</template>

<script>
import MixinsListarPessoas from './components/Mixins/MixinsListarPessoas.vue'
import CompAPI from './components/CompAPI.vue'
import Computed from './components/Computed.vue'
import Watch from './components/Watch.vue'
import Hooks from './components/Hooks.vue'
import ReceberDados from './components/PropsAndEmit/ReceberDados.vue'

export default {
  name: 'App',
  mixins: [MixinsListarPessoas],
  mounted() {
    this.MixinsListarPessoas()
  },
  components: { CompAPI, Computed, Watch, Hooks, ReceberDados }
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
