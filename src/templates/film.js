import React from "react"
import { graphql } from "gatsby"

const Film = ({ data: { starWarsJson: film } }) => {
  return (
    <React.Fragment>
      <h1>{film.title}</h1>
      <i>By {film.director}</i>
      <p>Released on: {film.releaseDate}</p>
    </React.Fragment>
  )
}

export default Film

export const query = graphql`
  query FilmTemplate($title: String!) {
    starWarsJson(title: { eq: $title }) {
      title
      director
      releaseDate
    }
  }
`
