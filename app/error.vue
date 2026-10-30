<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()
</script>

<template>
  <div class="w-full min-h-dvh flex justify-center items-center bg-bg text-tx">
    <div class="space-y-8">
      <h1 class="text-center font-serif text-8xl italic">
        {{ error.status }}
      </h1>
      <p class="text-center font-light">
        Go back <NuxtLink to="/" class="link">
          home.
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
