<template>
  <div>
    <button @click="ativar($event)">Clique aqui</button>
    <span v-show="ativou">Ativado!</span>
  </div>
</template>

<script>
export default {
  name: "Reutilizacao",
  data() {
    return {
      ativou: false
    }
  },
  methods: {
    ativar(e){
      this.ativou = !this.ativou
    }
  },
}
</script>