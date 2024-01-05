<script setup lang="ts">
import { ref } from "vue";
import { IUserPosts } from "../../interfaces/user";

const posts = ref<IUserPosts[]>([
  {
    src: "../../assets/capybara.jpg",
    caption: "Look to this wonderful capybara!!!",
    alt: "User post"
  }
]);
</script>
<template>
  <section>
    <img src="../../assets/capybara.jpg" :alt="posts[0].alt" />
  </section>
</template>
<style scoped>
section{
height: 100%;
overflow-y: scroll;
}

img {
  height: 400px;
  width: 400px;
  object-fit: cover;
}
</style>
