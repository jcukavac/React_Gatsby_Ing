/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions

    return graphql(`
    {
        allMarkdownRemark {
            edges {
            node {
                html
                id
                frontmatter {
                path
                title
                date
                author
                }
                fields {
                    slug
                }
            }
            }
        }
    }
    `).then(response => {
        if(response.errors) {
            return Promise.reject(response.errors)
        }

        response.data.allMarkdownRemark.edges.forEach(({node}) => {
            const { id } = node;
            const postTemplate = path.resolve("src/templates/blog-post.js");
            const pagePath = node.frontmatter.path || node.fields.slug;

            createPage({
              path: pagePath,
              component: postTemplate,
              context: {
                  id
              }
            })
        })
    })
}

// const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
