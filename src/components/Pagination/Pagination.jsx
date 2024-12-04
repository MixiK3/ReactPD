import styles from './Pagination.module.css'
import useSound from 'use-sound'
import soundClick from '../../assets/mp3/soundClick.mp3'
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)
  const [play] = useSound(soundClick)
  return (
    <nav>
      <ul className={styles.pagination}>
        {pages.map((page) => (
          <li
            key={page}
            className={`${styles.pageItem} ${currentPage === page ? `${styles.active}` : ''}`}
            onClick={() => {
              onPageChange(page)
              play()
            }}
          >
            <span className={styles.pageLink}>{page}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
