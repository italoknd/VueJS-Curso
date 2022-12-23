<template>
  <div class="v-memo">
    <div v-memo="[subs]">
      <p><strong>V-memo</strong></p>
      <p>Subscribers: {{ subs }}</p>
      <p>Views: {{ views }}</p>
      <p>Likes: {{ likes }}</p>
    </div>

    <div>
      <button class="btn" @click="subs++">Subs++</button>
      <button class="btn" @click="views++">Views++</button>
      <button class="btn" @click="likes++">Likes++</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subs: 4000,
      views: 100,
      likes: 20
    };
  }
};
</script>

<style scoped>
.v-memo {
  background: lightseagreen;
}

.v-memo > div {
  margin: 15px;
}

.btn {
  margin-right: 10px;
}
</style>
