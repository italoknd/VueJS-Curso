<template>
  <div>
    <h1>Linguagens de Programação</h1>
    <ul>
      <li v-for="(tecs, index) in linguagens" :key="index">{{ index }} - {{tecs.nome}}</li>
      <br>
      <li v-for="itens in linguagens" :key="itens"> {{itens.nome}} </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Linguagens",
  data() {
    return {
      linguagens: [
        {nome: "JavaScript"},
        {nome: "PHP"},
        {nome: "C#"},
        {nome: "Java"},
        {nome: "Python"},
      ]
    }
  },
}
</script>

<style scoped>
  
</style>