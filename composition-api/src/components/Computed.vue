<script>
import { computed, ref } from 'vue'

export default {
  name: 'ComputedComponent',
  setup() {
    const user = ref({
      first_name: 'Italo',
      last_name: 'Pedroza'
    })

    const fullName = computed(() => {
      return `${user.value.first_name} ${user.value.last_name}`
    })

    const alterarNomes = () => {
      return (user.value = {
        first_name: 'Italooooo',
        last_name: 'Pedrozaaa'
      })
    }

    return {
      fullName,
      alterarNomes,
      user
    }
  }
}
</script>

<template>
  <div class="bg">
    {{ fullName }}
    <button @click="alterarNomes()">Alterar nome</button>
  </div>
</template>

<style scoped>
.bg{
  background: aqua;
  padding: 20px;
}
</style>
