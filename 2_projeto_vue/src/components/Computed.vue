<template>
  <div>
    <input type="text" v-model="search" placeholder="Busque aqui..." />
    <div v-for="(pessoa, index) in nomePesquisado" :key="index">
      {{ pessoa }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Computed',

  data() {
    return {
      pessoas: [
        'Italo',
        'Daniel',
        'Daniela',
        'Olavo',
        'Hayden',
        'Stevao',
        'Fabricio',
        'Fabiola'
      ],
      search: ''
    }
  },

  computed: {
    nomePesquisado: function () {
      return this.pessoas.filter(item => {
        return item.toLocaleLowerCase().match(this.search)
      })
    }
  }
}
</script>
