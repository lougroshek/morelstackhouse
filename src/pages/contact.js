import React from 'react'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import GoogleMapLink from "./../components/atoms/googleMapLink"
import GoogleMapComponent from "./../components/atoms/googleMapComponent"
import ContactForm from './../components/molecules/contactForm/contactForm'

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
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1">
            <h1>Contact Morel</h1>
            <p>Contact Morel for information about sessions or instruction. </p>            
            <ContactForm />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-lg-5">
            <p>form goes here</p>
          </div>
          <div className="col-12 col-sm-10 offset-sm-1 col-lg-5 offset-lg-0">
            <h4>Location</h4>
            <span className="address">Lakeside Street</span>
            <span className="address">Madison, WI, 53711</span>
            <StaticQuery
              query={getPageData}
              render={data => (
                <>
                <GoogleMapLink geojson={data.site.siteMetadata.contactLocation} />
                <GoogleMapComponent input={data.site.siteMetadata.contactLocation} />
                </>
              )}/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
