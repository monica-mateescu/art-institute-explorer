import { z } from "zod/v4";
import { ArtworksSchema } from "../schemas";
import type { Artworks } from "../types";
import type { LoaderFunctionArgs } from "react-router";

const API_URL = import.meta.env.VITE_API_URL;

export const getArtworks = async ({
  request,
}: LoaderFunctionArgs): Promise<Artworks> => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const fields =
    url.searchParams.get("fields") ?? "id,title,artist_title,image_id";
  const page = url.searchParams.get("page") || "1";
  const limit = url.searchParams.get("limit") || "16";

  const endpoint = q ? "/artworks/search" : "/artworks";
  const params = new URLSearchParams({
    page,
    limit,
    fields,
  });

  if (q) {
    params.set("q", q.trim());
  }

  const res = await fetch(`${API_URL}${endpoint}?${params}`);

  const resData = await res.json();

  const { data, error, success } = ArtworksSchema.safeParse(resData);

  if (!success) throw new Error(z.prettifyError(error));

  return data;
};
