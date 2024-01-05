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
  <div>
    <img src="../../assets/capybara.jpg" :alt="posts[0].alt" />
    <img src="../../assets/capybara.jpg" :alt="posts[0].alt" />
    <img src="../../assets/capybara.jpg" :alt="posts[0].alt" />
  </div>
</template>
<style scoped>
div {
  height: 100%;
  overflow-y: scroll;
}

img {
  height: 600px;
  width: 600px;
  object-fit: contain;
  margin: auto;
}
</style>
