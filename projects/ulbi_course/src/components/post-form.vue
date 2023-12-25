<script setup lang="ts">
import { ref } from 'vue';

interface Post {
  id: number;
  title: string;
  descr: string;
}

const props = defineProps<{
  posts: Post[];
}>()

const emit = defineEmits(['update:posts'])

const postTitle = ref('');
const postDescr = ref('');

function addPost() {
  const newPost = {
    id: Date.now(),
    title: postTitle.value,
    descr: postDescr.value
  }

  emit('update:posts', [...props.posts, newPost])
  postTitle.value = ''
  postDescr.value = ''
}

</script>

<template>
  <div class="add-post-form">
    <div class="form-title">Create new post</div>
    <form @submit.prevent class="form">
      <input :value="postTitle" @input="postTitle = ($event.target as HTMLInputElement).value" type="text"
        name="postTitle" placeholder="Post Title">
      <input :value="postDescr" @input="postDescr = ($event.target as HTMLInputElement).value" type="text"
        name="postDescr" placeholder="Post Description">
      <button @click="addPost" :disabled="!postTitle.trim() || !postDescr.trim()">Add Post</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.add-post-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  .form-title {
    font-weight: 800;
    font-size: 20px;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;

    input,
    button {
      padding: 10px;
    }
  }
}
</style>