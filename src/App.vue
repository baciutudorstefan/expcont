<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition">
    <Loader />
    <Navbar />
    <router-view />
    <BackToTop />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Loader from './components/Loader.vue'
import BackToTop from './components/BackToTop.vue'
</script>
