import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const ProductArchive = ({ data, pageContext }) => {
  console.log("data", data, pageContext)

  return (
    <Layout>
      <h1>Products</h1>
    </Layout>
  )
}

export default ProductArchive

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allWpProduct(limit: $limit, skip: $skip) {
      nodes {
        ...productFragment
      }
    }
  }
`
