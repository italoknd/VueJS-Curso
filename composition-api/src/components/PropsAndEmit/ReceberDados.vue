<script>
import BaseButton from './BaseButton.vue'
import { ref } from 'vue'

export default {
  name: 'ReceberDados',
  setup() {
    const valores = ref({})

    const receberDados = data => {
      console.log('dados >>>', data)
      valores.value = data
    }

    return { receberDados, valores }
  },
  components: { BaseButton }
}
</script>

<template>
  <div>
    <BaseButton @enviar="receberDados">
      <template v-slot:btn-title>
        <span>Salveeee!</span>
      </template>
    </BaseButton>
    {{ valores }}
  </div>
</template>
