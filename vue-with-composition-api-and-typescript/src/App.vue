<script setup lang="ts">
import { reactive } from '@vue/reactivity'

const state = reactive({
  name: 'Link' as string,
  age: 25 as number | number
})
</script>

<template>
  <div>{{ state }}</div>
</template>

<style scoped></style>
