<template>
  <div id="paginate" class="bg-info">
    <div class="list w-50 m-auto">
      <div v-for="{ item, id } in paginatedItems" :key="id" class="item">
        <p class="text-center">{{ item }}</p>
      </div>
    </div>
    <PaginationControls :state="state" :extremities="false" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import PaginationControls from "./Pagination/PaginationControls.vue";

onMounted(() => {
  update();
});

//data
const items = Array.from({ length: 100 }).map((_, index) => {
  return { item: `Item ${index + 1}`, id: index + 1 };
});

//initial state of pagination
const itemsPerPage = 5;
const state = ref({
  page: 1,
  itemsPerPage,
  totalPages: Math.ceil(items.length / itemsPerPage), //rounding to a higher number to avoid lost of items when the division results in broken numbers
});

const paginatedItems = ref([]);

const update = () => {
  let page = state.value.page - 1;
  let start = page * state.value.itemsPerPage;
  let end = start + state.value.itemsPerPage;

  paginatedItems.value = items.slice(start, end);
};

watch(
  state,
  () => {
    update();
  },
  { deep: true }
);
</script>
<style scoped>

</style>