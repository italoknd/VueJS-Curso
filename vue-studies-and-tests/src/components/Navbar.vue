<script setup lang="ts"></script>

<template>
  <nav class="navbar">
    <div class="controls">
      <button>
        <router-link to="/">Home</router-link>
      </button>
      <button>
        <router-link to="/about">About Us</router-link>
      </button>
      <button>
        <router-link to="/contact">Contact</router-link>
      </button>
    </div>
  </nav>
</template>
<style scoped>
.controls {
  padding: 20px;
  display: flex;
  justify-content: end;
}

.controls > button {
  margin-left: 10px;
  padding: 10px;
  color: white;
  background: rgb(67, 67, 67);
  border: none;
  border-radius: 4px;
}
</style>
