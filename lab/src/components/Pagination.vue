<template>
  <div>
    <div id="paginate">
      <div class="list w-50 m-auto">
        <div v-for="{ item, id } in paginatedItems" :key="id" class="item">
          <p class="text-center">{{ item }}</p>
        </div>
      </div>
      <nav aria-label="Page navigation example" class="controls mt-5">
        <ul class="pagination">
          <li class="page-item" @click="controls.firstPage()">
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
          <li class="page-item" @click="controls.lastPage()">
            <a class="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

onMounted(() => {
  update()
})

//data
const items = Array.from({ length: 100 }).map((_, index) => {
  return { item: `Item ${index + 1}`, id: index + 1 }
})

//initial state of pagination
const itemsPerPage = 5
const state = ref({
  page: 1,
  itemsPerPage,
  totalPages: Math.ceil(items.length / itemsPerPage) //rounding to a higher number to avoid lost of items when the division results in broken numbers
})

const paginatedItems = ref([])

const update = () => {
  let page = state.value.page - 1
  let start = page * state.value.itemsPerPage
  let end = start + state.value.itemsPerPage

  paginatedItems.value = items.slice(start, end)
}

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

watch(
  state,
  () => {
    update()
  },
  { deep: true }
)
</script>
