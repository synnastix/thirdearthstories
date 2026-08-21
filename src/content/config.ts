import { defineCollection, z } from 'astro:content';

const encyclopedia = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['place', 'faction', 'creature', 'lore', 'person']),
    lead: z.string(),
    image: z.string().optional(),
    related: z.array(z.string()).optional(),
    meta: z.record(z.string()).optional(),
  }),
});

const maps = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    order: z.number().optional(),
  }),
});

const books = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string(),
    isbn: z.string().optional(),
    order: z.number().optional(),
    links: z.array(
      z.object({
        label: z.string(),
        url: z.string().url(),
      })
    ),
  }),
});

const about = defineCollection({
  type: 'content',
  schema: z.object({}),
});

export const collections = { encyclopedia, maps, books, about };
