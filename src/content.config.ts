import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 購入リンク(楽天・公式ストアなど Amazon 以外)
const link = z.object({
  label: z.string(),
  url: z.string(),
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tech: z.array(z.string()).default([]),
    repo: z.string().optional(),
    url: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const books = defineCollection({
  loader: glob({ base: './src/content/books', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    status: z.enum(['read', 'reading', 'want']).default('read'),
    readAt: z.coerce.date().optional(),
    rating: z.number().min(1).max(5).optional(),
    asin: z.string().optional(),
    image: z.string().optional(),
    links: z.array(link).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

const items = defineCollection({
  loader: glob({ base: './src/content/items', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    name: z.string(),
    category: z.string(),
    brand: z.string().optional(),
    since: z.coerce.date().optional(),
    rating: z.number().min(1).max(5).optional(),
    asin: z.string().optional(),
    image: z.string().optional(),
    links: z.array(link).default([]),
  }),
});

export const collections = { blog, projects, books, items };
