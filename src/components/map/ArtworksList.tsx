import type { Artwork } from "../../types";
import ArtworkCard from "../cards/ArtworkCard";

const ArtworksList = ({
  artworks,
  imgUrl,
}: {
  artworks: Artwork[];
  imgUrl: string;
}) => {
  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {artworks?.map((artwork) => (
        <ArtworkCard key={artwork.id} artwork={artwork} imgUrl={imgUrl} />
      ))}
    </div>
  );
};

export default ArtworksList;
