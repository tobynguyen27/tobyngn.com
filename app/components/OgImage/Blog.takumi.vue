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
        <svg width="144" height="144" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1024" height="1024" fill="#FEFCF0" />
          <path d="M306 510.926C372.171 490.639 461.681 457.611 537.265 418.647M537.265 418.647C644.473 363.381 723.662 296.174 668.489 236.448C618.972 182.844 577.608 286.154 537.265 418.647ZM537.265 418.647C517.759 482.71 498.491 553.597 478.657 616.866M478.657 616.866C442.101 733.474 403.618 824.207 358.163 798.663C295.636 763.525 376.829 684.807 478.657 616.866ZM478.657 616.866C574.084 553.196 687.632 498.992 718 498.992" stroke-width="30" stroke-linecap="round" stroke="black" />
        </svg>
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
