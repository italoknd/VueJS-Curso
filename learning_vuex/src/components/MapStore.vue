<template>
  <div class="bg">
    <h1>Mapping State</h1>
    <p>Entire object: {{ user }}</p>
    <p>First name: {{ first_name }}</p>
    <p>Last name: {{ last_name }}</p>
    <p>Full name: {{ fullName }}</p>
    <p>Age: {{age}}</p>
    <button @click="age === 7 ? atualizarUser(newUser) : anotherUpdate(anotherUser)">
      Update data
    </button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "ShowData",
  data() {
    return {
      newUser: {
        first_name: "Bruce",
        last_name: "Wayne",
        age: 33,
        role: "Superhero"
      },

      anotherUser: {
        first_name: "Scooby",
        last_name: "Doo",
        age: 7,
        role: "Dog"
      }
    };
  },
  computed: {
    // map getters
    ...mapGetters(["fullName"]),

    //map state
    ...mapState({
      user: state => state.user,
      first_name: state => state.user.first_name,
      last_name: state => state.user.last_name,
      age: state => state.user.age
    })
  },
  methods: {
    //map mutations
    ...mapMutations(["atualizarUser"]),
    updateUser() {
      this.atualizarUser(this.newUser);
    },
    anotherUpdate() {
      this.atualizarUser(this.anotherUser);
    }
  }
};
</script>

<style scoped>
.bg {
  background: dodgerblue;
  width: 98vw;
  height: 50vh;
  color: white;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  padding-top: 20px;
}
</style>
