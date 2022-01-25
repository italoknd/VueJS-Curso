<template>
  <div>

  </div>
</template>

<script>
export default {
  name: "Hooks",
  data() {
    return {
      name: "Life Cycle Hooks"
    }
  },

  beforeCreate() {
    console.log('beforeCreate');
    console.log('Name: ', this.name);
  },
  created() {
    console.log('created');
    console.log('Name: ', this.name);
  },

  beforeMount() {
    console.log('beforeMount');
    console.log('Name: ', this.name);
  },
  mounted() {
    console.log('mounted');
    console.log('Name: ', this.name);
  },
  
  beforeUpdate() {
    
  },
  updated() {
    
  },

  beforeUnmount() {
    console.log('jdscahhbfv');
  },
  unmounted() {
    console.log('Unmounted')
  },
}
</script>