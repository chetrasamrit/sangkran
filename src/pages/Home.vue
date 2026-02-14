<template>
  <div class="bg-red-100">

    <HeroSecteion />

    <div class="py-10 px-4 text-center">
      <h2 class="text-xl md:text-xl font-bold text-gray-800">
        {{ homeState.sangkran }}
      </h2>
    </div>

    <div class="relative">
      <img :src="sk2" class="w-full h-auto object-cover" />
      <h2 class="text-center text-xl md:text-2xl font-bold py-6">
        {{ homeState.helperMessage }}
      </h2>
    </div>

  </div>
</template>

<script setup>
import { useHomeStore } from '../stores/home'
import sk2 from '../assets/sk2.jpg'
import HeroSecteion from '../components/home/HeroSecteion.vue'

const homeState = useHomeStore()
</script>
