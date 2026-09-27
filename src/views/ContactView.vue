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

    <div class="row justify-content-center">
      <div class="col-lg-8">

        <div class="card shadow-sm">
          <div class="card-body p-4 p-md-5">

            <!-- Success Message -->
            <div
              v-if="submitted"
              class="alert alert-success"
              role="alert"
            >
              Your message has been submitted successfully!
            </div>

            <!-- Contact Form -->
            <form @submit.prevent="submitForm">

              <div class="row g-3">

                <!-- Name -->
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

                <!-- Email -->
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

                <!-- Subject -->
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

                <!-- Message -->
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

                <!-- Button -->
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
    </div>

  </div>
</template>