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

const projects = defineCollection({
  type: "data",
  schema: z.object({
    projects: z.array(
      z.object({
        img: z.string(),
        name: z.string(),
        description: z.string(),
        type: z.string(),
        link: z.string().optional(),
        github: z.string().optional(),
        status: z.string().optional(),
      })
    ),
  }),
});

const products = defineCollection({
  type: "data",
  schema: z.object({
    products: z.array(
      z.object({
        img: z.string(),
        name: z.string(),
        description: z.string(),
        type: z.string(),
        price: z.string(),
        link: z.string().optional(),
      })
    ),
  }),
});

export const collections = {
  article,
  projects,
  products,
};
