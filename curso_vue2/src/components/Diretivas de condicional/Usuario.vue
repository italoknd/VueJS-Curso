<template>
  <div >
    <div v-if="id == 1">
      ID: {{ Number(id) }} <br>
      Nome: {{ nome }} <br>
      Profissao: {{ profissao }}
    </div>
    <div v-else>
      Nenhum usuário foi encontrado!
    </div>
    <div>
      <button v-on:click="trocarID">Trocar ID</button>
    </div>
  </div>
</template>






<script>

export default {
  name: "Usuario",
  data() {
    return {
      id: 1,
      nome: "Jon Snow",
      profissao: "Ator",
      button: true,
    }
  },
  methods: {
    trocarID(){
      this.id = !this.id
    }
  },
}
</script>





<style scoped>
div{
  background-color: #a2d1ff;
  padding: 10px;
  text-align: left;
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