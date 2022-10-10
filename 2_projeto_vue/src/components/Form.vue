<template>
  <div>
    <Slots>
      <template v-slot:title>
        <h1>Titulo SLot!</h1>
      </template>
      <template v-slot:description>
        <small>pequena descrição.</small>
      </template>
      <template v-slot:content>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
          aliquam enim, nesciunt est iste doloribus voluptatum sequi perferendis
          ducimus assumenda aperiam totam nam rem possimus, expedita accusantium
          molestiae accusamus veniam..
        </p>
      </template>
    </Slots>
    <h2>Meu formulario</h2>
    <form action="" @submit="enviarFormulario($event)">
      <div>
        <input type="text" v-model="name" />
      </div>
      <div>
        <input type="text" v-model="email" />
      </div>
      <div>
        <Submit />
      </div>
    </form>
  </div>
</template>

<script>
import InputText from './form/InputText.vue'
import Submit from './form/Submit.vue'
import Slots from './Slots.vue'

export default {
  data() {
    return {
      name: '',
      email: ''
    }
  },
  components: {
    InputText,
    Submit,
    Slots
  },
  methods: {
    enviarFormulario(e) {
      const name = this.name
      const email = this.email

      e.preventDefault()

      console.log('O nome e: ' + name)
    }
  }
}
</script>

<style scoped>
Form {
  padding-bottom: 200px;
}
</style>
