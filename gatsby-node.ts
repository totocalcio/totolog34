import path from "path";
import { GatsbyNode, Reporter } from 'gatsby'
import { getTagPath } from './src/script/common'

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
  reporter
}) => {
  const { createPage } = actions;
  await pagination(createPage, graphql, reporter);
  await tagsPage(createPage, graphql, reporter);
};

const pagination = async (
  createPage: Parameters<
    NonNullable<GatsbyNode["createPages"]>
  >["0"]["actions"]["createPage"],
  graphql: Parameters<NonNullable<GatsbyNode["createPages"]>>["0"]["graphql"],
  reporter: Reporter
) => {
  const result =
    await graphql<Queries.PaginationQuery>(`
      query Pagination {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          limit: 1000
        ) {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `);

  // handle errors
  if (!result.data || result.errors) {
    console.log(result.errors)
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allMarkdownRemark.nodes;

  if (posts === undefined) {
    throw new Error("pagination 用のデータが見つかりませんでした。");
  }

  const postsPerPage = 12;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/posts/${i + 1}`,
      component: path.resolve("./src/templates/index-page.tsx"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};

const tagsPage = async (
  createPage: Parameters<
    NonNullable<GatsbyNode["createPages"]>
  >["0"]["actions"]["createPage"],
  graphql: Parameters<NonNullable<GatsbyNode["createPages"]>>["0"]["graphql"],
  reporter: Reporter
) => {
  const tagTemplate = path.resolve('src/pages/tags.tsx')
  const result = await graphql<Queries.AllTagsQuery>(`
  query AllTags{
    postsRemark: allMarkdownRemark(sort: {frontmatter: {date: ASC}}, limit: 2000) {
      nodes {
        id
        frontmatter {
          tags
        }
      }
    }
    tagsGroup: allMarkdownRemark(limit: 2000) {
      group(field: {frontmatter: {tags: SELECT}}) {
        fieldValue
      }
    }
  }`)

  // handle errors
  if (result.errors || !result.data) {
    console.log(result.errors)
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Extract tag data from query
  const tags = result.data.tagsGroup.group

  // Make tag pages
  if (tags.length > 0) {
    tags.forEach((tag) => {
      if(tag.fieldValue == null) {
        throw new Error("tag should be there");
      }
      createPage({
        path: `/tags/${getTagPath(tag.fieldValue)}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      })
    })
  }
}
