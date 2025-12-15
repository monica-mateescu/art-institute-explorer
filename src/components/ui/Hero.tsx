const Hero = () => {
  return (
    <header
      className="hero min-h-150"
      style={{
        backgroundImage: "url(./src/assets/hero.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-xl font-bold">
            Welcome to the Art Institute Explorer
          </h1>

          <button className="btn btn-primary">See Featured Artworks</button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
