<template>
  <div>
    <p v-if="esta_trabalhando">Estou trabalhando no momento</p>
    <p v-else>Não estou trabalhando</p>
    <p>Utilizo as seguintes tecnologias</p>
    <ul>
      <li>Javascript</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Vue JS</li>
    </ul>
    <p v-show="mostrar_email">Mande um email para: {{email}}</p>
  </div>
</template>

<script>
export default {
  name: 'info',
  data() {
    return {
      esta_trabalhando: true,
      mostrar_email: false,
      email: "italopedroza21@gmail.com"
    }
  },
}
</script>
