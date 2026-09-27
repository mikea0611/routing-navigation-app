<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold" to="/">
        Vue Routing App
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">

          <li class="nav-item">
            <RouterLink class="nav-link" to="/">
              Home
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/blog">
              Blog
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/gallery">
              Gallery
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">
              About
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact">
              Contact
            </RouterLink>
          </li>

        </ul>
      </div>
    </div>
  </nav>

  <RouterView />
</template>

<style scoped>
.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
  text-underline-offset: 5px;
}
</style>