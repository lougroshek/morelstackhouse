import React from 'react'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import GoogleMapLink from "./../components/atoms/googleMapLink"
import GoogleMapComponent from "./../components/atoms/googleMapComponent"
import ContactForm from './../components/molecules/contactForm/contactForm'

const getLocationData = graphql`
  {
    site {
      siteMetadata {
        contactLocation
      }
    }
  }
`

const ContactPage = ({ location }) => {
  return (
    <Layout location={ location } pageType="contact">
      <SEO title="Contact" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1">
            <h1>Contact</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-form col-12 col-sm-10 offset-sm-1 col-lg-5">
            <h4>Contact Morel</h4>
            <p>Use this form to contact Morel for information about sessions or instruction. </p>
            <ContactForm />
          </div>
          <div className="col-address col-12 col-sm-10 offset-sm-1 col-lg-5 offset-lg-0">
            <StaticQuery
              query={getLocationData}
              render={data => (
                <>
                  <h4>Location</h4>
                  <span className="address">Lakeside Street</span>
                  <span className="address">Madison, WI, 53711
                    <GoogleMapLink geojson={data.site.siteMetadata.contactLocation} />
                  </span>
                  <GoogleMapComponent input={data.site.siteMetadata.contactLocation} />
                </>
              )}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
