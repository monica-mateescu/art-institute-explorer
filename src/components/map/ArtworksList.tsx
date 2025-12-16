import type { Artwork, GalleryType } from "../../types";
import ArtworkCard from "../cards/ArtworkCard";

type ArtworksListProps = {
  artworks: Artwork[] | GalleryType[];
  imgUrl: string;
  onRemove?: (id: number) => void;
};

const ArtworksList = ({ artworks, imgUrl, onRemove }: ArtworksListProps) => {
  return (
    <div className="grid gap-2 xs:grid-cols-2 xl:grid-cols-4">
      {artworks?.map((artwork) => (
        <ArtworkCard
          key={artwork.id}
          artwork={artwork}
          imgUrl={imgUrl}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default ArtworksList;
