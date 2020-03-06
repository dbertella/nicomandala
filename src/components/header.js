import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Instagram } from "./Instagram"

const H2 = styled.h2`
  margin: 0;
`
const Wrapper = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #669253;
  background: #fdf9f0;
  padding: 1.5rem;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  * {
    margin-right: 1rem;
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "icon.jpg" }) {
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
      <Logo>
        <Img fixed={data.file.childImageSharp.fixed} />
        <H2>nico.mandala</H2>
      </Logo>
      <a
        className="navbar-item"
        href="https://www.instagram.com/nico.mandala/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="icon">
          <Instagram />
        </span>
      </a>
    </Wrapper>
  )
}

export default Header