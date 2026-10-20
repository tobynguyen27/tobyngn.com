<script setup lang="ts">
const items: {
  title: string
  description: string
  startYear: number
  endYear?: number
}[] = [
  {
    title: 'Freelance',
    description: 'Software Engineer',
    startYear: 2025,

  },
]
</script>

<template>
  <Section name="Experience.">
    <ul class="space-y-5">
      <li v-for="(item, index) in items" :key="index" class="flex items-baseline justify-between">
        <div class="flex gap-2 items-baseline">
          <span class="">{{ item.title }}</span>
          <span class="text-sm text-tx-2">{{ item.description }}</span>
        </div>
        <p v-if="item.endYear" class="text-tx-2 text-sm">
          {{ item.startYear }} - {{ item.endYear }}
        </p>
        <p v-else class="text-tx-2 text-sm">
          {{ item.startYear }} - ∞
        </p>
      </li>
    </ul>
  </Section>
</template>
