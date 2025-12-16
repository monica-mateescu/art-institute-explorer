import { useState } from "react";
import { getFromStorage, removeFromStorage } from "../utils/storage";
import { ArtworksList } from "../components";
import type { GalleryType } from "../types";

const Gallery = () => {
  const [artworks, setArtworks] = useState<GalleryType[]>(() =>
    getFromStorage()
  );
  const handleRemove = (id: number) => {
    removeFromStorage(id);
    setArtworks((prev) => prev.filter((artwork) => artwork.id !== id));
  };

  return (
    <main className="p-15 mx-auto">
      <section className="mb-10">
        <h1 className="text-xl text-shadow-sm mb-5">My Gallery</h1>
        {artworks.length === 0 ? (
          <p className="mb-5 text-md font-bold">
            You haven’t saved any artworks yet. Start exploring to create your
            personal collection!
          </p>
        ) : (
          <ArtworksList artworks={artworks} imgUrl="" onRemove={handleRemove} />
        )}
      </section>
    </main>
  );
};

export default Gallery;
