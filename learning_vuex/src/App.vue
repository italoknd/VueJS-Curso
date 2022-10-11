<template>
  <div>
    <p>Variável do data: {{ user }}</p>
    <p>Direto da store: {{$store.state.user.first_name}}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: this.$store.state.user
    }
  },
  mounted() {
    console.log(this.$store.state.user.first_name)
  }
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
