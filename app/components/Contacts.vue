<script setup lang="ts">
const items: {
  name: string
  label: string
  link: string
}[] = [
  {
    name: 'X/Twitter',
    label: '@imtobynguyen',
    link: 'https://x.com/iamtobynguyen',
  },
  {
    name: 'GitHub',
    label: '@tobynguyen27',
    link: 'https://github.com/tobynguyen27',
  },
]
</script>

<template>
  <Section name="Elsewhere.">
    <p class="">
      You can follow me:
    </p>
    <ul class="list-disc list-inside marker:text-tx-2 px-2 mt-2 space-y-1">
      <li v-for="item in items" :key="item.name" class="">
        {{ item.name }}: <NuxtLink :to="item.link" external target="_blank" class="link">
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </Section>
</template>
