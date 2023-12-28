<script setup lang="ts">
defineProps<{
  pagesCount: number | null;
  currentPage: number;
}>()

defineEmits(['update:current-page'])
</script>

<template>
  <div class="pagination-wrapper">
    <div v-for="page in pagesCount" :key="page" class="page" :class="{ 'active': page === currentPage }"
      @click="$emit('update:current-page', page)">{{ page }}</div>
  </div>
</template>

<style scoped lang="scss">
.pagination-wrapper {
  display: flex;
  gap: 5px;
  background-color: white;
  width: fit-content;
  padding: 5px;

  .page {
    padding: 5px 10px;
    border: 1px solid black;
    cursor: pointer;
  }

  .active {
    background-color: rgba($color: #6e6c6c, $alpha: .4);
    color: rgb(219, 11, 11);
  }
}
</style>