import { defineCollection, z } from 'astro:content';

const encyclopedia = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.enum(['place', 'faction', 'creature', 'lore', 'person']),
    lead: z.string(),
    related: z.array(z.string()).optional(),
    meta: z.record(z.string()).optional(),
  }),
});

export const collections = { encyclopedia };
