<script setup lang="ts">
import { reactive, ref } from "@vue/reactivity";

const state = reactive({
  name: "Link" as string,
  age: 25 as number | number
});

const end = ref<object>({
  bairro: "Monte das Oliveiras" as string,
  numero: 122 as number | string
});
</script>

<template>
  <div>
    <p>{{ state.name }}</p>
    <p>{{ end.bairro }}</p>
  </div>
</template>

<style scoped></style>
