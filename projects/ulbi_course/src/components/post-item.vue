<script setup lang="ts">

defineProps<{
  title: string;
  descr: string;
}>()

</script>

<template>
  <div class="post">
    <h2>{{ title }}</h2>
    <p>{{ descr }}</p>
  </div>
</template>

<style lang="scss">
.post {
  padding: 10px;
  border: 2px solid blue;
}
</style>