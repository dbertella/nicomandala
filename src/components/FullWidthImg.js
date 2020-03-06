import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

export const FullWidth = styled(Img)`
  width: 100%;
  margin: 0;
`

const FullWidthImg = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "cover.png" }) {
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
