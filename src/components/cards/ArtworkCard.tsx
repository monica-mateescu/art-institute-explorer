import type { Artwork } from "../../types";

const ArtworkCard = ({
  artwork,
  imgUrl,
}: {
  artwork: Artwork;
  imgUrl: string;
}) => {
  const { title, artist_title, image_id } = artwork;
  return (
    <div className="card bg-base-100 w-96 shadow-lg">
      <figure className="bg-white p-3 overflow-hidden">
        <img
          src={`${imgUrl}/${image_id}/full/200,/0/default.jpg`}
          alt={title}
          className="object-contain h-full w-full"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">
          {artist_title ?? "Artist unknown"} : {title}
        </h3>
      </div>
    </div>
  );
};

export default ArtworkCard;
