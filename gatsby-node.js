// const { path } = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
// console.log('path, ', path)
const EventTemplate = require.resolve(`./src/templates/eventTemplate.js`) // path.resolve([`src/templates/eventTemplate.js`])

// Creates file paths for events based off of markdown files
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark" && node.frontmatter.type === "event") {
    const slug = createFilePath({ node, getNode, basePath: 'courses'})
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

// Creates pages for course events
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "event"}}}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }`)

  const events = result.data.allMarkdownRemark.edges
  events.forEach(({ node: event }) => {
    createPage({
      path: `events${event.fields.slug}`,
      component: EventTemplate,
      context: {
        slug: event.fields.slug
      }
    })
  })
}

// Creates file paths for blog posts based off of markdown files
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === "MarkdownRemark" && node.frontmatter.type === "post") {
//     const slug = createFilePath({ node, getNode, basePath: 'posts'})
//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug
//     })
//   }
// }
