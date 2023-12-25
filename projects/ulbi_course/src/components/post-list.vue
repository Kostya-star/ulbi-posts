<script setup lang="ts">
import PostItem from '@/components/post-item.vue'

interface Post {
  id: number;
  title: string;
  descr: string;
}

defineProps<{
  posts: Post[];
}>()

</script>

<template>
  <div class="post-list">
    <div class="posts-title">Users Posts</div>
    <post-item v-for="post in posts" :key="post.id" :title="post.title" :descr="post.descr" />
  </div>
</template>

<style scoped lang="scss">
.post-list {
  display: flex;
  flex-direction: column;
  gap: 10px;

  .posts-title {
    font-weight: 800;
    font-size: 20px;
  }
}
</style>