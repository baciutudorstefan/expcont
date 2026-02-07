<template>
  <nav
    class="backdrop-blur bg-white/70 dark:bg-gray-900/70 shadow-md sticky top-0 z-50 px-6 md:px-10 py-4 flex justify-between items-center transition"
  >
    <!-- LOGO -->
    <h1 class="text-xl font-bold text-blue-700 dark:text-blue-400">
      Turlea Georgiana
    </h1>

    <!-- DESKTOP MENU -->
    <div class="hidden md:flex gap-6 text-gray-700 dark:text-gray-300 font-medium">
      <router-link to="/" class="nav-link">Acasă</router-link>
      <router-link to="/despre" class="nav-link">Despre</router-link>
      <router-link to="/servicii" class="nav-link">Servicii</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
    </div>

    <!-- DARK MODE TOGGLE -->
    <button
      @click="toggleTheme"
      class="hidden md:block px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
    >
      {{ theme === 'light' ? '🌙' : '☀️' }}
    </button>

    <!-- MOBILE HAMBURGER -->
    <button
      @click="mobileOpen = !mobileOpen"
      class="md:hidden text-3xl text-gray-700 dark:text-gray-300"
    >
      ☰
    </button>

    <!-- MOBILE MENU -->
    <transition name="slide">
      <div
        v-if="mobileOpen"
        class="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg py-6 flex flex-col gap-4 text-center text-lg font-medium md:hidden"
      >
        <router-link @click="closeMenu" to="/" class="mobile-link">Acasă</router-link>
        <router-link @click="closeMenu" to="/despre" class="mobile-link">Despre</router-link>
        <router-link @click="closeMenu" to="/servicii" class="mobile-link">Servicii</router-link>
        <router-link @click="closeMenu" to="/contact" class="mobile-link">Contact</router-link>

        <button
          @click="toggleTheme"
          class="mx-auto mt-4 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
        >
          {{ theme === 'light' ? '🌙 Mod întunecat' : '☀️ Mod luminos' }}
        </button>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const mobileOpen = ref(false)
const theme = ref('light')

function closeMenu() {
  mobileOpen.value = false
}

onMounted(() => {
  theme.value = localStorage.getItem('theme') || 'light'
  document.documentElement.classList.toggle('dark', theme.value === 'dark')
})

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.documentElement.classList.toggle('dark', theme.value === 'dark')
  localStorage.setItem('theme', theme.value)
}
</script>

<style scoped>
.nav-link {
  @apply hover:text-blue-600 dark:hover:text-blue-400 transition;
}
.mobile-link {
  @apply text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition;
}

/* Slide animation */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
