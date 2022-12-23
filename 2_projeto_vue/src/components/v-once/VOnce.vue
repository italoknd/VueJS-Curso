<template>
  <div class="v-once">
    <div>
      <p><strong>V-once</strong></p>
      <p v-once>{{ msg }}</p>
      <p>Current msg: {{ msg }}</p>
      <button class="button" @click="msg = 'Changed message'">Change</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "the very first message"
    };
  }
};
</script>

<style scoped>
.v-once {
  background: dodgerblue;
}


.v-once > div {
  margin: 15px;
}
</style>
