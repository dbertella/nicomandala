import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Instagram } from "./Instagram"
import { Etsy } from "./Etsy"

const H2 = styled.h2`
  margin: 0;
`
const Wrapper = styled.header`
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  color: #669253;
  margin-top: 0.5rem;
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  line-height: 1;
  * {
    margin-right: 0.5rem;
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mandala.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Flex as={Link} to="/">
        <Img fixed={data.file.childImageSharp.fixed} />
        <H2>nico.mandala</H2>
      </Flex>
      <Flex>
        <a
          className="navbar-item"
          href="https://www.instagram.com/nico.mandala/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
        <a
          className="navbar-item"
          href="https://www.etsy.com/it/shop/nicoproduction"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Etsy
            style={{
              position: "relative",
              top: "2px",
            }}
          />
        </a>
      </Flex>
    </Wrapper>
  )
}

export default Header
