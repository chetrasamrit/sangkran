<script setup>
import { useAboutStore } from '../stores/about'

const aboutStore = useAboutStore() // ✅ store instance
</script>

<template>
  <div class="p-6 max-w-3xl mx-auto">
    <!-- Page Title -->
    <h1 class="text-3xl font-bold mb-8 text-center">
      {{ aboutStore.title }}
    </h1>

    <!-- Timeline / Events -->
    <div class="max-w-4xl mx-auto space-y-8 border-l-2 border-gray-300 pl-6">
      <div v-for="item in aboutStore.description" :key="item.events" class="relative">
        <!-- timeline dot -->
        <span class="absolute -left-3 top-2 w-6 h-6 rounded-full bg-blue-500 border-2 border-white"></span>
        <h3 class="text-lg font-bold px-10">{{ item.events }}</h3>
      </div>
    </div>
  </div>
</template>
