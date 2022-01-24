<template>
  <div>
    <h1>Atribuindo imagem utilizando o v-bind</h1>
    <img v-bind:src="photo" v-bind:alt="alt">
  </div>
</template>

<script>
export default {
  name: "Imagem",
  photo: "https://aws-us-west-2-443954526038-strapicms-carierwave.s3.us-west-2.amazonaws.com/Single_file_component_Vue_js_af9eb8c0a0.png",
  alt: "xxxxxxxxxxxxx",
}
</script>

<style scoped>

</style>