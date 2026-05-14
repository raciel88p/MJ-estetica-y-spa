import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    tags: z.array(z.string()).default([]),
    authorId: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

const authorsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/autores" }),
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    bio: z.string().optional(),
    photoUrl: z.string().optional(),
    public: z.boolean().default(true),
  }),
});

export const collections = {
  blog: blogCollection,
  autores: authorsCollection,
};
