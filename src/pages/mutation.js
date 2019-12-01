import React from "react"
import { graphql } from "gatsby"

import Div from "../layouts/pageStyle"

const MutationPage = ({ data }) => {
  const {
    node: {
      title,
      longText: { longText },
    },
  } = data.allContentfulPageDetail.edges.find(
    page => page.node.slug === "mutation"
  )

  return (
    <>
      <h2>{title}</h2>
      <Div dangerouslySetInnerHTML={{ __html: longText }} />
    </>
  )
}

export default MutationPage

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
