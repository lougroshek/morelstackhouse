import React from "react"
// import { Link } from "gatsby"
import { Jumbotron, Button } from 'reactstrap';
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
  <Layout location={location}>
    <SEO title="Home" />
    <StaticQuery
      query={getPageData}
      render={data => (
       <Jumbotron>
         <div className="v-center">
           <h1>{data.site.siteMetadata.title}</h1>
           <p>Ortho-Bionomy Practice and Instruction</p>
         </div>
       </Jumbotron>
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
