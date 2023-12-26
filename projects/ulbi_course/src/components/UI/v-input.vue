<script setup lang="ts">
defineProps<{
  modelValue: string | number;
  placeholder?: string
  type: string
  name: string
}>()

</script>

<template>
  <input 
    :value="modelValue" 
    @input="$emit('update:model-value', ($event.target as HTMLInputElement).value)" 
    :type="type"
    :name="name" 
    class='input'
    :placeholder="placeholder">
</template>

<style lang="scss" scoped>
  .input {
    padding: 10px;
  }
</style>