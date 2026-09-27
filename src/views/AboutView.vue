<template>
  <div class="container py-5">

    <!-- Page Header -->
    <div class="text-center mb-5">
      <h1 class="fw-bold text-primary">About</h1>
      <p class="text-muted">
        Learn more about this Vue.js routing and navigation project.
      </p>
    </div>

    <!-- About Project -->
    <div class="row justify-content-center mb-5">
      <div class="col-lg-9">
        <div class="card shadow-sm">
          <div class="card-body p-5">
            <h2 class="h3 text-primary mb-3">About the Project</h2>

            <p>
              This web application was developed as a single-page application
              using Vue 3 and Vite. It demonstrates how Vue Router can be used
              to navigate between different views without reloading the entire
              page.
            </p>

            <p class="mb-0">
              The application contains five main pages: Home, Blog, Gallery,
              About, and Contact. Bootstrap and the Bootswatch Cerulean theme
              are also used to create a clean and responsive interface.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Technologies -->
    <div class="text-center mb-4">
      <h2 class="fw-bold">Technologies Used</h2>
      <p class="text-muted">
        The main technologies used to build this application.
      </p>
    </div>

    <div class="row g-4 justify-content-center">

      <div class="col-md-6 col-lg-3">
        <div class="card h-100 shadow-sm text-center">
          <div class="card-body p-4">
            <h3 class="h5 text-primary">Vue 3</h3>
            <p class="text-muted mb-0">
              Used to build the user interface using reusable components.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-3">
        <div class="card h-100 shadow-sm text-center">
          <div class="card-body p-4">
            <h3 class="h5 text-primary">Vue Router 4</h3>
            <p class="text-muted mb-0">
              Handles navigation between the different application views.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-3">
        <div class="card h-100 shadow-sm text-center">
          <div class="card-body p-4">
            <h3 class="h5 text-primary">Vite</h3>
            <p class="text-muted mb-0">
              Provides a fast development and build environment for Vue.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-3">
        <div class="card h-100 shadow-sm text-center">
          <div class="card-body p-4">
            <h3 class="h5 text-primary">Bootstrap</h3>
            <p class="text-muted mb-0">
              Provides responsive layouts and consistent interface styling.
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>