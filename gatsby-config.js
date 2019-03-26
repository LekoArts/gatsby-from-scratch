module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
        name: "starWars",
      },
    },
    "gatsby-transformer-json",
  ],
}
