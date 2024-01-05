<template>
  <footer class="footer">
    <ul>
      <li>Github</li>
      <li>LinkedIn</li>
    </ul>
  </footer>
</template>
<script setup lang="ts"></script>
<style scoped>
ul {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

ul > li {
  margin: 0 10px;
  transition: 0.3s;
}

ul > li:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
