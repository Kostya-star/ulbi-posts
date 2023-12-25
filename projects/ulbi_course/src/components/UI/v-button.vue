<script setup lang="ts">
</script>

<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  padding: 5px;
  cursor: pointer;
}
</style>