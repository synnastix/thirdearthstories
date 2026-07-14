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

export const collections = { encyclopedia, maps };
