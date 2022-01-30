<template>
  <div>
    <img v-bind:src="avatar" :alt="desc">
    <MudarImagem @mudar-imagem="TrocarImagem"/>
  </div>
</template>

<script>
import MudarImagem from './MudarImagem.vue'

  export default{
    name: "Picture",
    data() {
      return {
        avatar: "/imgs/avatar.png",
        desc: "profile picture"
      }
    },
    components:{
      MudarImagem
    },
    methods: {
      TrocarImagem(){
        this.avatar = "/"

      
      }
    },
  }
</script>