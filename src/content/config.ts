import { defineCollection, z } from "astro:content";
export const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z
      .object({
        src: z.string(),
        alt: z.string().optional(),
      })
      .optional(),
    date: z.date(),
    author: z.string().default("Anonymous"),
    tags: z.array(z.string()).nonempty().default(["untag"]),
  });

const blogCollection = defineCollection({
  type: "content",
  schema: blogSchema 
});

export const collections = {
  blog: blogCollection,
};


