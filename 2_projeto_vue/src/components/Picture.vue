<template>
  <img v-bind:src="avatar" :alt="desc">
</template>

<script>
  export default{
    name: "Picture",
    data() {
      return {
        avatar: "/imgs/avatar.png",
        desc: "profile picture"
      }
    },
  }
</script>