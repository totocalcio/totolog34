import { Link } from 'gatsby'
import * as React from 'react'
import { Layout } from '../components/layout'
import { Seo } from '../components/seo'

const NotFound: React.FC = () => {
  return (
    <Layout>
      <Seo title="404: Not Found" />
      <h1>404</h1>
      <p>ページが見つかりませんでした</p>
      <Link to="/">TOPへ戻る</Link>
    </Layout>
  )
}
export default NotFound
