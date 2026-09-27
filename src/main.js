import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootswatch/dist/cerulean/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createApp(App)
  .use(router)
  .mount('#app')