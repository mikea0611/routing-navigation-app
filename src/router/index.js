import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../components/home.vue'
import BlogView from '../components/blog.vue'
import GalleryView from '../components/gallery.vue'
import AboutView from '../components/about.vue'
import ContactView from '../components/contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router