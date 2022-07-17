import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Layout } from '../components/layout'
import { Bio } from '../components/bio'
import { Seo } from '../components/seo'

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  console.log(data)
  return (
    <Layout pageTitle="Home Page" headerTitle={data.site?.siteMetadata?.title}>
      <Seo title="All posts" />
      <Bio />
      <ul>
        {
          data.allFile.nodes.map((node)=>(
            <li key={node.name}>{node.name}</li>
          ))
        }
      </ul>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    },
    site {
      siteMetadata {
        title
      }
    }
  }
`
