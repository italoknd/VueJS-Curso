<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const gotoProducts = () => {
  router.push("/products");
};

const username = ref("Eduardo");
const gotoUser = () => {
  router.push(`/user/${username.value}/posts`);
};
</script>

<template>
  <nav class="navbar">
    <div class="controls">
      <router-link to="/">
        <button class="cursor-pointer">Home</button>
      </router-link>
      <router-link to="/about">
        <button class="cursor-pointer">About Us</button>
      </router-link>

      <router-link to="/contact">
        <button class="cursor-pointer">Contact</button>
      </router-link>

      <button class="cursor-pointer" @click="gotoProducts()">Products</button>

      <!--primeira forma de usar parametro de url-->
      <router-link :to="{ name: 'user', params: { username: 'Italo' } }">
        <button class="cursor-pointer">User</button>
      </router-link>

      <!--segunda forma de usar parametro de url-->
      <router-link to="/user/Daniel">
        <button class="cursor-pointer">User 2</button>
      </router-link>

      <!--terceira forma de usar parametro de url-->
      <button class="cursor-pointer" @click="gotoUser()">User 3</button>
    </div>
  </nav>
</template>
<style scoped>
nav {
  height: 10vh;
}
.controls {
  padding: 20px;
  display: flex;
  justify-content: end;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  margin-left: 10px;
  padding: 10px;
  color: white;
  background: rgb(67, 67, 67);
  border: 1px solid white;
  border-radius: 4px;
  transition: 0.5s;
}

button:hover {
  background: white;
  border: 1px solid rgb(67, 67, 67);
  color: rgb(67, 67, 67);
}
</style>
