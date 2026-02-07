<template>
  <div
    v-if="visible"
    class="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-[9999] transition"
  >
    <div class="loader"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(true)

onMounted(() => {
  setTimeout(() => {
    visible.value = false
  }, 800) // durata loaderului
})
</script>

<style scoped>
.loader {
  width: 60px;
  height: 60px;
  border: 6px solid transparent;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
