import { z } from "zod/v4";
import { ArtworkSchema, ArtworksSchema } from "../schemas";

export type Artwork = z.infer<typeof ArtworkSchema>;

export type Artworks = z.infer<typeof ArtworksSchema>;
