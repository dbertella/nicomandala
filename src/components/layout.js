/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "./layout.css"

const Page = styled.div`
  padding: 0 1.0875rem 1.45rem;
`

const Footer = styled.footer`
  margin-top: 5rem;
  text-align: center;
`

const Layout = ({ children }) => {
  return (
    <>
      <Page>
        <main>{children}</main>
        <Footer>© {new Date().getFullYear()}, nico.mandala</Footer>
      </Page>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
