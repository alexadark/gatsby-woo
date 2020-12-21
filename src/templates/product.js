import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Product = ({ data, pageContext }) => {
  const product = data.wpProduct
  console.log("product", product, pageContext)
  return (
    <Layout>
      <h1>Product</h1>
    </Layout>
  )
}

export default Product

export const PageQuery = graphql`
  query($id: String!) {
    wpProduct(id: { eq: $id }) {
      ...productFragment
    }
  }
`
