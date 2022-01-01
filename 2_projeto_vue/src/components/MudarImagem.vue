<template>
  <div>
    <button @click="$emit('MudarImagem')">Switch Imagem</button>
  </div>
</template>

<script>
  export default {
    name: "MudarImagem",
    emit: ['MudarImagem']
  }
</script>