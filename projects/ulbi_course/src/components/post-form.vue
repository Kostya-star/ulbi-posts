<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { type PostType } from '@/types/Post'

const props = defineProps<{
  posts: PostType[];
  isDialogOpen: boolean;
}>()

const emit = defineEmits(['update:posts', 'update:is-dialog-open'])

const postTitle = ref('');
const postBody = ref('');

function addPost() {
  const newPost = {
    id: Date.now(),
    title: postTitle.value,
    body: postBody.value,
    userId: 1,
  }

  emit('update:posts', [...props.posts, newPost])
  emit('update:is-dialog-open', false)
  postTitle.value = ''
  postBody.value = ''
}

</script>

<template>
  <v-dialog :is-dialog-open="isDialogOpen" @close-dialog="$emit('update:is-dialog-open', false)">
    <div class="add-post-form">
      <div class="form-title">Create new post</div>
      <form @submit.prevent class="form">
        <v-input v-model="postTitle"  type="text" name="postTitle" placeholder="Post Title" />
        <v-input v-model="postBody" type="text" name="postDescr" placeholder="Post Description" />
        <v-button @click="addPost" :disabled="!postTitle.trim() || !postBody.trim()">Add Post</v-button>
      </form>
    </div>
  </v-dialog>
</template>

<style scoped lang="scss">
.add-post-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  .form-title {
    font-weight: 800;
    font-size: 20px;
    margin-bottom: 10px;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
}
</style>