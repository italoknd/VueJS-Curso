<template>
  <div>
    <h2>Meu formulario</h2>
    <form action="" @submit="enviarFormulario($event)">
      <div>
        <input type="text" v-model="name">
      </div>
      <div>
        <input type="text" v-model="email">
      </div>
      <div>
        <Submit/>
      </div>
    </form>
  </div>
</template>

<script>
import InputText from './form/InputText.vue'
import Submit from './form/Submit.vue'

export default {
  data() {
    return {
      name: '',
      email:''
    }
  },
  components:{
    InputText,
    Submit
  },
  methods: {
    enviarFormulario(e){
      const name = this.name
      const email = this.email

      e.preventDefault();
      
      console.log("O nome e: "+name);
    }
  },
}
</script>

<style scoped>
  Form{
    padding-bottom: 200px;
  }
</style>