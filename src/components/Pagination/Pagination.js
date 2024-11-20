import "./Pagination.css";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? "active" : ""}`}
            onClick={() => onPageChange(page)}
          >
            <span className="page-link">{page}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
