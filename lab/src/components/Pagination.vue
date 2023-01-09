<template>
  <div>
    <div id="paginate">
      <div class="list w-50 m-auto">
        <div v-for="{ item, id } in paginatedItems" :key="id" class="item">
          <p class="text-center">{{ item }}</p>
        </div>
      </div>
      <PaginationControls
        :items-per-page="5"
        :your-array="items"
        :extremities="false"
        @getPaginatedItems="getPaginatedItems"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PaginationControls from './Pagination/PaginationControls.vue'

//data
const items = Array.from({ length: 100 }).map((_, index) => {
  return { item: `Item ${index + 1}`, id: index + 1 }
})

const getPaginatedItems = val => {
  const paginatedItems = val
}
</script>
