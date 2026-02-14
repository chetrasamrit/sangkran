<template>
  <div class="container mx-auto px-4 py-10">
    <h2 class="text-3xl font-bold mb-6 text-center">ល្បែងប្រជាប្រណី</h2>

    <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="news in eventsStore.newsItems"
        :key="news.id"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <img
          :src="news.image"
          :alt="news.title"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">{{ news.title }}</h3>
          <p class="text-gray-600 text-sm mb-2">{{ news.date }}</p>
          <p class="text-gray-700">{{ news.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useEventsStore } from '../stores/events.js'  // ✅ named import

const eventsStore = useEventsStore()
</script>
