import { defineCollection, z } from 'astro:content';

// Locked tag vocabulary for the encyclopedia "related by shared tag" feature.
// Adding a tag here makes it available to use in frontmatter; any tag used in
// an entry's frontmatter that isn't listed here fails the build.
export const ENCYCLOPEDIA_TAGS = [
  // entity/concept tags
  'empire',
  'legion',
  'temple',
  'merchant-houses',
  'visari',
  'khuldinai',
  'somari',
  'sandborn',
  'nirashi',
  'wildkin',
  'flow-and-energy',
  'timbur-deep',
  'thornhold',
  'the-slums',
  'varad',
  'dragons',
  'heartlands',
  // thematic tags
  'restless-dead',
  'war-and-plague',
  'lost-to-memory',
  'debts-and-bondage',
] as const;

const encyclopedia = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['place', 'faction', 'creature', 'lore', 'person']),
    lead: z.string(),
    image: z.string().optional(),
    related: z.array(z.string()).optional(),
    meta: z.record(z.string()).optional(),
    tags: z.array(z.enum(ENCYCLOPEDIA_TAGS)).optional(),
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
    release: z.string().optional(),
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
