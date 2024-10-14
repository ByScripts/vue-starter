import './assets/main.css'
import { createPinia } from 'pinia'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const vuetify = createVuetify({
  components,
  directives,
})


app
  .use(createPinia())
  .use(router)
  .use(vuetify)
  .mount('#app')
