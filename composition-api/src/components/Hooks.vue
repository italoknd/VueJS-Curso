<script>
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue'
export default {
  name: 'HookS',
  setup() {
    onBeforeMount(() => {
      console.log('Before mount')
    })

    onMounted(() => {
      console.log('Mounted')
    })

    onBeforeUnmount(() => {
      console.log('Before unmount')
    })

    onUnmounted(() => {
      console.log('Unmount')
    })
  }
}
</script>

<template>
  <div></div>
</template>
