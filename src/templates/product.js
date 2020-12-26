import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Button } from "@chakra-ui/react"

const Product = ({ data, pageContext }) => {
  const product = data.wpProduct
  console.log("product", product, pageContext)
  const {
    name,
    description,
    externalUrl,
    featured,
    galleryImages,
    id,
    image,
    link,
    nodeType,
    price,
    productCategories,
    shortDescription,
    sku,
    slug,
    attributes,
    averageRating,
  } = product

  return (
    <Layout>
      <h1>{name}</h1>
      <Button>{price}</Button>
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
