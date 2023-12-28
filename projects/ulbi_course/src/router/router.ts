import MainPage from '@/pages/main.vue';
import AboutPage from '@/pages/about.vue';
import PostDetails from '@/pages/post-details.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/posts/:id',
    component: PostDetails
  },
]

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
})
