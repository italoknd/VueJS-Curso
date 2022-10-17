<script>
import { ref } from 'vue'
export default {
  setup() {
    //vars
    const num = ref(0)
    const user = ref({
      name: 'Italo',
      age: 22
    })

    //functions
    const inc = () => {
      return num.value++
    }

    const changeUser = () => {
      return (user.value.name = 'Italo 2'), (user.value.age = 34)
    }
    return {
      num,
      inc,
      user,
      changeUser
    }
  }
}
</script>

<template>
  <div class="bg">
    <div>
      {{ num }}
      <button @click="inc()">Increase</button>
    </div>
    <div>
      {{ user }}
      <button @click="changeUser()">Change user</button>
    </div>
  </div>
</template>
<style scoped>
.bg{
  background: rgb(247, 128, 30);
  padding: 20px;
  color: white;
}
</style>