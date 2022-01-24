<template>
  <div id="main">
    <Diretivas />
    <Usuario />
    <Linguagens />
    <Form />
  </div>
</template>

<script>
import Diretivas from './components/Diretivas de condicional/Diretivas.vue'
import Usuario from './components/Diretivas de condicional/Usuario.vue'
import Linguagens from './components/Diretiva for/Linguagens.vue'
import Form from './components/V-model em formularios/Form.vue'

export default {
  name: 'App',
  
  components: {
    Diretivas,
    Usuario,
    Linguagens,
    Form,

  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

div#main{
  margin-bottom: 1000px;
}
</style>
