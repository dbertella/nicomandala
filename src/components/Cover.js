import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

export const Cover = styled(Img)`
  max-width: 100%;
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
          fixed(width: 1200, height: 848) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Flex>
      <Cover fixed={data.file.childImageSharp.fixed} />
    </Flex>
  )
}

export default CoverImg
