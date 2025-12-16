import { Link, useSearchParams } from "react-router";
import type { PaginationType } from "../../types";

const Pagination = ({ pagination }: { pagination: PaginationType }) => {
  const currentPage = pagination.current_page;
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage + 1;

  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") ?? null;

  const prev = q ? `?q=${q}&page=${prevPage}` : `?page=${prevPage}`;
  const next = q ? `?q=${q}&page=${nextPage}` : `?page=${nextPage}`;

  return (
    <div className="join flex flex-row justify-center mt-10">
      {prevPage && (
        <Link to={prev} className="join-item btn">
          «
        </Link>
      )}

      <button className="join-item btn">Page {currentPage}</button>
      {nextPage && (
        <Link to={next} className="join-item btn">
          »
        </Link>
      )}
    </div>
  );
};

export default Pagination;
