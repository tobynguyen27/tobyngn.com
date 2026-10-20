<script setup lang="ts">
const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h2)))
</script>

<template>
  <h3 :id="props.id" class="text-lg">
    <NuxtLink
      v-if="props.id && generate"
      :to="`#${props.id}`"
    >
      <slot />
    </NuxtLink>
    <slot v-else />
  </h3>
</template>
