import { Link } from "gatsby"
import React from "react"
import Moment from "moment"

export default class Calender extends React.Component {
  render() {}
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
