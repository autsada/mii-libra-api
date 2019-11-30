import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const Div = styled.div`
  a {
    text-decoration: none;
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

  .intro {
    span {
      font-style: italic;
      text-decoration: underline;
    }
  }

  .argument {
    margin-top: -1.2rem;

    .list {
      margin: 0;

      .required {
        font-style: italic;
        color: red;
      }

      .format {
        font-style: italic;
        color: ${props => props.theme.grey};
      }
    }
  }

  .response {
    margin-top: -1.2rem;

    .list {
      margin: 0;

      .format {
        font-style: italic;
        color: ${props => props.theme.grey};
      }
    }
  }

  .remark {
    font-style: italic;
    color: ${props => props.theme.grey};
  }

  .api-code {
    color: ${props => props.theme.playgroundFont};
    background: ${props => props.theme.playgroundReq};
    border-radius: 4px;
    padding-top: 0.1rem;
    margin-top: -1.5rem;
    margin-bottom: 4rem;

    pre {
      font-size: 1.4rem;
    }
  }
`

const QueryPage = ({ data }) => {
  const {
    node: {
      title,
      longText: { longText },
    },
  } = data.allContentfulPageDetail.edges.find(
    page => page.node.slug === "subscription"
  )

  return (
    <>
      <h2>{title}</h2>
      <Div dangerouslySetInnerHTML={{ __html: longText }} />
    </>
  )
}

export default QueryPage

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
