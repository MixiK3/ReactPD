import styles from "./Pagination.module.css";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav>
      <ul className={styles.pagination}>
        {pages.map((page) => (
          <li
            key={page}
            className={`${styles.pageItem} ${currentPage === page ? `${styles.active}` : ""}`}
            onClick={() => onPageChange(page)}
          >
            <span className={styles.pageLink}>{page}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
