import { z, defineCollection } from "astro:content";

const article = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
    featuredImage: z.string().optional(),
    description: z.string(),
  }),
});

export const collections = {
  article,
};
