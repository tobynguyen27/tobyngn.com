<script setup lang="ts">
defineOgImage('Default.takumi', [
  { key: 'og', width: 1200, height: 630 },
  { key: 'whatsapp', width: 800, height: 800 },
])
</script>

<template>
  <main class="space-y-24">
    <About />
    <Contacts />
    <Experience />
    <Projects />
    <Writing />
  </main>
</template>
