import { useState } from "react";
import type { Artwork, GalleryType } from "../../types";
import { existsInStorage, saveToStorage } from "../../utils/storage";

const ArtworkCard = ({
  artwork,
  imgUrl,
  onRemove,
}: {
  artwork: Artwork | GalleryType;
  imgUrl: string;
  onRemove?: (id: number) => void;
}) => {
  const [exists, setExists] = useState(() => existsInStorage(artwork.id));
  const { id, title, artist_title } = artwork;
  const imageUrl =
    "image_url" in artwork && artwork.image_url
      ? artwork.image_url
      : "image_id" in artwork && artwork.image_id
      ? `${imgUrl}/${artwork?.image_id}/full/200,/0/default.jpg`
      : "";

  const handleClick = () => {
    if (exists) {
      onRemove?.(id);
      setExists(false);
    } else {
      saveToStorage({
        id: id,
        title: title,
        artist_title: artist_title,
        image_url: imageUrl,
      });
      setExists(true);
    }
  };

  return (
    <div className="card w-96 mb-4 shadow-sm">
      <figure className="aspect-4/3">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="object-center h-full w-full"
          />
        )}
      </figure>

      <div className="card-body">
        <h2 className="card-title text-sm">{title}</h2>
        <h3 className="text-neutral-400">{artist_title ?? "Artist unknown"}</h3>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-primary" onClick={handleClick}>
            {exists ? "Remove from gallery" : "Save to gallery"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;
