<script setup>
import { useHistoryStore } from '../stores/history.js' // call the store
const historyStore = useHistoryStore() // ✅ assign to a different variable
</script>

<template>
  <div class="mt-10 px-4 sm:px-6 md:px-0">
    <!-- Title -->
    <div class="text-center mb-6">
      <h1 class="text-2xl sm:text-3xl font-bold mb-4">
        {{ historyStore.historyName }}
      </h1>
    </div>

    <!-- Temple Image -->
    <div class="mb-8">
      <img 
        :src="historyStore.photo_v" 
        alt="វត្តរបស់យើង" 
        class="w-full object-cover rounded-lg shadow-lg"
      />
    </div>

    <!-- Description -->
    <div class="max-w-4xl mx-auto px-4 mb-10">
      <p class="text-base sm:text-lg mb-6 text-gray-800 leading-relaxed">
        វត្តនេះត្រូវបានស្ថាបនាឡើងនៅសតវត្សទី១៩ ដើម្បីបម្រើសហគមន៍ក្នុងតំបន់។ វត្ថមានសំណង់បែបបុរាណ និងប្រាសាទតូចៗ
        ដែលបង្ហាញពីសិល្បៈខ្មែរ និងបរិយាកាសស្រស់ស្អាតសម្រាប់សមាធិ និងការអធិស្ឋាន។ ក្នុងអំឡុងពេលជាច្រើនឆ្នាំ
        វត្តនេះក៏ក្លាយជមូលដ្ឋានសង្គម និងកន្លែងបុណ្យប្រពៃណីសំខាន់ៗផងដែរ។
      </p>
    </div>

    <!-- Timeline / Historical Events -->
    <div class="max-w-4xl mx-auto space-y-8 border-l-2 border-gray-300 pl-6">
      <div v-for="item in historyStore.cons" :key="item.year" class="relative">
        <!-- timeline dot -->
        <span class="absolute -left-3 top-2 w-6 h-6 rounded-full bg-blue-500 border-2 border-white"></span>
        <h3 class="text-lg font-bold px-10">{{ item.create }}</h3>
        <p class="text-gray-500 px-10">{{ item.year }}</p>
      </div>
    </div>
  </div>
</template>
