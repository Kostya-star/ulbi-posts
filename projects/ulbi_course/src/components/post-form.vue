<script setup lang="ts">
import { ref } from 'vue';
import { type PostType } from '@/types/Post'

const props = defineProps<{
  posts: PostType[];
}>()

const emit = defineEmits(['update:posts'])

const postTitle = ref('');
const postBody = ref('');
const isDialogOpen = ref(false);

function addPost() {
  const newPost = {
    id: Date.now(),
    title: postTitle.value,
    body: postBody.value,
    userId: 1,
  }

  emit('update:posts', [...props.posts, newPost])
  isDialogOpen.value = false
  postTitle.value = ''
  postBody.value = ''
}

</script>

<template>
  <div class="add-post-btn">
    <v-button @click="isDialogOpen = true">
      Add Post
    </v-button>
  </div>
  <v-dialog v-model="isDialogOpen">
    <div class="add-post-form">
      <div class="form-title">Create new post</div>
      <form @submit.prevent class="form">
        <v-input v-model="postTitle" type="text" name="postTitle" placeholder="Post Title" />
        <v-input v-model="postBody" type="text" name="postDescr" placeholder="Post Description" />
        <v-button @click="addPost" :disabled="!postTitle.trim() || !postBody.trim()">Add Post</v-button>
      </form>
    </div>
  </v-dialog>
</template>

<style scoped lang="scss">
.add-post-btn {
  display: flex;
  justify-content: end;
}
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