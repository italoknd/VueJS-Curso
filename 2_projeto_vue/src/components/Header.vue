<template>
  <div>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">About us</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style scoped>
  ul{
    list-style: none;
    display: flex;
    justify-content: flex-end;
    background-color: rgb(26, 26, 26);
    margin: -8px;
    padding: 10px;
  }

  li{
    margin-left: 15px;
  }

  a{
    text-decoration: underline;
    transition: .3s;
    color: white;
  }

  a:hover{
    color: turquoise;
  }
</style>