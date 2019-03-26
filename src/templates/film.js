import React from "react"

const Film = ({ pageContext: { title } }) => {
  return (
    <React.Fragment>
      <h1>{title}</h1>
      {/* <i>By {filmData.director}</i>
      <p>Released on: {filmData.releaseDate}</p>*/}
    </React.Fragment>
  )
}

export default Film
