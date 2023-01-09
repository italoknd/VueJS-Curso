<template>
  <nav aria-label="Page navigation example" class="controls mt-5" @click="getPaginatedItems()">
    <ul class="pagination">
      <li v-if="extremities" class="page-item" @click="controls.firstPage()">
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
        <a class="page-link">{{ state }}</a>
      </li>
      <li class="page-item" @click="controls.nextPage()">
        <a class="page-link" aria-label="Next">
          <span aria-hidden="true">&gt;</span>
        </a>
      </li>
      <li v-if="extremities" class="page-item" @click="controls.lastPage()">
        <a class="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref, watch, onMounted } from 'vue'

export default {
  props: {
    itemsPerPage: Number,
    yourArray: Array,
    extremities: Boolean
  },

  setup({ itemsPerPage, yourArray, extremities }, ctx) {
    onMounted(() => {
      update()
    })
    //initial state of pagination
    const state = ref({
      page: 1,
      itemsPerPage: itemsPerPage,
      totalPages: Math.ceil(yourArray.length / itemsPerPage) //rounding to a higher number to avoid lost of items when the division results in broken numbers
    })

    const controls = ref({
      nextPage() {
        state.value.page++

        if (state.value.page > state.value.totalPages) state.value.page--
      },
      prevPage() {
        state.value.page--

        if (state.value.page < 1) state.value.page++
      },
      firstPage() {
        state.value.page = 1
      },
      lastPage() {
        state.value.page = state.value.totalPages
      }
    })

    const paginatedItems = ref([])

    const update = () => {
      let page = state.value.page - 1
      let start = page * state.value.itemsPerPage
      let end = start + state.value.itemsPerPage

      paginatedItems.value = yourArray.slice(start, end)
    }

    const getPaginatedItems = () => {
      ctx.emit('paginatedItems', paginatedItems.value)
    }

    watch(
      state,
      () => {
        update()
      },
      { deep: true }
    )

    return {
      controls,
      getPaginatedItems,
      extremities
    }
  }
}
</script>
