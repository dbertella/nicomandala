import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

export const FullWidth = styled(Img)`
  max-width: 100%;
  width: 1200px;
  margin: 0 auto;
`

const FullWidthImg = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "copertina-mandala-per-sito.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <FullWidth fluid={data.file.childImageSharp.fluid} />
}

export default FullWidthImg
