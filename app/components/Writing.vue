<script setup lang="ts">
import { format } from 'date-fns'

const posts = await queryCollection('blog').order('date', 'DESC').all()
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
            <p v-once class="text-sm text-tx-2">
              {{ format(item.date, 'MMM yyyy') }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </Section>
</template>
