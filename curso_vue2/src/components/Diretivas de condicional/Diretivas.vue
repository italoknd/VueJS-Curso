//mostrando e escondendo textos
<template>
  <div>
    <h1>Diretivas de condicional</h1>
    <h2 v-show="status">{{titulo}}</h2>
    <p v-if="texto">Se o texto tiver valor verdadeiro, então me exiba</p>
    <p v-else>Se o texto tiver valor falso, entao me exiba</p>

    <h3>Valor do texto: {{texto}}</h3>
    <button v-on:click="changeValue">Trocar valor</button>
  </div>
</template>










<script>
export default {
  name: 'Diretivas',
  data() {
    return {
      status: false,
      titulo: "Este é um programa Vue JS",
      texto: true,
    }
  },
  
  methods: {
    changeValue(){
      this.texto = !this.texto;
    },
  },
}
</script>








<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  background-color: #a2d1ff;
  padding: 10px;
}

p, h1, h3{
  text-align: justify;
}

button{
  display: block;
  margin: 15px 0;
  padding: 5px 10px;
  background: #2c3e50;
  color: white;
  outline: none;
  border: none;
}
</style>