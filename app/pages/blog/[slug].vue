<script setup lang="ts">
import { format } from 'date-fns'

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

if (post.value.ogImage?.props) {
  defineOgImage('Blog.takumi', post.value.ogImage.props)
}

useSeoMeta({
  title: post.value.title,
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
          <p class="text-sm text-tx-2">
            {{ format(post.date, 'MMMM d, yyyy') }}
          </p>
        </div>
      </header>
      <ContentRenderer
        :value="post"
        class="mt-6 prose dark:prose-invert prose-headings:(font-serif) prose-h1:text-2xl prose-a:(decoration-bl)"
      />
    </article>
  </main>
</template>
