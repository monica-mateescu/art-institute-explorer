import { Link } from "react-router";
const NotFound = () => {
  return (
    <main className="p-15 mx-auto">
      <section className="mb-10">
        <h1 className="text-xl text-shadow-sm mb-5">Page Not Found</h1>
        <p className="mb-5 text-md font-bold">
          Oops… looks like this page doesn’t exist.
          <Link to="/" className="link link-secondary font-semibold">
            Go Home
          </Link>
        </p>
      </section>
    </main>
  );
};

export default NotFound;
