import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type Props = {
  description?: string
  lang?: string
  meta?: []
  title: string
}
type Meta = {
  property?: string
  name?: string
  content: string
}

export const Seo: React.FC<Props> = ({
  description = '',
  lang = 'ja',
  meta = [],
  title,
}: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata.title
  let typeSafeMeta: Array<Meta>
  if (meta instanceof Array) {
    typeSafeMeta = meta
  } else {
    typeSafeMeta = []
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || defaultTitle}
      titleTemplate={title ? `${title} | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        ...typeSafeMeta,
      ]}
      link={[
        {
          rel: `preload`,
          href: `../font/totolog34_JKGL.woff2`,
          as: `font`,
          type: `font/woff2`,
        },
      ]}
    />
  )
}
