<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()
</script>

<template>
  <section class="px-6 md:px-10 py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">

    <!-- HERO -->
    <div class="max-w-5xl mx-auto text-center mb-20 reveal">
      <h1 class="text-6xl font-extrabold text-blue-700 dark:text-blue-400 mb-4">
        Turlea Georgiana
      </h1>

      <h2 class="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
        Expert Contabil & Consultant Financiar
      </h2>

      <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
        Construiesc claritate financiară, stabilitate și încredere pentru afaceri de orice dimensiune.
        Cu peste 10 ani de experiență în companii locale și internaționale, ofer servicii contabile moderne.
      </p>

      <div class="mt-10 flex justify-center gap-6 reveal">
        <router-link to="/servicii" class="btn-primary">Servicii</router-link>
        <router-link to="/contact" class="btn-secondary">Contact</router-link>
      </div>
    </div>

    <!-- HIGHLIGHTS -->
    <div class="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-20">
      <div class="highlight-card reveal">
        <h3>10+ ani experiență</h3>
        <p>Expertiză în companii locale și internaționale.</p>
      </div>

      <div class="highlight-card reveal">
        <h3>Profesionalism & acuratețe</h3>
        <p>Lucrez cu atenție la detalii și responsabilitate.</p>
      </div>

      <div class="highlight-card reveal">
        <h3>Comunicare rapidă</h3>
        <p>Răspuns prompt și colaborare eficientă.</p>
      </div>
    </div>

    <!-- APTITUDINI -->
    <div class="max-w-4xl mx-auto text-center reveal">
      <h2 class="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6">
        Aptitudini de top
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-700 dark:text-gray-300">
        <div class="skill reveal">Atenție la detalii</div>
        <div class="skill reveal">Analiză financiară</div>
        <div class="skill reveal">Gândire critică</div>
        <div class="skill reveal">Comunicare & persuasiune</div>
        <div class="skill reveal">Lucru în echipă</div>
        <div class="skill reveal">Învățare continuă</div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.btn-primary {
  @apply px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition transform hover:-translate-y-1;
}
.btn-secondary {
  @apply px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition transform hover:-translate-y-1;
}
.highlight-card {
  @apply bg-white dark:bg-gray-800 p-8 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1 text-center border border-gray-100 dark:border-gray-700;
}
.skill {
  @apply bg-white dark:bg-gray-800 shadow rounded-lg py-3 px-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition border border-gray-100 dark:border-gray-700;
}
</style>
