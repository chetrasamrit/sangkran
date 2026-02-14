<template>
  <div class="flex flex-col min-h-screen font-khmer">
    <Header />

    <div class="flex flex-1">
      <Sidebar />
      <main class="flex-1 p-6 bg-gray-50">
        <router-view />
      </main>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'

import Footer from './components/Footer.vue'

export default {
  components: { Header, Footer },
}
</script>
