<script setup lang="ts">
interface SortOption {
  value: string;
  name: string
}

defineProps<{
  modelValue: string | null;
  options: SortOption[]
}>()
</script>

<template>
  <select :value="modelValue" @change="$emit('update:model-value', ($event.target as HTMLInputElement).value)">
    <option disabled value="volvo">Sort by:</option>
    <option v-for="option in options" :value="option.value" :key="option.value">{{ option.name }}</option>
  </select>
</template>

<style lang="scss" scoped></style>