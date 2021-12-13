const MyNameApp = {
  data(){
    return{
      name: "Italo",
      age: 21
    }
  }
}

Vue.createApp(MyNameApp).mount("#app");