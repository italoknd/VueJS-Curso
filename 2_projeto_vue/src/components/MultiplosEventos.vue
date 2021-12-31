<template>
  <div>
    <button @click="primeiro(txt1, $event), segundo(txt2, $event), terceiro($event)">Ativar multiplos eventos</button>
    <p>{{ multiplos_eventos }}</p>
  </div>
</template>

<script>
export default {
  name: 'MultiplosEventos',
  data() {
    return {
      multiplos_eventos: '',
      txt1: "Primeiro evento ativado!",
      txt2: "Segundo Evento Ativado!"
    }
  },
  methods: {
    primeiro(txt, e){
      e.preventDefault();
      this.multiplos_eventos = txt
    },
    segundo(txt, e){
      setTimeout(() => {
        this.multiplos_eventos = txt
      }, 2000);
    },
    terceiro(txt, e){
      setTimeout(() => {
        this.multiplos_eventos = ""
      }, 1000);
    }
  }
}
</script>

<style scoped>
  div{
    margin: 100px;
  }
</style>