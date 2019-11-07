/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions

    const postTemplate = path.resolve('src/templates/blog-post.js');

    return graphql(`
    {
        allMarkdownRemark {
            edges {
            node {
                html
                id
                frontmatter {
                title
                date
                author
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
            createPage({
                // path: node.frontmatter.path,
                component: postTemplate
            })
        })
    })
}