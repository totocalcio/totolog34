import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type Props = {
  description?: string
  lang?: string
  meta?: []
  title: string
  image?: string
  url?: string
}
type Meta = {
  property?: string
  name?: string
  content: string
}

type Link = {
  rel: string;
  href: any;
  sizes?: string | undefined;
  as?: string | undefined;
  type?: string |undefined;
}[]

export const Seo: React.FC<Props> = ({
  description = '',
  lang = 'ja',
  meta = [],
  title,
  image,
  url
}: Props) => {
  const { site, icon, allFile, defaultImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              summary
            }
            social {
              twitter
            }
            siteUrl
          }
        }
        icon: file(relativePath: { eq: "icon.png" }) {
          publicURL
        }
        defaultImage: file(relativePath: { eq: "default.png" }) {
          publicURL
        }
        allFile(
          filter: { sourceInstanceName: { eq: "font" }, name: { eq: "JKGM" } }
        ) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata.title
  const metaTitle = title || defaultTitle
  const metaImage = `${site.siteMetadata.siteUrl}${
    image || defaultImage.publicURL
  }`
  const fontJKGM = allFile.edges[0].node.publicURL
  let typeSafeMeta: Array<Meta>
  if (meta instanceof Array) {
    typeSafeMeta = meta
  } else {
    typeSafeMeta = []
  }

  const metaUrl = !url || url?.length > 0 ? url : ''
  const link:Link = [
    {
      rel: `icon`,
      href: icon.publicURL,
      sizes: `32x32`,
    },
    {
      rel: `preload`,
      href: fontJKGM,
      as: `font`,
      type: `font/woff2`,
    },
  ];
  if(metaUrl && metaUrl?.length > 0) {
    link.push({
      rel: `canonical`,
      href: metaUrl
    })
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={title ? `${title} | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: metaImage,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `article`,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          name: `twitter:site`,
          content: `@${site.siteMetadata?.author?.summary}` || ``,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        // {
        //   name: `twitter:creator`,
        //   content: site.siteMetadata?.social?.twitter || ``,
        // },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
        ...typeSafeMeta,
      ]}
      link={ link }
    />
  )
}
