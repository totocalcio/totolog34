import { Link } from 'gatsby'
import * as React from 'react'
import MuiPagination from '@mui/material/Pagination'
import MuiPaginationItem from '@mui/material/PaginationItem'

type Props = {
  pageSum: number
  currentPage: number
}

export const Pagination: React.FC<Props> = ({ currentPage, pageSum }) => {
  return (
    <MuiPagination
      count={pageSum}
      page={currentPage}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: '24px',
      }}
      renderItem={(item) => (
        <MuiPaginationItem
          component={Link}
          to={`${item.page === 1 ? '/' : `/posts/${item.page}`}`}
          {...item}
        />
      )}
    />
  )
}
