import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { defineOgImageSchema } from 'nuxt-og-image/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        ogImage: defineOgImageSchema(),
      }),
    }),
  },
})
