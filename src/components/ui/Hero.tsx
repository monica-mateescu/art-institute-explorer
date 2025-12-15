import heroImage from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <header
      className="hero min-h-150"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-md font-bold">
            Discover, admire, and save your favorite artworks from the museum’s
            collection.
          </h1>

          <a href="#featured-artworks" className="btn btn-primary">
            See Artworks
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
