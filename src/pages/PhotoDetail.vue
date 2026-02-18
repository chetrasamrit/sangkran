<template>


    <router-link to="/photo" class="inline-block mt-6 text-blue-600 hover:underline">
        <nav class="flex" aria-label="Breadcrumb">
            <ol role="list"
                class="flex space-x-4 rounded-md bg-white px-6 shadow-sm dark:bg-gray-800/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10">
                <li class="flex">
                    <div class="flex items-center">
                        <a href="#  "
                            class="text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300">
                            <HomeIcon class="size-5 shrink-0" aria-hidden="true" />
                            <span class="sr-only">Home</span>
                        </a>
                    </div>
                </li>
                <li v-for="page in pages" :key="page.name" class="flex">
                    <div class="flex items-center">
                        <svg class="h-full w-6 shrink-0 text-gray-200 dark:text-white/10" viewBox="0 0 24 44"
                            preserveAspectRatio="none" fill="currentColor" aria-hidden="true">
                            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                        </svg>
                        <a :href="page.href"
                            class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            :aria-current="page.current ? 'page' : undefined">{{ page.name }}</a>
                    </div>
                </li>
            </ol>
        </nav>
    </router-link>
    <div v-if="event" class="container mx-auto px-4 py-10">
        <img :src="event.image" :alt="event.title" class="w-full h-96 object-contain rounded-lg mb-6" />

        <h1 class="text-3xl font-bold mb-4">{{ event.title }}</h1>
        <p class="text-gray-500 mb-4">{{ event.date }}</p>
        <p class="text-lg text-gray-700">
            {{ event.description }}
        </p>
        <p class="text-lg text-gray-700">{{ event.body }}</p>


    </div>

    <div v-else class="text-center py-20">
        <h2 class="text-2xl font-bold">Event not found</h2>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { HomeIcon } from '@heroicons/vue/20/solid'
import { usePhotoStore } from '../stores/photo.js' // call the store

const photoStore = usePhotoStore()
const route = useRoute()

const event = photoStore.newsItems.find(
    item => item.id === Number(route.params.id)
)
</script>
