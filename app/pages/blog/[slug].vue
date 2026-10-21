<script setup lang="ts">
const slug = useRoute().params.slug

const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})

if (!post.value) {
  throw createError({
    status: 404,
    statusText: 'Page not found',
  })
}

defineOgImage('Blog.takumi', {
  title: post.value.title,
  description: post.value.description,
}, [{ key: 'og', width: 1200, height: 630 }])

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
})

const publicationDate = computed(() => {
  if (!post.value?.date)
    return ''

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(post.value.date))
})
</script>

<template>
  <main class="">
    <article class="">
      <header class="space-y-6">
        <div class="">
          <NuxtLink
            to="/"
            class="flex items-center gap-1 hover:(cursor-pointer text-tx) text-tx-2 text-sm"
          >
            <div class="i-ph:arrow-left" />Home
          </NuxtLink>
        </div>
        <div class="">
          <time :datetime="post.date" class="text-sm text-tx-2">
            {{ publicationDate }}
          </time>
        </div>
      </header>
      <ContentRenderer
        :value="post"
        class="mt-6 prose dark:prose-invert prose-headings:(font-serif) prose-h1:text-2xl"
      />
    </article>
  </main>
</template>
