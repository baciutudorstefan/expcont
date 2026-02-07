<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()
</script>

<template>
  <section class="px-6 md:px-10 py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">

    <h2 class="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-10 text-center reveal">
      Contact
    </h2>

    <form class="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 space-y-6 reveal">

      <input type="text" placeholder="Nume complet" class="input" />
      <input type="email" placeholder="Email" class="input" />
      <input type="tel" placeholder="Telefon" class="input" />
      <input type="text" placeholder="Titlu mesaj" class="input" />
      <textarea rows="5" placeholder="Mesajul tău" class="input"></textarea>

      <button class="btn-primary w-full">
        Trimite mesaj
      </button>

    </form>

  </section>
</template>

<style scoped>
.input {
  @apply w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition;
}
.btn-primary {
  @apply px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition transform hover:-translate-y-1;
}
</style>
