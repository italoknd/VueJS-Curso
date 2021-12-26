<template>
  <h1>O meu nome é: {{nome}}</h1>  
</template>

<script>
  export default{
    name: 'LifeCycle',
    data(){
      return{
        nome: 'Ainda não sei'
      }
    },
    created() {
      setTimeout(() => {
        this.nome = "Italo"
      }, 1000);
      this.lifecycle()
    },
    mounted() { //esta hook tem hierarquia maior que o created
      setTimeout(() => {
        this.nome = "Unknown"
      }, 2000);
      this.lifecycle()
    },
    methods: {
      lifecycle(){
        console.log("Olá Mundo!");
      }
    },
  }
</script>