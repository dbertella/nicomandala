import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FullWidthImg from "../components/FullWidthImg"
import { Instagram } from "../components/Instagram"
import { Etsy } from "../components/Etsy"
import { Download } from "../components/Download"

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  * + * {
    margin-left: 2.5rem;
  }
`

const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  text-decoration: none;
  font-family: "Amatic SC";
  font-weight: 700;
  font-size: 1.5rem;
  * + * {
    margin-left: 0.5rem;
  }
`

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <FullWidthImg />
      <ButtonWrapper>
        <ExternalLink
          href="https://www.instagram.com/nico.mandala"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
          <span>@nico.mandala</span>
        </ExternalLink>
        <ExternalLink
          href="https://www.etsy.com/it/shop/nicoproduction"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Etsy />
          <span>Sostieni il progetto</span>
        </ExternalLink>
        <ExternalLink
          as={Link}
          to="/mandala-da-scaricare"
        >
          <Download />
          <span>Mandala da colorare</span>
        </ExternalLink>
      </ButtonWrapper>
    </Layout>
  )
}
