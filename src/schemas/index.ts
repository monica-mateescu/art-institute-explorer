import { z } from "zod/v4";

export const PaginationSchema = z.object({
  total: z.int(),
  limit: z.int(),
  offset: z.int().default(0),
  total_pages: z.int(),
  current_page: z.int().default(1),
  prev_url: z.optional(z.url()),
  next_url: z.optional(z.url()),
});

export const ArtworkSchema = z.object({
  id: z.number(),
  title: z.string(),
  artist_title: z.nullable(z.string()),
  image_id: z.nullable(z.string()),
});

export const ArtworksSchema = z.object({
  pagination: PaginationSchema,
  data: z.array(ArtworkSchema).default([]),
  config: z.object({
    iiif_url: z.url(),
  }),
});
