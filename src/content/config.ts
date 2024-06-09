import { z, defineCollection } from "astro:content";

const worksCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      thumbnail: image(),
      image: image(),
      websiteUrl: z.string().optional(),
    }),
});

export const collections = {
  works: worksCollection,
};
