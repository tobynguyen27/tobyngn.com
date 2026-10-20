<script setup lang="ts">
const items: {
  name: string
  description: string
  url: string
}[] = [
  {
    name: 'Solitar',
    description: 'An URL shortener',
    url: 'https://solitar.link',
  },
]
</script>

<template>
  <Section name="Projects.">
    <ul class="space-y-5">
      <li v-for="item in items" :key="item.name" class="group">
        <NuxtLink :to="item.url" external target="_blank">
          <div class="flex items-baseline justify-between">
            <p class="group-hover:(underline decoration-bl)">
              {{ item.name }}
            </p>
            <p class="text-sm text-tx-2">
              {{ item.description }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </Section>
</template>
