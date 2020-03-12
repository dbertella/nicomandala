import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CoverImg from "../components/Cover"
import { Instagram } from "../components/Instagram"
import { Etsy } from "../components/Etsy"
import { Download } from "../components/Download"
import pdf from "../images/mandala-da-scaricare.pdf"
import { OutboundLink, trackCustomEvent } from "gatsby-plugin-google-analytics"

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  * + * {
    margin-left: 2.5rem;
  }
`

const ExternalLink = styled(OutboundLink)`
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

const PdfButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  color: #669253;
`

const printPdf = e => {
  e.preventDefault()
  trackCustomEvent({
    // string - required - The object that was interacted with (e.g.video)
    category: "Print button",
    // string - required - Type of interaction (e.g. 'play')
    action: "Click",
    // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
    label: "Il pdf è stato scaricato",
    // number - optional - Numeric value associated with the event. (e.g. A product ID)
    value: 10,
  })
  const w = window.open(pdf)
  w.print()
}

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <CoverImg />
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
        <ExternalLink as={PdfButton} onClick={printPdf}>
          <Download />
          <span>Mandala da colorare</span>
        </ExternalLink>
      </ButtonWrapper>
    </Layout>
  )
}
