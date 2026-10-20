<script setup lang="ts">
import Footer from '~/components/Footer.vue'

const colorMode = useColorMode()

function toggleColorMode() {
  if (colorMode.value === 'light') {
    colorMode.preference = 'dark'
  }
  else {
    colorMode.preference = 'light'
  }
}
</script>

<template>
  <div class="bg-bg text-tx">
    <header class="fixed top-6 right-6">
      <div class="flex gap-5">
        <button aria-label="Toggle theme" @click="toggleColorMode">
          <ClientOnly><div :class="[colorMode.value === 'light' ? 'i-ph:sun' : 'i-ph:moon']" /></ClientOnly>
        </button>
      </div>
    </header>
    <div class="mx-auto flex min-h-dvh max-w-xl flex-col px-6 py-12 sm:py-20 space-y-12">
      <slot />
      <Footer />
    </div>
  </div>
</template>
