import React from "react"
import kebabCase from "lodash.kebabcase"
import { Link, graphql } from "gatsby"

export default ({ data }) => (
  <div>
    <h1>Film Overview</h1>
    <ul>
      {data.allStarWarsJson.edges.map(film => (
        <li key={film.node.title}>
          <Link to={kebabCase(film.node.title)}>{film.node.title}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export const query = graphql`
  query {
    allStarWarsJson {
      edges {
        node {
          title
        }
      }
    }
  }
`
