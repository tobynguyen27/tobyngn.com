<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="bg-[#FEFCF0] p-12 flex flex-col justify-between">
    <div class="flex items-center">
      <div class="">
        <NuxtImg src="/favicon-light.svg" class="size-36" />
      </div>
      <div class="flex flex-col">
        <p class="text-5xl font-serif">
          Toby Nguyen
        </p>
        <p class="font-serif text-3xl text-tx-2">
          Software Engineer
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-5">
      <p class="text-7xl font-serif">
        {{ title }}
      </p>
      <p class="text-4xl text-tx-2">
        {{ description }}
      </p>
    </div>
  </div>
</template>
