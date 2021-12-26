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
    <div>
      <button @click="showEmail">{{ buttonText }}</button>
    </div>
    <p v-show="mostrar_email">Mande um email para: {{email}}</p>
    <p>Para acessar meu portfólio, basta <a v-bind:href="meu_link" target="_blank">clicar aqui</a></p>
    <Picture/>
  </div>
</template>

<script>
import Picture from "./Picture.vue"

export default {
  name: 'info',
  data() {
    return {
      esta_trabalhando: true,
      mostrar_email: false,
      email: "italopedroza21@gmail.com",
      meu_link: "https://google.com",
      buttonText: "Mostrar email"
    }
  },
  components:{
    Picture
  },
  methods: {
    showEmail(){
      this.mostrar_email = !this.mostrar_email

      if(!this.mostrar_email){
        this.buttonText = 'Mostrar email'
      }else{
        this.buttonText = 'Esconder email'
      }
    }
  },
}
</script>
