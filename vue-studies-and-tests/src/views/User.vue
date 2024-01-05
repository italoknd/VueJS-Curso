<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>
<template>
  <div class="main-container module-container">
    <div class="user-section">
      <h2>Welcome back, {{ route.params.username }}!</h2>
      <div class="user-options">
        <router-link :to="{ path: `/user/${route.params.username}/posts` }">
          <button class="cursor-pointer">Profile</button>
        </router-link>
        <router-link to="/posts">
          <button class="cursor-pointer">Posts</button>
        </router-link>
      </div>
    </div>

    <section>
      <router-view />
    </section>
  </div>
</template>
<style scoped>
.module-container {
  display: flex;
}

.user-section {
  background: rgb(65, 113, 217);
  color: white;
  width: 50%;
  height: 100%;
}

h2 {
  text-align: center;
  padding-top: 10px;
}

.user-options {
  display: flex;
  justify-content: center;
  padding-top: 10px;
}

button {
  width: 125px;
  margin-left: 10px;
  padding: 10px;
  color: rgb(67, 67, 67);
  font-weight: 600;
  background: white;
  border: 1px solid rgb(67, 67, 67);
  border-radius: 4px;
  transition: 0.5s;
}

button:hover {
  background: rgb(67, 67, 67);
  border: 1px solid white;
  color: white;
}
</style>
