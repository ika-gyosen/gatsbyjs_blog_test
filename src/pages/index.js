import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { graphql } from "gatsby"

class IndexPage extends React.Component {
  render() {
    const { edges } = this.props.data.allContentfulBlogPost
    return (
      <div>
        <h1>aaa</h1>
        {edges.map(({ node }) => {
          return (
            <li>
              <b>
                <Link to={`/blogpost/${node.slug}`}>{node.title}</Link>
              </b>
              {"  "}
              <ShowDate datevalue={node.updatedAt} />
            </li>
          )
        })}
        <pre>{console.log(edges)}</pre>
      </div>
    )
  }
}

function ShowDate(props) {
  const dateTime = new Date(Date.parse(props.datevalue))
  const weekTable = ["月", "火", "水", "木", "金", "土", "日"]
  return (
    <span>
      {dateTime.getFullYear()}年{dateTime.getMonth()}月{dateTime.getDate()}日
      {" ("}
      {weekTable[dateTime.getDay()]}
      {") "} {dateTime.getHours()}:{dateTime.getMinutes()}:
      {dateTime.getSeconds()}
    </span>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulAsset {
      edges {
        node {
          title
        }
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          title
          updatedAt
          slug
        }
      }
    }
  }
`

export default IndexPage
