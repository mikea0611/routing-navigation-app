<script setup>
const posts = [
  {
    id: 1,
    title: 'Getting Started with Vue 3',
    date: 'September 20, 2026',
    description:
      'Learn the basics of Vue 3 and how it can be used to build modern web applications.'
  },
  {
    id: 2,
    title: 'Understanding Vue Router',
    date: 'September 22, 2026',
    description:
      'Explore how Vue Router allows users to navigate between different views in a single-page application.'
  },
  {
    id: 3,
    title: 'Styling with Bootstrap',
    date: 'September 25, 2026',
    description:
      'Discover how Bootstrap makes it easier to create responsive and organized page layouts.'
  }
]
</script>

<template>
  <div class="container py-5">

    <!-- Page Header -->
    <div class="text-center mb-5">
      <h1 class="fw-bold text-primary">Blog</h1>
      <p class="text-muted">
        Explore articles about Vue.js, routing, and web development.
      </p>
    </div>

    <!-- Blog Posts -->
    <div class="row g-4">
      <div
        v-for="post in posts"
        :key="post.id"
        class="col-md-4"
      >
        <div class="card h-100 shadow-sm">
          <div class="card-body p-4">

            <h2 class="h4 card-title">
              {{ post.title }}
            </h2>

            <p class="small text-muted">
              {{ post.date }}
            </p>

            <p class="card-text">
              {{ post.description }}
            </p>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>