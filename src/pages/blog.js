import React from 'react'
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function blog( {data} ) {
    return (
        <Layout>
            <div>
                <h1>Latest Posts</h1>
                {data.allMarkdownRemark.edges.map(post => (
                    <div key={post.node.id} >
                        <img src={post.node.frontmatter.image} alt="" />
                        <h3>{post.node.frontmatter.title}</h3>
                        <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                        <br />
                        <br />
                        <Link to={post.node.frontmatter.path}>Read More</Link>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            edges {
            node {
                id
                frontmatter {
                path
                title
                date
                author
                image
                }
            }
            }
        }
    }
`
