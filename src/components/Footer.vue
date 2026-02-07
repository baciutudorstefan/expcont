<template>
  <footer
    class="mt-20 bg-gradient-to-b from-blue-600 to-blue-800 dark:from-gray-900 dark:to-gray-800 text-white dark:text-gray-300 py-12 transition"
  >
    <div class="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-10">

      <!-- COL 1 -->
      <div>
        <h3 class="text-2xl font-bold mb-4">Turlea Georgiana</h3>
        <p class="text-gray-200 dark:text-gray-400 leading-relaxed">
          Expert Contabil & Consultant Financiar  
          Ofer servicii contabile moderne, precise și adaptate afacerii tale.
        </p>
      </div>

      <!-- COL 2 -->
      <div>
        <h4 class="text-xl font-semibold mb-4">Navigare</h4>
        <ul class="space-y-2">
          <li><router-link to="/" class="footer-link">Acasă</router-link></li>
          <li><router-link to="/despre" class="footer-link">Despre</router-link></li>
          <li><router-link to="/servicii" class="footer-link">Servicii</router-link></li>
          <li><router-link to="/contact" class="footer-link">Contact</router-link></li>
        </ul>
      </div>

      <!-- COL 3 -->
      <div>
        <h4 class="text-xl font-semibold mb-4">Contact</h4>
        <ul class="space-y-2">
          <li class="flex items-center gap-2"><span>📧</span> georgiana@example.com</li>
          <li class="flex items-center gap-2"><span>📞</span> +40 712 345 678</li>
          <li class="flex items-center gap-2"><span>📍</span> România</li>
        </ul>
      </div>

    </div>

    <div class="text-center mt-10 text-gray-200 dark:text-gray-500 text-sm">
      © {{ new Date().getFullYear() }} Turlea Georgiana — Toate drepturile rezervate.
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  @apply text-gray-200 dark:text-gray-400 hover:text-white dark:hover:text-blue-300 transition;
}
</style>
