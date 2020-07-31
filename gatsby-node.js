const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      query {
        allContentfulBlogPost {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }
      console.log("-----------------------XX")
      let counter = 0
      result.data.allContentfulBlogPost.edges.forEach(item => {
        const node = item.node
        const pathresolve = path.resolve("./src/templates/blogpost.js")
        console.log(node.slug)
        const prev =
          typeof result.data.allContentfulBlogPost.edges[counter - 1] ===
          "undefined"
            ? 0
            : result.data.allContentfulBlogPost.edges[counter - 1].node.slug
        const next =
          typeof result.data.allContentfulBlogPost.edges[counter + 1] ===
          "undefined"
            ? 0
            : result.data.allContentfulBlogPost.edges[counter + 1].node.slug
        createPage({
          path: `/blogpost/${node.slug}`,
          component: pathresolve,
          context: {
            title: node.title,
            prev: prev,
            next: next,
          },
        })
        counter++
      })
      console.log("create page")
      resolve()
    })
  })
}
