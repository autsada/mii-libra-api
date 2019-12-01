import React from "react"
import Image from "gatsby-image"
import { graphql } from "gatsby"

import Div from "../layouts/pageStyle"

const PlaygroundPage = ({ data }) => {
  const {
    node: {
      title,
      longText: { longText },
      picture,
    },
  } = data.allContentfulPageDetail.edges.find(
    page => page.node.slug === "playground"
  )

  return (
    <>
      <h2>{title}</h2>
      <Div>
        <div dangerouslySetInnerHTML={{ __html: longText }} />
        <>
          {picture.map(p => (
            <div key={p.title}>
              <p className="image-title">{p.title}</p>
              <div className="image">
                <Image
                  alt={p.title}
                  fluid={p.fluid}
                  style={{ margin: "3rem 0" }}
                />
              </div>
            </div>
          ))}
        </>
        <hr />
      </Div>
    </>
  )
}

export default PlaygroundPage

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
          picture {
            fluid {
              ...GatsbyContentfulFluid
            }
            title
          }
        }
      }
    }
  }
`
