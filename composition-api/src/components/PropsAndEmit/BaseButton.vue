<script>
import { ref } from 'vue'

export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const dados = ref({
      nome: 'Italo',
      sobrenome: 'Pedroza',
      idade: 22
    })

    const enviarDados = () => {
      emit('enviar', dados)
    }

    return { enviarDados }
  }
}
</script>

<template>
  <div>
    <button @click="enviarDados">
      <slot name="btn-title"></slot>
    </button>
  </div>
</template>
