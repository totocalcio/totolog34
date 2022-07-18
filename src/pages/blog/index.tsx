import * as React from 'react';
import { Link, graphql,PageProps } from 'gatsby';
import {Layout} from '../../components/layout';

const BlogPage = ({ data }:PageProps<Queries.BlogPageQuery>) => {
  return (
    <Layout pageTitle="Blog記事リスト" headerTitle="blog">
      {
        data.allFile.nodes.map(node => (
          <div key={node.id}>
            <h3>
              <Link to={`${node.publicURL}`}>
                {node.name}
              </Link>
            </h3>
          </div>
        ))
      }
    </Layout>
  )
};

export const query = graphql`
  query BlogPage {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        id
        name
        publicURL
      }
    },
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default BlogPage;
