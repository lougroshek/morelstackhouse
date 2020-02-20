import React from "react"
// import { Link } from "gatsby"
import { Jumbotron, Button, Row, Col } from 'reactstrap';
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const getPageData = graphql`
  {
    site {
      siteMetadata {
        title
        copyrightDate
        authorLink
        contactLocation
        description
        menu {
          path
          title
        }
      }
    }
  }
`

const IndexPage = ({ location }) => (
  <Layout location={location} pageType="home">
    <SEO title="Home" />
    <StaticQuery
      query={getPageData}
      render={data => (
         <Row className="row align-items-center jumbotron">
           <Col>
           <h1>{data.site.siteMetadata.title}</h1>
           <p>Ortho-Bionomy Practice and Instruction</p>
           </Col>
         </Row>
      )}
    />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
