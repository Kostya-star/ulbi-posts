<script setup lang="ts">
import Navbar from './components/UI/navbar.vue';
</script>

<template>
  <navbar />
  <div class="content">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.content {
  padding: 10px;
}

.navbar {
  display: flex;
  gap: 10px;
  background-color: rgba($color: blue, $alpha: .5);
  padding: 10px;
}
</style>
