<template>
  <div class="bg-red-100">

    <!-- Hero Section Component -->
    <HeroSecteion />

    <!-- Sangkran Message -->
    <div class="py-10 px-4 text-center">
      <h2 class="text-xl md:text-xl font-bold text-gray-800">
        {{ homeState.sangkran }}
      </h2>
    </div>

    <!-- Games Section -->
    <div>
      <h2 class="text-3xl font-bold mb-6 text-center">ល្បែងប្រជាប្រិយខ្មែរ</h2>
      <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <router-link 
          v-for="news in homeState.newsItems" 
          :key="news.id" 
          :to="`/events/${news.id}`"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 block"
        >
          <img :src="news.image" :alt="news.title" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{{ news.title }}</h3>
            <p class="text-gray-600 text-sm mb-2">{{ news.date }}</p>
            <p class="text-gray-700">
              {{ news.description.slice(0, 100) }} 
              {{ news.description.length > 100 ? '...' : '' }}
            </p>
          </div>
        </router-link>
      </div>
    </div>

    <!-- Banner Section -->
    <div class="relative">
      <img :src="sk2" class="w-full h-auto object-cover" />
      <h2 class="text-center text-xl md:text-2xl font-bold py-6">
        {{ homeState.sangkran1 }} {{ homeState.helperMessage }}
      </h2>
    </div>

  </div>
</template>

<script setup>
import { useHomeStore } from '../stores/home'  // ✅ import the store
import sk2 from '../assets/sk2.jpg'             // banner image
import HeroSecteion from '../components/home/HeroSecteion.vue'  // Hero section

// ✅ Call the store and assign to a different variable
const homeState = useHomeStore()
</script>
