<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-light py-5">
      <div class="container py-5 text-center">
        <h1 class="display-4 fw-bold text-primary">
          Welcome to My Vue App
        </h1>

        <p class="lead text-muted mt-3 mb-4">
          A simple single-page application built with Vue 3,
          Vue Router 4, Vite, and Bootstrap.
        </p>

        <RouterLink to="/about" class="btn btn-primary btn-lg me-2">
          Learn More
        </RouterLink>

        <RouterLink to="/contact" class="btn btn-outline-primary btn-lg">
          Contact
        </RouterLink>
      </div>
    </section>

    <!-- Features Section -->
    <section class="container py-5">
      <div class="text-center mb-5">
        <h2 class="fw-bold">Explore the Application</h2>
        <p class="text-muted">
          Navigate through the different pages of this Vue.js project.
        </p>
      </div>

      <div class="row g-4">

        <!-- Blog -->
        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body text-center p-4">
              <h3 class="h4 text-primary">Blog</h3>

              <p class="text-muted">
                Read sample articles and explore content displayed
                through a separate Vue view.
              </p>

              <RouterLink to="/blog" class="btn btn-outline-primary">
                View Blog
              </RouterLink>
            </div>
          </div>
        </div>

        <!-- Gallery -->
        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body text-center p-4">
              <h3 class="h4 text-primary">Gallery</h3>

              <p class="text-muted">
                Browse a simple responsive gallery created using
                Bootstrap's grid system.
              </p>

              <RouterLink to="/gallery" class="btn btn-outline-primary">
                View Gallery
              </RouterLink>
            </div>
          </div>
        </div>

        <!-- About -->
        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body text-center p-4">
              <h3 class="h4 text-primary">About</h3>

              <p class="text-muted">
                Learn more about the technologies and purpose
                behind this Vue.js application.
              </p>

              <RouterLink to="/about" class="btn btn-outline-primary">
                About the App
              </RouterLink>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>