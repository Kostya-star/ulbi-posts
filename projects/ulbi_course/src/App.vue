<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import PostForm from '@/components/post-form.vue'
import PostList from '@/components/post-list.vue';
import axios from 'axios'
import { type PostType } from '@/types/Post'

const posts = ref<PostType[]>([])

const sortOptions = [
  { value: 'title', name: 'Title' },
  { value: 'body', name: 'Description' },
]
const selectedSort = ref(null)

const isDialogOpen = ref(false);

const sortedPosts = computed({
  get() {
    const sort = selectedSort.value
    const postsCopy = [...posts.value]

    if (!sort) return postsCopy
    return postsCopy.sort((post1, post2) => (post1[sort] as string).localeCompare(post2[sort]))
  },
  set(newPosts) {
    posts.value = newPosts
  }
})

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
    <div class="header-btns">
      <v-select v-model="selectedSort" :options="sortOptions" />
      <div class="add-post-btn">
        <v-button @click="isDialogOpen = true">
          Add Post
        </v-button>
      </div>
    </div>

    <post-form v-model:posts="sortedPosts" v-model:is-dialog-open="isDialogOpen" />
    <post-list v-model:posts="sortedPosts" />
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

.header-btns {
  display: flex;
  justify-content: end;
  gap: 10px;
}
</style>
