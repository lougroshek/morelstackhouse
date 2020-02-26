import React from 'react'
import { Row, Col } from 'reactstrap';
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
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
      <Row className="heading">
        <Col
          xs={{ size: 12, offset: 0 }}
          sm={{ size: 10, offset: 1 }}
          >
          <h1>Contact</h1>
        </Col>
      </Row>
        <div className="row">
          <div className="col-form col-12 col-sm-10 offset-sm-1 col-lg-5">
            <p>Use this form to contact Morel for information about sessions or instruction. </p>
            <ContactForm />
          </div>
          <div className="col-address col-12 col-sm-10 offset-sm-1 col-lg-5 offset-lg-0">
            <StaticQuery
              query={getLocationData}
              render={data => (
                <>
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
    </Layout>
  )
}

export default ContactPage
