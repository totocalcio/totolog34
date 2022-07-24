import React from 'react'
import { Link } from 'gatsby'

const Tags = (tags: string[]) => (
  <div className="tags">
    {(tags || []).map((tag) => (
      <Link to={`/tags/${tag}/`}>
        <span className="post-tag">{tag}</span>
      </Link>
    ))}
  </div>
)

export default Tags
