import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

export const Cover = styled(Img)`
  width: 550px;
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
`

const CoverImg = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "copertina-mandala-per-sito.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Flex>
      <Cover fluid={data.file.childImageSharp.fluid} />
    </Flex>
  )
}

export default CoverImg
