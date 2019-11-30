import React from "react"
import { graphql } from "gatsby"

import Div from "../layouts/pageStyle"

const IndexPage = ({ data }) => {
  const {
    node: {
      title,
      longText: { longText },
    },
  } = data.allContentfulPageDetail.edges.find(
    page => page.node.slug === "introduction"
  )

  return (
    <>
      <h2>{title}</h2>
      <Div dangerouslySetInnerHTML={{ __html: longText }} />
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allContentfulPageDetail {
      edges {
        node {
          title
          slug
          longText {
            longText
          }
        }
      }
    }
  }
`
