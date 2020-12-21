const path = require(`path`)
const { paginate } = require(`gatsby-awesome-pagination`)
const productTemplate = path.resolve(`./src/templates/product.js`)
const archiveProductTemplate = path.resolve(`./src/templates/productArchive.js`)

const gql = require("fake-tag")

const GET_PRODUCTS = gql`
  query($limit: Int) {
    allWpProduct(limit: $limit) {
      edges {
        node {
          link
          id
        }
      }
    }
  }
`

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  //create a page for each product
  const productsQuery = await graphql(GET_PRODUCTS)

  const products = productsQuery.data.allWpProduct.edges

  products.map(product => {
    createPage({
      path: product.node.link,
      component: productTemplate,
      context: {
        id: product.node.id,
      },
    })
  })

  //create paginated product archive

  paginate({
    createPage,
    pathPrefix: "/shop",
    component: archiveProductTemplate,
    items: products,
    itemsPerPage: 10,
  })
}
