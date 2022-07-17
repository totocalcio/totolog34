import * as React from 'react'
import { Layout } from '../components/layout'
import { Seo } from '../components/seo'

const NotFoundPage: React.FC = () => {
  return (
    <Layout pageTitle="404" headerTitle="404">
      <Seo title="404: Not Found" />
    </Layout>
  )
}
export default NotFoundPage
