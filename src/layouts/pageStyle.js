import styled from "styled-components"

const Div = styled.div`
  a {
    text-decoration: none;
  }

  .endpoint-url {
    color: white;
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

    @media ${props => props.theme.lg} {
      width: 35%;
    }

    @media ${props => props.theme.md} {
      width: 50%;
    }

    @media ${props => props.theme.smLsc} {
      width: 40%;
      height: 3rem;
      margin-top: -1rem;
    }

    @media ${props => props.theme.sm} {
      width: 60%;
      height: 3rem;
      padding: 0.3rem 0.8rem;
      margin-top: -0.7rem;
    }
  }

  ul {
    padding-left: 20px;
    li {
      .strong {
        font-weight: bold;
      }

      .note {
        font-style: italic;
        color: ${props => props.theme.grey};
      }
    }
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

    @media ${props => props.theme.lg} {
      margin-top: -1rem;
    }

    @media ${props => props.theme.md} {
      margin-top: -1rem;
      margin-bottom: 2rem;
    }

    @media ${props => props.theme.sm} {
      margin-top: -0.8rem;
      margin-bottom: 2rem;
    }

    pre {
      font-size: 1.4rem;

      @media ${props => props.theme.md} {
        font-size: 1.2rem;
      }

      @media ${props => props.theme.smLsc} {
        font-size: 0.8rem;
      }

      @media ${props => props.theme.sm} {
        font-size: 0.5rem;
      }
    }
  }
  p {
    .format {
      font-style: italic;
      color: ${props => props.theme.grey};
    }
  }

  .image-title {
    font-weight: bold;
  }

  .image {
    margin-top: -2rem;
  }
`

export default Div
