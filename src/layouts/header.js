import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderStyles = styled.header`
  height: 100px;
  width: 100%;
  color: ${props => props.theme.libraBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.libraBlue};

  @media ${props => props.theme.sm} {
    height: 85px;
  }
`

const Div = styled.div`
  width: 80%;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  @media ${props => props.theme.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 3rem;
  color: white;
  width: 35%;

  @media ${props => props.theme.md} {
    width: 30%;
  }

  @media ${props => props.theme.sm} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
  }

  .logo {
    width: 25%;
    transition: all ${props => props.theme.transitionDuration} ease-out;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`

const Nav = styled.div`
  display: flex;
  align-items: center;
  width: 65%;
  height: 100%;
  margin: 0;
  padding: 0;

  @media ${props => props.theme.md} {
    width: 70%;
  }

  @media ${props => props.theme.sm} {
    width: 100%;
  }

  ul {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      list-style: none;
      height: 60%;
      margin: auto;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      @media ${props => props.theme.md} {
        height: 55%;
      }

      @media ${props => props.theme.sm} {
        height: 1.8rem;
      }

      .active {
        cursor: pointer;
        background: ${props => props.theme.libraBlue};
        color: white;
        height: 44%;
        text-decoration: underline;
        border-radius: ${props => props.theme.radius};

        @media ${props => props.theme.sm} {
          height: 1.8rem;
          border-radius: 2px;
        }
      }
    }
  }
`

const LinkStyles = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.libraBlue};
  font-weight: bold;
  height: 40%;
  padding: 0 1rem;

  transition: all ${props => props.theme.transitionDuration} linear;

  @media ${props => props.theme.md} {
    font-size: 1.4rem;
  }

  @media ${props => props.theme.sm} {
    font-size: 1rem;
    padding: 0 0.6rem;
    height: 75%;
  }

  &:hover {
    cursor: pointer;
    background: ${props => props.theme.libraBlue};
    color: white;
    height: 44%;
    border-radius: ${props => props.theme.radius};

    @media ${props => props.theme.sm} {
      font-size: 1rem;
      padding: 0 0.6rem;
      height: 75%;
    }
  }
`

const Header = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mii-api.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <HeaderStyles>
      <Div>
        <Logo to="/">
          <Image fluid={fluid} className="logo" />
        </Logo>
        <Nav>
          <ul>
            <li>
              <LinkStyles activeClassName="active" to="/">
                Introduction
              </LinkStyles>
            </li>
            <li>
              <LinkStyles activeClassName="active" to="/query">
                Query API
              </LinkStyles>
            </li>
            <li>
              <LinkStyles activeClassName="active" to="/mutation">
                Mutation API
              </LinkStyles>
            </li>
            <li>
              <LinkStyles activeClassName="active" to="/subscription">
                Subscription API
              </LinkStyles>
            </li>
          </ul>
        </Nav>
      </Div>
    </HeaderStyles>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
