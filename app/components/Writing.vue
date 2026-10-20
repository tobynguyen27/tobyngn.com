<script setup lang="ts">
const posts = await queryCollection('blog').order('date', 'DESC').all()

const monthYear = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
})
</script>

<template>
  <Section name="Writing.">
    <ul class="space-y-5">
      <li v-for="item in posts" :key="item.id" class="group cursor-pointer">
        <NuxtLink :to="item.path">
          <div class="flex items-baseline justify-between">
            <p class="underline group-hover:(decoration-bl text-bl)">
              {{ item.title }}
            </p>
            <time v-once class="text-sm text-tx-2">
              {{ monthYear.format(new Date(item.date)) }}
            </time>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </Section>
</template>
