import { Link } from "gatsby"
import React from "react"
import Moment from "moment"

export default class Calender extends React.Component {
  render() {
    const { edges } = this.props.data.allContentfulBlogPost
    edges.forEach(element => {
      const { node } = element
      const date = new Date(Date.parse(element.updatedAt))
    })
    return <div>{"test"}</div>
  }
}

export const query = graphql`
  query {
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
