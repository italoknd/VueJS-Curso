<template>
  <div>
    <Header :esta_logado="true" />
    <BaseAlert :baseStyle="bg" :text_message="text_message" />
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
    <Computed />
    <RenderingCleanerLists />
    <VOnce />
    <VMemo />
  </div>
</template>

<script>
import PrimeiroComponente from "./components/PrimeiroComponente.vue";
import LifeCycle from "./components/LifeCycle.vue";
import Pessoa from "./components/Pessoa.vue";
import Info from "./components/Info.vue";
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
import Computed from "./components/Computed.vue";
import BaseAlert from "./components/BaseAlert.vue";
import RenderingCleanerLists from "./components/cleaner-components/RenderingCleanerLists.vue";

import VOnce from "./components/v-once/VOnce.vue";
import VMemo from "./components/v-memo/VMemo.vue";

export default {
  name: "App",
  components: {
    PrimeiroComponente,
    LifeCycle,
    Pessoa,
    Info,
    Header,
    Form,
    Computed,
    BaseAlert,
    RenderingCleanerLists,
    VOnce,
    VMemo
  },
  data() {
    return {
      locations: [
        { country: "Brazil", id: 1 },
        { country: "Germany", id: 2 },
        { country: "EUA", id: 3 },
        { country: "Spain", id: 4 },
        { country: "Netherlands", id: 5 },
        { country: "Switzerland", id: 6 }
      ],
      selected: "",
      bg: "danger",
      text_message: "Falha ao enviar dados."
    };
  },
  created() {
    this.selected = this.locations[3].country;
  }
};
</script>

<style>
* {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  overflow-x: hidden;
}

body {
  background-color: rgb(151, 151, 151);
  color: white;
}

button {
  background: lightgray;
  padding: 10px;
}
</style>
