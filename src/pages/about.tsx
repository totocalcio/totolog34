import * as React from 'react'
import { PageProps } from 'gatsby'
import { Layout } from '../components/layout'

const AboutPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  return (
    <Layout pageTitle="About Me" headerTitle="about">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  )
}

export default AboutPage
