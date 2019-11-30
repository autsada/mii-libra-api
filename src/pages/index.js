import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const Div = styled.div`
  a {
    text-decoration: none;
  }

  code {
    width: 40%;
    height: 100%;
    color: white;
    background: ${props => props.theme.libraBlue};
    border-radius: 4px;
    padding: 0.8rem 1rem;
  }

  .endpoint-title {
    font-weight: bold;
  }

  .endpoint {
    width: 40%;
    height: 4rem;
    color: white;
    display: flex;
    align-items: center;
    background: ${props => props.theme.libraBlue};
    border-radius: 4px;
    padding: 0.8rem 1rem;
    margin-top: -1.5rem;
  }

  ul {
    li {
      .strong {
        font-weight: bold;
      }

      .note {
        font-style: italic;
      }
    }
  }
`

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
