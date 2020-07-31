import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

class BlogPostTemplate extends React.Component {
  render() {
    const { edges } = this.props.data.allContentfulBlogPost
    //const title = this.props.data.site
    const ftitle = this.props.data.contentfulBlogPost.title
    const body = this.props.data.contentfulBlogPost.body.body
    const prev = this.props.pageContext.prev
    const next = this.props.pageContext.next
    return (
      <div>
        <div>
          <h1>{ftitle}</h1>
          <p>{body}</p>
          <ul>
            {edges.map(({ node }) => {
              console.log(node.title)
              return (
                <li>
                  <Link to={`/blogpost/${node.slug}`}>{node.title}</Link>
                </li>
              )
            })}
          </ul>
          {console.log(edges)}
        </div>
        <div>
          {prev !== 0 ? <Link to={`/blogpost/${prev}`}>prev</Link> : ""}
          {next !== 0 ? <Link to={`/blogpost/${next}`}>next</Link> : ""}
        </div>
      </div>
    )
  }
}
export default BlogPostTemplate
export const PageQuery = graphql`
  query($title: String!) {
    contentfulBlogPost(title: { eq: $title }) {
      title
      slug
      body {
        body
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
