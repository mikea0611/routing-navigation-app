<script setup>
import { ref, computed } from 'vue'

import gallery1 from '../assets/images/gallery1.jpg'
import gallery2 from '../assets/images/gallery2.jpg'
import gallery3 from '../assets/images/gallery3.jpg'
import gallery4 from '../assets/images/gallery4.jpg'
import gallery5 from '../assets/images/gallery5.jpg'
import gallery6 from '../assets/images/gallery6.jpg'

const activeCategory = ref('All')

const images = [
  {
    id: 1,
    src: gallery1,
    title: 'Digital Connectivity',
    category: 'Technology'
  },
  {
    id: 2,
    src: gallery2,
    title: 'Human & AI Collaboration',
    category: 'Technology'
  },
  {
    id: 3,
    src: gallery3,
    title: 'Adventure Awaits',
    category: 'Travel'
  },
  {
    id: 4,
    src: gallery4,
    title: 'Explore the World',
    category: 'Travel'
  },
  {
    id: 5,
    src: gallery5,
    title: 'Island Paradise',
    category: 'Nature'
  },
  {
    id: 6,
    src: gallery6,
    title: 'Majestic Mayon',
    category: 'Nature'
  }
]

const categories = ['All', 'Technology', 'Travel', 'Nature']

const filteredImages = computed(() => {
  if (activeCategory.value === 'All') {
    return images
  }

  return images.filter(
    image => image.category === activeCategory.value
  )
})
</script>

<template>
  <div class="container py-5">

    <!-- Page Header -->
    <div class="text-center mb-4">
      <h1 class="fw-bold text-primary">Gallery</h1>

      <p class="text-muted">
        Explore the showcase by selecting a category.
      </p>
    </div>

    <!-- Category Filters -->
    <div class="d-flex justify-content-center flex-wrap gap-2 mb-5">
      <button
        v-for="category in categories"
        :key="category"
        class="btn"
        :class="
          activeCategory === category
            ? 'btn-primary'
            : 'btn-outline-primary'
        "
        @click="activeCategory = category"
      >
        {{ category }}
      </button>
    </div>

    <!-- Gallery -->
    <div class="row g-4">
      <div
        v-for="image in filteredImages"
        :key="image.id"
        class="col-sm-6 col-lg-4"
      >
        <div class="card h-100 shadow-sm">

          <img
            :src="image.src"
            :alt="image.title"
            class="card-img-top gallery-image"
          >

          <div class="card-body text-center">
            <h2 class="h5">
              {{ image.title }}
            </h2>

            <span class="badge bg-primary">
              {{ image.category }}
            </span>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.gallery-image {
  height: 220px;
  object-fit: cover;
}
</style>