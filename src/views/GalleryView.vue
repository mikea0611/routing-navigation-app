<script setup>
import gallery1 from '../assets/images/gallery1.jpg'
import gallery2 from '../assets/images/gallery2.jpg'
import gallery3 from '../assets/images/gallery3.jpg'
import gallery4 from '../assets/images/gallery4.jpg'
import gallery5 from '../assets/images/gallery5.jpg'
import gallery6 from '../assets/images/gallery6.jpg'

const images = [
  {
    id: 1,
    src: gallery1,
    title: 'Digital Connectivity'
  },
  {
    id: 2,
    src: gallery2,
    title: 'Human & AI Collaboration'
  },
  {
    id: 3,
    src: gallery3,
    title: 'Adventure Awaits'
  },
  {
    id: 4,
    src: gallery4,
    title: 'Explore the World'
  },
  {
    id: 5,
    src: gallery5,
    title: 'Island Paradise'
  },
  {
    id: 6,
    src: gallery6,
    title: 'Majestic Mayon'
  }
]
</script>

<template>
  <div class="container py-5">

    <!-- Page Header -->
    <div class="text-center mb-5">
      <h1 class="fw-bold text-primary">Gallery</h1>
      <p class="text-muted">
        A responsive image gallery built with Vue and Bootstrap.
      </p>
    </div>

    <!-- Gallery Grid -->
    <div class="row g-4">
      <div
        v-for="image in images"
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
            <h2 class="h5 mb-0">
              {{ image.title }}
            </h2>
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