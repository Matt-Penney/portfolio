import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: 'index.md'
    }),
    versions: defineCollection({
      type: 'data',
      source: 'change-log/**/*.json',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().url(),
        date: z.string(),
        to: z.string().url(),
        target: z.string().optional(),
        ui: z.object({
          container: z.string().optional()
        }).optional()
      })
    }),
    docs: defineCollection({
      type: 'page',
      source: {
        include: 'docs/**/*.md'
      },
      schema: z.object({
        links: z.array(z.object({
          label: z.string(),
          icon: z.string(),
          to: z.string(),
          target: z.string().optional()
        })).optional()
      })
    })
  }
})
