<template>
  <div>
    <Header :esta_logado="true" />
    <PrimeiroComponente />
    <LifeCycle />
    <Pessoa />
    <Form />

    <h2>Deixar item selecionado por padrão:</h2>
    <select v-model="selected">
      <option
        v-for="location in locations"
        :key="location"
        :value="location.country"
      >
        {{ location.country }}
      </option>
    </select>
    <p>Local selecionado: {{ selected }}</p>
  </div>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue'
import LifeCycle from './components/LifeCycle.vue'
import Pessoa from './components/Pessoa.vue'
import Info from './components/Info.vue'
import Header from './components/Header.vue'
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCycle,
    Pessoa,
    Info,
    Header,
    Form
  },
  data() {
    return {
      locations: [
        { country: 'Brazil', id: 1 },
        { country: 'Germany', id: 2 },
        { country: 'EUA', id: 3 },
        { country: 'Spain', id: 4 },
        { country: 'Netherlands', id: 5 },
        { country: 'Switzerland', id: 6 }
      ],
      selected: ''
    }
  },
  created() {
    this.selected = this.locations[3].country
  }
}
</script>

<style>
body {
  background-color: rgb(151, 151, 151);
  color: white;
}
</style>
