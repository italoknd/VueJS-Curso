<template>
  <nav aria-label="Page navigation example" class="controls mt-5">
    <ul class="pagination">
      <li v-show="extremities" class="page-item" @click="controls.firstPage()">
        <a class="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" @click="controls.prevPage()">
        <a class="page-link" aria-label="Previous">
          <span aria-hidden="true">&lt;</span>
        </a>
      </li>
      <li class="page-item">
        <a class="page-link">{{ state.page }}</a>
      </li>
      <li class="page-item" @click="controls.nextPage()">
        <a class="page-link" aria-label="Next">
          <span aria-hidden="true">&gt;</span>
        </a>
      </li>
      <li v-show="extremities" class="page-item" @click="controls.lastPage()">
        <a class="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    state: Object,
    extremities: Boolean
  },
  setup(props) {
    const state = props.state

    const controls = ref({
      nextPage() {
        state.page++

        if (state.page > state.totalPages) state.page--
      },
      prevPage() {
        state.page--

        if (state.page < 1) state.page++
      },
      firstPage() {
        state.page = 1
      },
      lastPage() {
        state.page = state.totalPages
      }
    })

    return {
      controls
    }
  }
}
</script>
