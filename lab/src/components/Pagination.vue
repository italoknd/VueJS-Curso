<template>
  <div>
    <div id="paginate">
      <div class="list">
        <div v-for="{ item, id } in items" :key="id" class="item">
          {{ item }}
        </div>
      </div>
      <nav aria-label="Page navigation example">
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
import { ref } from 'vue'

const items = Array.from({ length: 100 }).map((_, index) => {
  return { item: `Item ${index + 1}`, id: index + 1 }
})

const itemsPerPage = 5
const state = ref({
  page: 1,
  itemsPerPage,
  totalPages: Math.ceil(items.length / itemsPerPage) //arredondando para um número maior para evitar perda de itens quando a divisão resulta em números quebrados
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
</script>
