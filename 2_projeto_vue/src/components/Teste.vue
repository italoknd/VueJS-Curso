<template>
  <div>
    TESTE 1
    <button @click="mandaPraLa()">Vai pra lá</button>
    <Teste2 v-if="condition"/>
  </div>
</template>

<script>
import Teste2 from './Teste2.vue'
export default {
  name: 'VueJSCursoTeste',

  data() {
    return {
      foiPraLa: false
    }
  },

  components: {
    Teste2
  },

  methods: {
    mandaPraLa() {
      this.foiPraLa = true
    }
  }
}
</script>

<style lang="scss" scoped></style>
