import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        date: z.coerce.date(),
      }),
    }),
    projects: defineCollection({
      type: 'data',
      source: 'projects/*.json',
      schema: z.object({
        name: z.string(),
        description: z.string(),
        url: z.string().url(),
      }),
    }),
  },
})
