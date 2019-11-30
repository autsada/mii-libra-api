import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"

import Header from "./header"
import SEO from "./seo"

const theme = {
  playgroundReq: "#0F202D",
  playgroundRes: "#172B3A",
  playgroundFont: "#27B16F",
  libraBlue: "#42318C",
  teal: "#42318C",
  darkTeal: "#00796B",
  lightTeal: "#42318C",
  black: "#212121",
  grey: "#757575",
  lightGrey: "#BDBDBD",
  backgroundGrey: "#eceff1",
  hoverBackground: "#cfd8dc",
  white: "#FFFFFF",
  red: "#FF5252",
  darkRed: "#D32F2F",
  orange: "#FF5722",
  blue: "#466ab5",
  lightBlue: "#1976d2",
  darkBlue: "#3b5998",
  sm: "(max-width: 600px)",
  md: "(max-width: 960px)",
  lg: "(max-width: 1025px)",
  xl: "(min-width: 1026px)",
  width: "1000px",
  fontFamily: "Segoe UI, Verdana, sans-serif",
  transitionDuration: "0.35s",
  radius: "4px",
}

const GlobalStyle = createGlobalStyle`
   html {
      box-sizing: border-box;
      font-size: 10px;
   }
   *, *:before, *:after {
      box-sizing: inherit;
   }
   body {
      padding: 0;
      margin: 0;
      font-size: 1.6rem;
      font-family: ${props => props.theme.fontFamily};
      font-weight: 400;
      color: ${props => props.theme.black};

      @media ${props => props.theme.sm} {
        font-size: 1rem;
      }
   }
`

const Page = styled.div`
  margin: 0;
  padding: 0;
  margin-bottom: 6rem;

  @media ${props => props.theme.lg} {
    margin-bottom: 4rem;
  }

  @media ${props => props.theme.sm} {
    width: 100%;
    margin-bottom: 3rem;
  }
`

const Content = styled.main`
  width: 70%;
  margin: 0 auto;

  @media ${props => props.theme.lg} {
    width: 80%;
    height: auto;
  }

  @media ${props => props.theme.md} {
    width: 85%;
    height: auto;
  }

  @media ${props => props.theme.sm} {
    width: 95%;
    height: auto;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Page>
        <SEO title={data.site.siteMetadata.title} />
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>{children}</Content>
      </Page>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
