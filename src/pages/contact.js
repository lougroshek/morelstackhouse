import React from 'react'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import GoogleMapLink from "./../components/atoms/googleMapLink"
import GoogleMapComponent from "./../components/atoms/googleMapComponent"

const getPageData = graphql`
  {
    site {
      siteMetadata {
        title
        copyrightDate
        authorLink
        contactLocation
        menu {
          path
          title
        }
      }
    }
  }
`

const ContactPage = ({ location }) => {
  return (
    <Layout location={ location }>
      <SEO title="Contact" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>

        <StaticQuery
          query={getPageData}
          render={data => (
            <>
            <GoogleMapLink geojson={data.site.siteMetadata.contactLocation} />
            <GoogleMapComponent input={data.site.siteMetadata.contactLocation} />
            </>
          )}
        />
    </Layout>
  )
}

export default ContactPage
