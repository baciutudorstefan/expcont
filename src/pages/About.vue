<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()
</script>

<template>
  <section class="px-6 md:px-10 py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">

    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-10 reveal">
        Despre Georgiana
      </h2>

      <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 reveal">
        Sunt un contabil dedicat, organizat și orientat spre rezultate...
      </p>

      <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-12 reveal">
        De-a lungul carierei, am gestionat responsabilități complexe...
      </p>

      <h3 class="text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-6 reveal">
        Experiență profesională
      </h3>

      <div class="relative border-l border-gray-300 dark:border-gray-700 pl-6 space-y-10">

        <div class="timeline-item reveal">
          <span class="timeline-dot"></span>
          <h4>Accounts Payable Accountant – AWIN</h4>
          <p>2023 – prezent</p>
        </div>

        <div class="timeline-item reveal">
          <span class="timeline-dot"></span>
          <h4>Senior Compliance Associate – Amazon</h4>
          <p>2020 – 2023</p>
        </div>

        <div class="timeline-item reveal">
          <span class="timeline-dot"></span>
          <h4>Economist – Cresactiv SRL</h4>
          <p>2014 – 2020</p>
        </div>

      </div>
    </div>

  </section>
</template>

<style scoped>
.timeline-item h4 {
  @apply text-xl font-semibold text-gray-800 dark:text-gray-200;
}
.timeline-item p {
  @apply text-gray-600 dark:text-gray-400;
}
.timeline-dot {
  @apply absolute -left-3 top-1 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full shadow;
}
</style>
