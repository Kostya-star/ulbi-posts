import type { PostType } from '@/types/Post'
import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref<PostType[]>([])
  const isFetchingPosts = ref(false)

  const selectedSort = ref(null)
  const search = ref('')

  const currentPage = ref(1)
  const pagesCount = ref<number | null>(null)

  const sortedPosts = computed({
    get() {
      const sort = selectedSort.value
      const searchVal = search.value
      const postsCopy = [...posts.value]

      if (!sort && !searchVal) return postsCopy

      let searchedAndSotedPosts = postsCopy

      if (sort) {
        searchedAndSotedPosts = searchedAndSotedPosts.sort(
          (post1, post2) => (post1[sort] as string)?.localeCompare(post2[sort])
        )
      }

      if (searchVal) {
        searchedAndSotedPosts = searchedAndSotedPosts.filter((post) =>
          post.title.toLowerCase().includes(searchVal.toLowerCase())
        )
      }

      return searchedAndSotedPosts
    },
    set(newPosts) {
      posts.value = newPosts
    }
  })

  async function fetchPosts() {
    try {
      isFetchingPosts.value = true
      const resp = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _limit: 10,
          _page: currentPage.value
        }
      })

      posts.value = resp.data

      pagesCount.value = resp.headers['x-total-count'] / 10
    } catch (error) {
      console.log(error)
    } finally {
      isFetchingPosts.value = false
    }
  }

  return { isFetchingPosts, selectedSort, search, currentPage, pagesCount, sortedPosts, fetchPosts }
})
