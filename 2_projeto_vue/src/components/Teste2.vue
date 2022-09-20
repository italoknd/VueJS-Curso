<template>
  <div>
    TESTE 2222222222222222222222
    <button @click="voltaPraLa()">Voltou pra lá</button>
    <Teste />
  </div>
</template>

<script>
import Teste from './Teste.vue'
export default {
  name: 'VueJSCursoTeste2',

  data() {
    return {
      mandaDeVolta: false
    }
  },

  components: {
    Teste
  },

  methods: {
    voltaPraLa() {
      this.mandaDeVolta = true
    }
  }
}
</script>

<style lang="scss" scoped></style>
