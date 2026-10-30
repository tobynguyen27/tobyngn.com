<script setup lang="ts">
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
    <header class="fixed top-6 right-6 z-10">
      <div class="flex gap-5">
        <button
          aria-label="Toggle theme"
          :aria-pressed="colorMode.value === 'dark'"
          type="button"
          @click="toggleColorMode"
        >
          <ClientOnly>
            <div :class="[colorMode.value === 'light' ? 'i-ph:sun' : 'i-ph:moon']" />

            <template #fallback>
              <div class="i-ph:sun" />
            </template>
          </ClientOnly>
        </button>
      </div>
    </header>
    <div class="mx-auto flex min-h-dvh max-w-xl flex-col px-6 py-12 sm:py-20 space-y-12">
      <slot />
      <Footer />
    </div>
  </div>
</template>
