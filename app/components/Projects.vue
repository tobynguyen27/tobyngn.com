<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('projects').all()
})
</script>

<template>
  <Section name="Projects.">
    <ul class="space-y-5">
      <li v-for="project in projects" :key="project.id" class="group">
        <NuxtLink :to="project.url" external target="_blank">
          <div class="flex items-baseline justify-between">
            <p class="group-hover:(text-bl decoration-bl) underline">
              {{ project.name }}
            </p>
            <p class="text-sm text-tx-2">
              {{ project.description }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </Section>
</template>
