<template>
  <div id="main">
    <h1 class="text-center">Invite List</h1>
    <div class="w-100">
      <div class="d-flex justify-content-center mb-4">
        <input
          class="form-control w-25"
          type="text"
          placeholder="Name"
          v-model="nameInput"
          @keyup.enter="invite()"
        />
        <button
          data-bs-toggle="toast"
          class="btn btn-success ms-2"
          @click="invite()"
          :disabled="blockNewInvites"
        >
          Invite!
        </button>
      </div>
      <div class="d-flex justify-content-center">
        <transition-group name="list" tag="ul" class="invite-list">
          <li v-for="(name, index) in inviteList" :key="index">
            <button
              type="button"
              class="btn btn-danger btn-sm mb-1"
              @click="uninvite(index)"
            >
              X
            </button>
            <span>{{ name }}</span>
          </li>
        </transition-group>
      </div>
    </div>
    <!--frufruzada-->
    <div
      class="toast align-items-center text-bg-primary border-0"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      v-if="true"
    >
      <div class="d-flex">
        <div class="toast-body">Hello, world! This is a toast message.</div>
        <button
          type="button"
          class="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const blockNewInvites = ref<Boolean>(false);
const invitationSent = ref<Boolean>(false);
const inviteList = ref<Array<string>>([
  "Mathew",
  "George",
  "Alex",
  "John",
  "Craig",
  "Luiza",
  "Olsen",
  "Marcos",
  "Marcela",
]);
let nameInput = ref<string>("");

const invite = (): void => {
  inviteList.value.push(nameInput.value);
  nameInput.value = "";
  invitationSent.value = true;
  blockNewInvites.value = true;

  setTimeout(() => {
    invitationSent.value = false;
    blockNewInvites.value = false;
  }, 1000);
};

const uninvite = (index: number): void => {
  inviteList.value.splice(index, 1);
};
</script>

<style scoped>
#main {
  min-height: 55vh;
  background: #994488;
  color: white;
}

.invite-list {
  min-width: 29%;
  max-height: 350px;
  overflow-y: scroll;
  background: white;
  border-radius: 8px;
}

.invite-list li {
  margin: 10px 0;
}

.invite-list span {
  color: black;
  margin-left: 10px;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

.list-leave-active {
  position: absolute;
}
</style>
