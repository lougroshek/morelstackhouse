import React from 'react'
import { Row, Col } from 'reactstrap';
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/atoms/seo"
import GoogleMapLink from "./../components/atoms/googleMapLink"
import GoogleMapComponent from "./../components/atoms/googleMapComponent"
import ContactForm from './../components/molecules/contactForm/contactForm'

const ContactPage = ({ location }) => {

  const getLocationData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          contactLocation
          siteUrl
        }
      }
    }
  `)

  const pageMeta = {
    title: 'Contact',
    type: 'contact',
    location: location,
    description: null,
    keywords: `ortho-bionomy, orthbionomy, bodywork, body work, massage, spine, back, gentle, healing, instruction, contact, morel, stackhouse`,
    image: null,
    url: `${location.href}`
  }

  return (
    <Layout location={ pageMeta.location } pageType={ pageMeta.type }>
      <SEO meta={{ ...pageMeta }} />
      <Row className="heading">
        <Col
          xs={{ size: 12, offset: 0 }}
          sm={{ size: 10, offset: 1 }}
          >
          <h1>{pageMeta.title}</h1>
        </Col>
      </Row>
        <div className="row">
          <div className="col-form col-12 col-sm-10 offset-sm-1 col-lg-5">
            <p>Use this form to contact Morel for information about sessions or instruction. </p>
            <ContactForm />
          </div>
          <div className="col-address col-12 col-sm-10 offset-sm-1 col-lg-5 offset-lg-0">
            <span className="address">Lakeside Street</span>
            <span className="address">Madison, WI, 53711
              <GoogleMapLink geojson={getLocationData.site.siteMetadata.contactLocation} />
            </span>
            <GoogleMapComponent input={getLocationData.site.siteMetadata.contactLocation} />
          </div>
        </div>
    </Layout>
  )
}

export default ContactPage
