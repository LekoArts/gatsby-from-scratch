const kebabCase = require("lodash.kebabcase")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const filmTemplate = require.resolve("./src/templates/film.js")

  const result = await graphql(`
    {
      allStarWarsJson {
        edges {
          node {
            title
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.error(result.errors)
  }

  result.data.allStarWarsJson.edges.forEach(film => {
    createPage({
      path: kebabCase(film.node.title),
      component: filmTemplate,
      context: {
        title: film.node.title,
      },
    })
  })
}
