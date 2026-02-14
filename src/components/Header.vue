<template>
  <header class="bg-blue-600 text-white sticky top-0 z-50 shadow-md">
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">

      <!-- Logo -->
      <div class="flex items-center gap-3">
        <img :src="logo" alt="Logo" class="w-12 h-12 md:w-12 md:h-12 rounded-full">
        <h1 class="text-xl font-bold">{{ masterStore.pagodaName }}</h1>
      </div>
      
      <!-- Desktop Menu -->
      <nav class="hidden md:flex space-x-6">
        <router-link
          v-for="item in masterStore.navbar"
          :key="item.name"
          :to="item.path"
          class="hover:underline font-bold transition duration-200"
        >
          {{ item.name }}
        </router-link>
      </nav>

      <!-- Hamburger Button -->
      <button
        @click="toggleMenu"
        class="md:hidden relative w-8 h-8 focus:outline-none"
      >
        <span
          class="absolute h-0.5 w-8 bg-white transform transition duration-300"
          :class="isOpen ? 'rotate-45 top-4' : 'top-2'"
        ></span>
        <span
          class="absolute h-0.5 w-8 bg-white transform transition duration-300"
          :class="isOpen ? 'opacity-0' : 'top-4'"
        ></span>
        <span
          class="absolute h-0.5 w-8 bg-white transform transition duration-300"
          :class="isOpen ? '-rotate-45 top-4' : 'top-6'"
        ></span>
      </button>
    </div>

    <!-- Animated Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isOpen"
        class="md:hidden bg-blue-700 px-4 pb-4 space-y-3"
      >
        <router-link
          v-for="item in masterStore.navbar"
          :key="item.name"
          :to="item.path"
          class="block font-semibold hover:text-gray-200"
          @click="isOpen = false"
        >
          {{ item.name }}
        </router-link>
      </div>
    </transition>

  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useMasterStore } from '../stores/master'
import logo from '../assets/logo.jpeg'

const masterStore = useMasterStore()
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>
