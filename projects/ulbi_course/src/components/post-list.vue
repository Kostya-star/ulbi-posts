<script setup lang="ts">
import PostItem from '@/components/post-item.vue'
import { type PostType } from '@/types/Post'

const props = defineProps<{
  posts: PostType[];
}>()
const emit = defineEmits(['update:posts'])

function deletePost(postId: number) {
  emit('update:posts', props.posts.filter(post => post.id !== postId))
}
</script>

<template>
  <h1 v-if="!posts.length">No Posts Yet</h1>
  <div v-else class="post-list">
    <div class="posts-title">Users Posts</div>
    <post-item v-for="post in posts" :key="post.id" :post="post" @delete-post="deletePost" />
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