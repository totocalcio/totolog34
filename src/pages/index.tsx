import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Layout } from '../components/layout'
import { Bio } from '../components/bio'

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  return (
    <Layout pageTitle="Home Page" headerTitle={data.site?.siteMetadata?.title}>
      <Bio />
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`
