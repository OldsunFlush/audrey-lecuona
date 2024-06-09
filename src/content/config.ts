import { z, defineCollection } from 'astro:content';

const worksCollection = defineCollection({
	type: 'content',
  schema: z.object({
    title: z.string(),
    url: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  'works': worksCollection,
};