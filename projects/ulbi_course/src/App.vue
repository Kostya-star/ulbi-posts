<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PostForm from '@/components/post-form.vue'
import PostList from '@/components/post-list.vue';
import axios from 'axios'
import { type PostType } from '@/types/Post'

const posts = ref<PostType[]>([])

onMounted(() => {
  fetchPosts()
})

async function fetchPosts() {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: 10
      }
    })

    posts.value = data
  } catch (error) {
    console.log(error);
  }
}

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
