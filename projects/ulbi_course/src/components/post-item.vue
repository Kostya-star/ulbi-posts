<script setup lang="ts">
import { type PostType } from '@/types/Post'

defineProps<{ post: PostType }>()

defineEmits(['delete-post'])

</script>

<template>
  <div class="post">
    <div>
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
    <v-button @click="$emit('delete-post', post.id)">Delete</v-button>
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