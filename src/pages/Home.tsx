import { useLoaderData } from "react-router";
import { Hero, ArtworksList } from "../components";
import type { Artworks } from "../types";

const Home = () => {
  const initialData = useLoaderData<Artworks>();
  const artworks = initialData.data;
  const imgUrl = initialData.config.iiif_url;
  return (
    <>
      <Hero />
      <main className="p-15 mx-auto">
        <ArtworksList artworks={artworks} imgUrl={imgUrl} />
      </main>
    </>
  );
};

export default Home;
