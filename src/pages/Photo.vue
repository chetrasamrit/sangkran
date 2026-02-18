<template>
  <div class="container mx-auto px-4 py-10">
    <h2 class="text-3xl font-bold mb-6 text-center">{{photoStore.h1}}</h2>

    <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <router-link v-for="news in photoStore.newsItems" :key="news.id" :to="`/photo/${news.id}`"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 block">
        <img :src="news.image" :alt="news.title" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">{{ news.title }}</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { usePhotoStore } from '../stores/photo.js' // call the store
const photoStore = usePhotoStore() // ✅ assign to a different variable
</script>

