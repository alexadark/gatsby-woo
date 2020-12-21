import { graphql } from "gatsby"

export const fragments = graphql`
  fragment productFragment on WpProduct {
    id
    nodeType
    link
    slug
    sku
    featured
    description
    shortDescription
    averageRating
    image {
      ...productImageFragment
    }
    attributes {
      nodes {
        options
        variation
      }
    }
    galleryImages {
      nodes {
        ...productImageFragment
      }
    }
    productCategories {
      nodes {
        id
        name
      }
    }
    ... on WpSimpleProduct {
      id
      name
      price
    }
    ... on WpVariableProduct {
      id
      name
      price
    }
    ... on WpExternalProduct {
      id
      name
      price
      externalUrl
    }
    ... on WpGroupProduct {
      id
      name
      products {
        nodes {
          ... on WpSimpleProduct {
            id
            name
            price
          }
        }
      }
    }
  }

  fragment galleryImageFragment on WpMediaItem {
    altText
    sourceUrl
    localFile {
      childImageSharp {
        fluid(maxWidth: 400, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }

  fragment productImageFragment on WpMediaItem {
    altText
    sourceUrl
    localFile {
      childImageSharp {
        fluid(maxWidth: 700, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }

  fragment seoFragment on WpSEO {
    canonical
    title
    metaDesc
    focuskw
    metaRobotsNoindex
    metaRobotsNofollow
    opengraphAuthor
    opengraphDescription
    opengraphTitle
    opengraphDescription
    opengraphImage {
      sourceUrl
    }
    opengraphUrl
    opengraphSiteName
    opengraphPublishedTime
    opengraphModifiedTime
    twitterTitle
    twitterDescription
    twitterImage {
      sourceUrl
    }
  }
`
