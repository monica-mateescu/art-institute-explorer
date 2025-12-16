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
    <div className="card w-96 shadow-lg">
      <figure className="aspect-4/3">
        {image_id && (
          <img
            src={`${imgUrl}/${image_id}/full/200,/0/default.jpg`}
            alt={title}
            className="object-center h-full w-full"
          />
        )}
      </figure>

      <div className="card-body">
        <h2 className="card-title text-sm">{title}</h2>
        <h3 className="text-neutral-400">{artist_title ?? "Artist unknown"}</h3>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-primary">
            Save to gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;
