<template>
  <div>
    <h2>Observadores:</h2>
    <input type="text" v-model="user.first_name">
  </div>
</template>

<script>
export default {
  name: 'Watch',

  data() {
    return {
      user: {
        first_name: "",
        last_name: ""
      }
    };
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>