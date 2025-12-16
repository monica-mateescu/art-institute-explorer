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
    <div className="card bg-base-200 w-96 shadow-lg">
      <figure className="bg-base-300 aspect-4/3">
        {image_id && (
          <img
            src={`${imgUrl}/${image_id}/full/200,/0/default.jpg`}
            alt={title}
            className="object-cover h-full w-full"
          />
        )}
      </figure>

      <div className="card-body">
        <h2 className="card-title text-sm">
          {artist_title ?? "Artist unknown"} : {title}
        </h2>
      </div>
    </div>
  );
};

export default ArtworkCard;
