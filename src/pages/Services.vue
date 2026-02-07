<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()
</script>

<template>
  <section class="px-6 md:px-10 py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">

    <h2 class="text-4xl font-bold text-blue-700 dark:text-blue-400 text-center mb-14 reveal">
      Servicii Contabile
    </h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

      <div class="service-card reveal">
        <div class="icon">📘</div>
        <h3>Contabilitate financiară completă</h3>
        <p>Gestionarea completă a documentelor.</p>
      </div>

      <div class="service-card reveal">
        <div class="icon">🧾</div>
        <h3>Declarații fiscale</h3>
        <p>TVA, impozite, contribuții.</p>
      </div>

      <div class="service-card reveal">
        <div class="icon">📊</div>
        <h3>Reconcilierea conturilor</h3>
        <p>Verificare și corectare contabilă.</p>
      </div>

      <div class="service-card reveal">
        <div class="icon">💼</div>
        <h3>Consultanță financiară</h3>
        <p>Optimizare procese.</p>
      </div>

      <div class="service-card reveal">
        <div class="icon">🧮</div>
        <h3>Contabilitate primară</h3>
        <p>Facturi, chitanțe, registre.</p>
      </div>

      <div class="service-card reveal">
        <div class="icon">👥</div>
        <h3>Salarizare & HR</h3>
        <p>Contracte, REVISAL, state.</p>
      </div>

    </div>

  </section>
</template>

<style scoped>
.service-card {
  @apply bg-white dark:bg-gray-800 p-8 rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center;
}
.service-card h3 {
  @apply text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2;
}
.service-card p {
  @apply text-gray-600 dark:text-gray-400;
}
.icon {
  @apply text-4xl mb-4;
}
</style>
