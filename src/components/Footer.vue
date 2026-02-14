<template>
    <footer class="bg-blue-700 text-white mt-10">
        <div class="container mx-auto px-4 py-8">

            <!-- Top Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

                <!-- Logo + Description -->
                <div class="flex flex-col items-center justify-center">
                    <div class="flex items-center gap-3 mb-4">
                        <img :src="logo" alt="Logo" class="w-12 h-12 rounded-full">

                    </div>
                    <div>
                        <h2 class="text-xl font-bold">{{ masterStore.pagodaName }}</h2>
                    </div>
                    <div>
                        <h2 class="text-lg font-semibold" v-html="masterStore.managerName"></h2>

                    </div>

                </div>

                <!-- Navigation -->
                <div>
                    <ul class="space-y-2">
                        <li v-for="item in masterStore.navbar" :key="item.name">
                            <router-link :to="item.path" class="hover:text-gray-300 transition">
                                {{ item.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>

                <!-- Contact / Social -->
                <div>
                    <h3 class="font-semibold mb-4">ទំនាក់ទំនង</h3>
                    <ul class="space-y-2 text-sm text-gray-200">
                        <li>អ៊ីម៉ែល: {{ masterStore.email }}</li>
                        <li>លេខទូរសព្ទ: {{ masterStore.phone }}</li>
                        <li>ទីតាំង: {{ masterStore.address }}</li>
                    </ul>
                </div>

            </div>

            <!-- Bottom Copyright -->
            <div class="border-t border-blue-500 mt-8 pt-4 text-center text-sm text-gray-300">
                © {{ new Date().getFullYear() }} {{ masterStore.pagodaName }}. All rights reserved.
            </div>

        </div>
    </footer>
</template>

<script setup>
import { useMasterStore } from '../stores/master'
import logo from '../assets/logo.jpeg'

const masterStore = useMasterStore()
</script>
