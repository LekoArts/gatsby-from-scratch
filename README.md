# Gatsby - Step by Step

> Example project for a demo/talk

This project shows step by step how to start with a barebones project. First you'll use normal imports and the `createPages` API to create pages, in the end you'll use GraphQL to get your data. This project should illustrate why Gatsby uses GraphQL.

## Steps

1. [Initial commit](https://github.com/LekoArts/gatsby-from-scratch/tree/4031450230c83341ab28a21a47331a29b76a93cb) - A gatsby-starter-hello-world project
    - You can get started with the `gatsby-cli` and `gatsby new project-name https://github.com/gatsbyjs/gatsby-starter-hello-world`
2. [Add additional page-2](https://github.com/LekoArts/gatsby-from-scratch/commit/186325ab7d2a4b3c7c956c123a249eb20bddf38c)
    - Gatsby has routing built-in, so if you create files at `src/pages` those get turned into pages, with the filename as the `/route`
    - In order to have a SPA "feel" you should use [Gatsby's link component](https://www.gatsbyjs.org/docs/gatsby-link/) for links to other internal pages. You'll get prefetching & lazy-loading for free 💪
3. [Use local data](https://github.com/LekoArts/gatsby-from-scratch/commit/4d681ba6cbaae4ed7f971713a06acfd14ca346e3)
    - Gatsby doesn't require you to use GraphQL but certainly encourages it
4. [Use createPages API to create pages from that local data](https://github.com/LekoArts/gatsby-from-scratch/commit/1438886b07d844fe1c788f9cd11f7908be74617d)
    - Gatsby exposes several [APIs](https://www.gatsbyjs.org/docs/api-reference/), e.g. `createPages` with which you can create pages (duh) programmatically. As `gatsby-node.js` is "just" Javascript/Node code you can loop over the local data and create a page for each entry
    - The `context` is made available as a prop (`pageContext`) and in GraphQL queries (you'll see later) in the template you specified
5. [Use the passed context from createPage in the template](https://github.com/LekoArts/gatsby-from-scratch/commit/49880490cbc0f5d0ecb2724e1099b5ba73b2a6c2)
    - As mentioned in the previous commit, you can use the passed data on the template. But using it with GraphQL is _IMO_ way nicer 😎 (so have a look at the following commits!)
6. [Install gatsby-source-filesystem, gatsby-transformer-json and move data to .json file](https://github.com/LekoArts/gatsby-from-scratch/commit/49f6252b5bf0906bd4e3ec7cca8545b9963ebb52)
    - Gatsby has `source` plugins and `transformers`. The former enable you to _source_ from somewhere, the latter _transform_ that data into something usable. A common use-case is using `gatsby-source-filesystem` to grab markdown files and then using `gatsby-transformer-remark` to parse that markdown.
    - In this case the transformer for JSON is used and the data put into a `starWars.json` file
    - At this stage you can already visit `localhost:8000/___graphql` (GraphiQL) in your browser to see the JSON data available in GraphQL
7. [Create a list of all data entries on the src/pages/index.js](https://github.com/LekoArts/gatsby-from-scratch/commit/584d09961dd9908faec7341762f087eed30498bb)
    - After using the `GraphiQL` explorer you can copy/paste the query to your index file. The data gets passed as a prop to the React component
8. [Use GraphQL inside gatsby-node to use the data (like in step 4) for page creation](https://github.com/LekoArts/gatsby-from-scratch/commit/e1f2ce1e361bb3437caf5cbccaee3fa3ec6227bc)
    - You can also use GraphQL in `gatsby-node.js`. In step 4 local data was used to loop over. Now you use `graphql()` to get the (basically) exact same data
    - Why is that cool? You can access that data via GraphQL anywhere, no need to import the file or transform the file
    - You can also combine multiple data sources, e.g. Markdown + JSON + Headless CMS. It is all available in GraphQL, accessible in the same matter 🎉
9. [Use the passed context as a variable in the template GraphQL query](https://github.com/LekoArts/gatsby-from-scratch/commit/9c36a48a112c139a412f3b10b9ab7d7bb975df05)
    - The `context` mentioned in step 4 is now used in the GraphQL query of the template (`src/templates/film.js`). You define a GraphQL variable with `$name` and then the type after that, in this case `String!` (`!` means that it can't be null)
    - `starWarsJson` returns only one element (opposed to all elements like `allStarWarsJson`) but it needs to be filtered for the right entry -- with `(title: { eq: $title })` that is done (the passed context)
    - The result of the GraphQL query is available in the props again
10. [Final state](https://github.com/LekoArts/gatsby-from-scratch/tree/9c36a48a112c139a412f3b10b9ab7d7bb975df05)