<script setup lang="ts">
import { onMounted, ref, toRefs, watch } from 'vue'
import PostForm from '@/components/post-form.vue'
import PostList from '@/components/post-list.vue';
import { usePostsStore } from '@/stores/posts'

const { isFetchingPosts, selectedSort, search, currentPage, pagesCount, sortedPosts } = toRefs(usePostsStore())
const { fetchPosts } = usePostsStore()

const sortOptions = [
  { value: 'title', name: 'Title' },
  { value: 'body', name: 'Description' },
]

const isDialogOpen = ref(false);

onMounted(() => {
  fetchPosts()
})

watch(currentPage, () => {
  fetchPosts()
})

</script>

<template>
  <div>
    <div class="header-btns">
      <v-input v-model="search" placeholder="Search for posts..." type="text" name="search" />
      <v-select v-model="selectedSort" :options="sortOptions" />
      <v-button @click="isDialogOpen = true">
        Add Post
      </v-button>
    </div>

    <post-form v-model:posts="sortedPosts" v-model:is-dialog-open="isDialogOpen" />

    <h1 v-if="isFetchingPosts">Loading...</h1>
    <h1 v-if="!sortedPosts.length && !isFetchingPosts">No Posts Yet</h1>
    <post-list v-if="!isFetchingPosts && sortedPosts.length" v-model:posts="sortedPosts" />

    <div class="pagination">
      <v-pagination v-model:current-page="currentPage" :pages-count="pagesCount" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-btns {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
}

.pagination {
  display: flex;
  justify-content: center;
  position: fixed;
  padding: 5px 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba($color: black, $alpha: .5);
}
</style>