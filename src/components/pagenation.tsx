import { Link } from 'gatsby'
import * as React from 'react'
import * as styles from './pagination.module.css'

type Props = {
  pageSum: number
  currentPage: number
}

export const Pagination: React.FC<Props> = ({ currentPage, pageSum }) => {
  return (
    <ul className={styles.wrapper}>
      {new Array(pageSum).fill(0).map((_, idx) => {
        return (
          <Link to={idx === 0 ? `/` : `/posts/${idx + 1}`} key={idx}>
            <li
              className={
                idx + 1 === currentPage
                  ? `${styles.item} ${styles.selected}`
                  : styles.item
              }
            >
              {idx + 1}
            </li>
          </Link>
        )
      })}
    </ul>
  )
}
