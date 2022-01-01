<template>
  <div>
    <h2>Esta é a descrição da pessoa: {{name}}</h2>
     <Info :email="email" :esta_trabalhando=false compEmail="avadakedrava@email" />
  </div>
</template>

<script>
import Info from './Info.vue'

  export default{
    name: 'Pessoa',
    components:{
      Info
    },
    data(){
      return{
        name: "Italo",
        email: "italo@kakak.com"
      }
    }
  }
</script>