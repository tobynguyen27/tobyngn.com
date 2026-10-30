<script setup lang="ts">
const slug = useRoute().params.slug

const { data } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})

const post = data.value

if (!post) {
  throw createError({
    status: 404,
    statusText: 'Page not found',
  })
}

defineOgImage('Blog.takumi', {
  title: post.title,
  description: post.description,
}, [{ key: 'og', width: 1200, height: 630 }])

useSeoMeta({
  title: post.title,
  description: post.description,
  ogType: 'article',
  articlePublishedTime: new Date(post.date).toISOString(),
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
          <NuxtTime
            :datetime="post.date"
            class="text-sm text-tx-2"
            year="numeric"
            month="long"
            day="numeric"
          />
        </div>
      </header>
      <ContentRenderer
        :value="post"
        class="mt-6 prose dark:prose-invert prose-headings:(font-serif) prose-h1:text-2xl marker:text-tx prose-code:before:content-none prose-code:after:content-none prose-code:(bg-bg-2 px-1 py-0.5 rounded-sm)"
      />
    </article>
  </main>
</template>
