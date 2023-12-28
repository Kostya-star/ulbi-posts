<script setup lang="ts">
import { type PostType } from '@/types/Post'

defineProps<{ post: PostType }>()

defineEmits(['delete-post'])

</script>

<template>
  <div class="post">
    <div>
      <span><strong>{{ post.id }}</strong></span>
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
    <div>
      <v-button @click="$router.push(`/posts/${post.id}`)">Open</v-button>
      <v-button @click="$emit('delete-post', post.id)">Delete</v-button>
    </div>
  </div>
</template>

<style lang="scss">
.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 2px solid blue;

  .delete-btn {
    padding: 5px;
    cursor: pointer;
  }
}
</style>