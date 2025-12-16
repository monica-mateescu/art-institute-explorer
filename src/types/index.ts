import { z } from "zod/v4";
import { ArtworkSchema, ArtworksSchema, PaginationSchema } from "../schemas";

export type Artwork = z.infer<typeof ArtworkSchema>;

export type Artworks = z.infer<typeof ArtworksSchema>;

export type PaginationType = z.infer<typeof PaginationSchema>;
