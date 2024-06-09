import { z, defineCollection } from "astro:content";

const worksCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    image: image(),
    title: z.string(),
    websiteUrl: z.string().optional(),
  }),
});

export const collections = {
  works: worksCollection,
};
