<script setup lang="ts">
import { ref } from 'vue'
import PostForm from '@/components/post-form.vue'
import PostList from '@/components/post-list.vue';

const posts = ref([
  {
    id: 1,
    title: 'post1',
    descr: 'post one descr'
  },
  {
    id: 2,
    title: 'post2',
    descr: 'post two descr'
  },
  {
    id: 3,
    title: 'post3',
    descr: 'post three descr'
  },
  {
    id: 4,
    title: 'post4',
    descr: 'post four descr'
  },
])

</script>

<template>
  <div class="content">
    <post-form v-model:posts="posts" />
    <post-list v-model:posts="posts" />
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
</style>
