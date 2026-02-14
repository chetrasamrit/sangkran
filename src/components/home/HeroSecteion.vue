<template>
  <!-- 🔥 HERO SECTION -->
  <div class="relative h-[70vh] md:h-screen flex items-center justify-center overflow-hidden">

    <!-- Background Image -->
    <img :src="logo" class="absolute inset-0 w-full h-full object-cover" />

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Typing Text -->
    <h1 class="relative z-10 px-4 text-3xl sm:text-4xl md:text-6xl font-bold text-white text-center">
      {{ displayedText }}
      <span class="cursor">|</span>
    </h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import logo from '../../assets/s-k.jpg'  // adjust path as needed
import { useHomeStore } from '../../stores/home'

const homeState = useHomeStore()
const displayedText = ref('')
const fullText = homeState.welcomeMessage

onMounted(() => {
  let i = 0
  let deleting = false
  const typingSpeed = 80
  const deletingSpeed = 40
  const pauseTime = 1000

  function loop() {
    if (!deleting) {
      displayedText.value = fullText.slice(0, i + 1)
      i++
      if (i === fullText.length) setTimeout(() => deleting = true, pauseTime)
    } else {
      displayedText.value = fullText.slice(0, i - 1)
      i--
      if (i === 0) deleting = false
    }
    setTimeout(loop, deleting ? deletingSpeed : typingSpeed)
  }

  loop()
})
</script>

<style>
.cursor {
  display: inline-block;
  margin-left: 5px;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>

