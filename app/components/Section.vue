<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <div class="">
    <h2 class="font-serif italic text-xl">
      {{ name }}
    </h2>
    <div class="mt-8">
      <slot />
    </div>
  </div>
</template>
