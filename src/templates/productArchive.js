import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Box, Flex, chakra, Button, Link as ChakraLink } from "@chakra-ui/react"

const ProductArchive = ({ data, pageContext }) => {
  console.log("data", data, pageContext)
  const products = data.allWpProduct.nodes

  return (
    <Layout>
      <h1>Products</h1>
      <Flex className="flex-wrap">
        {products.map(product => {
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

          const url = externalUrl ? externalUrl : link
          return (
            <Box minWidth="300px" className="flex-initial p-5">
              <ChakraLink
                as={externalUrl ? "" : Link}
                to={externalUrl ? "" : link}
                href={externalUrl ? externalUrl : ""}
                isExternal={externalUrl}
              >
                <Box className="p-5 bg-gray-50">
                  <h3 className="text-sm text-center">{name}</h3>
                  <Flex justifyContent="center" flexDirection="column">
                    <chakra.img src={image.sourceUrl} maxWidth="200px" />
                  </Flex>
                  <div
                    className="text-xs text-center"
                    dangerouslySetInnerHTML={{ __html: shortDescription }}
                  />
                  <Button colorScheme="blue" size="sm">
                    {price}
                  </Button>
                </Box>
              </ChakraLink>
            </Box>
          )
        })}
      </Flex>
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
