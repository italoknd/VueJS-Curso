<script>
import { watch, ref } from 'vue'

export default {
  name: 'ComputedComponent',
  setup() {
    const user = ref({
      first_name: 'Italo',
      last_name: 'Pedroza'
    })

    const profissao = ref('Engenheiro')

    const mudarNome = () => {
      let obj = {
        first_name: 'Italo',
        last_name: 'Pedroza 2222'
      }

      user.value = obj
    }

    const mudarProfissao = () => {
      let role = 'Desenvolvedor'
      profissao.value = role
    }

    //observando o objeto todo
    // watch(
    //   user,
    //   () => {
    //     console.log('Mudou!')
    //   },
    //   { deep: true }
    // )

    //observando uma chave do objeto
    // watch(
    //   () => user.value.first_name,
    //   () => {
    //     console.log('Mudou o primeiro nome!')
    //   }
    // )

    //observando uma variável única
    watch(profissao, ()=>{
      console.log("Mudou de profissão!");
    })

    return { user, mudarNome, profissao, mudarProfissao }
  }
}
</script>

<template>
  <div class="bg">
    <p>Nome: {{ user.first_name }} {{ user.last_name }}</p>
    <button @click="mudarNome">Trocar nome</button>
    <br>
    <p>Profissão: {{profissao}}</p>
    <button @click="mudarProfissao">Mudar de profissão</button>
  </div>
</template>

<style scoped>
.bg {
  background: rgb(0, 81, 255);
  padding: 20px;
}
</style>
