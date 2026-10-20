<script setup lang="ts">
const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h2)))
</script>

<template>
  <h2 :id="props.id" class="text-xl">
    <NuxtLink
      v-if="props.id && generate"
      :to="`#${props.id}`"
    >
      <slot />
    </NuxtLink>
    <slot v-else />
  </h2>
</template>
