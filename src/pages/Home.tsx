import { useLoaderData, Form } from "react-router";

import { ArtworksList } from "../components";
import type { Artworks } from "../types";

const Home = () => {
  const initialData = useLoaderData<Artworks>();
  const artworks = initialData.data;
  const imgUrl = initialData.config.iiif_url;
  return (
    <main className="p-15 mx-auto">
      <section className="mb-10">
        <h1 className="text-xl text-shadow-sm mb-5">Artworks</h1>
        <p className="mb-5 text-md font-bold">
          Discover, admire, and save your favorite artworks from the museum’s
          collection.
        </p>
        <Form method="get" className="w-full flex gap-1 justify-between">
          <input
            type="text"
            name="q"
            placeholder="Search artworks"
            className="input w-full"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </Form>
      </section>
      <section>
        <ArtworksList artworks={artworks} imgUrl={imgUrl} />
      </section>
    </main>
  );
};

export default Home;
