/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import FullWidthImg from "./FullWidthImg"
import "./layout.css"

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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <FullWidthImg />
      <div
        style={{
          margin: `3rem auto`,
          maxWidth: 1400,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, 📷{" "}
          <a
            href="https://www.instagram.com/nico.mandala"
            target="_blank"
            rel="noopener noreferrer"
          >
            @nico.mandala
          </a>{" "}
          | 💰{" "}
          <a
            href="https://www.etsy.com/it/shop/nicoproduction"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sostieni il progetto
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
