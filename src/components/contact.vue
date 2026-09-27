<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const submitted = ref(false)

const submitForm = () => {
  submitted.value = true

  name.value = ''
  email.value = ''
  subject.value = ''
  message.value = ''
}
</script>

<template>
  <div class="container py-5">

    <!-- Page Header -->
    <div class="text-center mb-5">
      <h1 class="fw-bold text-primary">Contact</h1>
      <p class="text-muted">
        Have a question or message? Feel free to get in touch.
      </p>
    </div>

    <div class="row g-4">

      <!-- Contact Form -->
      <div class="col-lg-8">
        <div class="card shadow-sm h-100">
          <div class="card-body p-4 p-md-5">

            <h2 class="h3 text-primary mb-4">Send a Message</h2>

            <div
              v-if="submitted"
              class="alert alert-success"
              role="alert"
            >
              Your message has been submitted successfully!
            </div>

            <form @submit.prevent="submitForm">
              <div class="row g-3">

                <div class="col-md-6">
                  <label for="name" class="form-label">
                    Name
                  </label>

                  <input
                    id="name"
                    v-model="name"
                    type="text"
                    class="form-control"
                    placeholder="Enter your name"
                    required
                  >
                </div>

                <div class="col-md-6">
                  <label for="email" class="form-label">
                    Email
                  </label>

                  <input
                    id="email"
                    v-model="email"
                    type="email"
                    class="form-control"
                    placeholder="Enter your email"
                    required
                  >
                </div>

                <div class="col-12">
                  <label for="subject" class="form-label">
                    Subject
                  </label>

                  <input
                    id="subject"
                    v-model="subject"
                    type="text"
                    class="form-control"
                    placeholder="Enter the subject"
                    required
                  >
                </div>

                <div class="col-12">
                  <label for="message" class="form-label">
                    Message
                  </label>

                  <textarea
                    id="message"
                    v-model="message"
                    class="form-control"
                    rows="5"
                    placeholder="Write your message here"
                    required
                  ></textarea>
                </div>

                <div class="col-12">
                  <button
                    type="submit"
                    class="btn btn-primary w-100"
                  >
                    Send Message
                  </button>
                </div>

              </div>
            </form>

          </div>
        </div>
      </div>

      <!-- Consultation Information -->
      <div class="col-lg-4">
        <div class="card shadow-sm h-100">
          <div class="card-body p-4">

            <h2 class="h4 text-primary mb-4">
              Lab Consultation Desk
            </h2>

            <p>
              For questions regarding this laboratory activity,
              students may coordinate with the course instructor
              during the available consultation period.
            </p>

            <hr>

            <p class="mb-2">
              <strong>Course</strong>
            </p>

            <p class="text-muted">
              WD 301 - Web Server and Client Services
            </p>

            <p class="mb-2">
              <strong>Instructor</strong>
            </p>

            <p class="text-muted">
              Prof. J. Esquivel
            </p>

            <p class="mb-2">
              <strong>Activity</strong>
            </p>

            <p class="text-muted mb-0">
              VueJS Routing, Navigation & Cloud Production Deployment
            </p>

          </div>
        </div>
      </div>

    </div>

  </div>
</template>