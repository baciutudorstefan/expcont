import { createRouter, createWebHistory } from 'vue-router'

import Home from './src/pages/Home.vue'
import About from './src/pages/About.vue'
import Services from './src/pages/Services.vue'
import Contact from './src/pages/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/despre', component: About },
  { path: '/servicii', component: Services },
  { path: '/contact', component: Contact },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
