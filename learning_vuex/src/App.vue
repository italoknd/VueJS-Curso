<template>
  <div>
    <p>Comes from the store: {{ $store.state.products }}</p>
    <br>
    <p>Entire object: {{ user }}</p>
    <p>First name: {{first_name}}</p>
    <p>Last name: {{last_name}}</p>
    <p>Full name: {{first_name}} {{last_name}}</p>
    <button @click="updateUser()">Update data</button>
  </div>
  <ShowData />
</template>

<script>
import ShowData from '../src/components/ShowData.vue'

export default {
  name: 'App',
  components:{
    ShowData,
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    first_name() {
      return this.$store.state.user.first_name
    },
    last_name() {
      return this.$store.state.user.last_name
    }
  },
  mounted() {
    console.log(this.$store.state.user.first_name)
  },
  methods: {
    updateUser() {
      const newUser = {
        first_name: 'Italo',
        last_name: 'Pedroza',
        age: 24,
        role: 'Developer'
      }
      this.$store.commit('atualizarUser', newUser)
    }
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
