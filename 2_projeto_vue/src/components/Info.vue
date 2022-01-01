<template>
  <div>
    <p>{{compEmail}}</p>
    <p v-if="esta_trabalhando">Estou trabalhando no momento</p>
    <p v-else>Não estou trabalhando</p>
    <p>Utilizo as seguintes linguagens back-end</p>
    <ul>
      <li v-for="(technology, index) in backend_technologies" v-bind:key="index">{{technology}}</li>
    </ul>
    <p>Utilizo as seguintes linguagens front-end</p>
    <ul>
      <li v-for="tecnologias in frontend_technologies" v-bind:key="tecnologias.id">
        {{tecnologias.name}} 
      </li>
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
  props:{
    compEmail: String,
    email: String,
    esta_trabalhando: Boolean
  },
  data() {
    return {
      mostrar_email: false,
      meu_link: "https://google.com",
      buttonText: "Mostrar email",

      backend_technologies: ["Javascript", "Node_JS", "PHP","Java" ,"C" ],

      frontend_technologies: [
        {id: 1, name: 'HTML'},
        {id: 2, name: 'CSS'},
        {id: 3, name: 'VUE'}
      ]
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