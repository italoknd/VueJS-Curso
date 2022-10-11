<template>
  <div class="bg">
    <h1>Show Data Component</h1>
    <p>Comes from the store: {{ $store.state.products }}</p>
    <br />
    <p>Entire object: {{ user }}</p>
    <p>First name: {{ first_name }}</p>
    <p>Last name: {{ last_name }}</p>
    <p>Full name: {{ first_name }} {{ last_name }}</p>
    <button @click="updateUser()">Update data</button>
  </div>
</template>

<script>
export default {
  name: 'ShowData',
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
  methods: {
    updateUser() {
      const newUser = {
        first_name: 'Olaf',
        last_name: 'Frozen',
        age: 2,
        role: 'Toy'
      }
      this.$store.commit('atualizarUser', newUser)
    }
  }
}
</script>

<style scoped>
.bg {
  background: #2f2f2f;
  width: 100vw;
  height: 100vh;
  color: white;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
