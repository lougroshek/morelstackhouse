import React from "react"
import { Link } from "gatsby"
import { Row, Col } from 'reactstrap';
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/atoms/seo"
import HomeBannerImage from "../components/atoms/homeBannerImage"

const IndexPage = ({ location }) => {

  const getPageData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          subtitle
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
  `)

  const pageMeta = {
    title: 'Home',
    type: 'home',
    location: location,
    description: null,
    keywords: `ortho-bionomy, orthbionomy, bodywork, body work, massage, spine, back, gentle, healing, instruction, morel, stackhouse`,
    image: null,
    url: `${location.href}`
  }

  return (
    <Layout location={ pageMeta.location } pageType={ pageMeta.type }>
      <SEO meta={{ ...pageMeta }} />
      <Row className="jumbotron align-items-center">
        <HomeBannerImage/>
        <Col>
          <h1>{getPageData.site.siteMetadata.title}</h1>
          <p>{getPageData.site.siteMetadata.subtitle}</p>
        </Col>
      </Row>
      <Row className="testimonials">
        <Col className="col-testimonials"
          xs={{ size: 10, offset: 1 }}
          md={{ size: 5, offset: 1 }}
          lg={{ size: 5, offset: 1 }}
          xl={{ size: 5, offset: 1 }}
          >
          <div className="testimonial">
            <div className="testimonial-text">
              <p>Morel... accomplished more in one hour than very competent but less knowledgeable physical therapists had been able to accomplish in 10 sessions!</p>
              <p className="testimonial-name">~ Roy M.</p>
            </div>
          </div>
          <p className="testimonial-prompt">Contact Morel for Ortho-Bionomy® sessions.</p>
          <Link to="/contact/" className="btn btn-primary">CONTACT MOREL</Link>
        </Col>
        <Col
          className="col-testimonials"
          xs={{ size: 10, offset: 1 }}
          md={{ size: 5, offset: 0 }}
          lg={{ size: 5, offset: 0 }}
          xl={{ size: 5, offset: 0 }}>
          <div className="testimonial">
            <div className="testimonial-text">
              <p>Morel... knew my potential and wouldn't settle for anything less. She held me to a standard that I still try to achieve. I credit Morel with... my success as an Ortho-Bionomy® practitioner.</p>
              <p className="testimonial-name">~ Lynne Marotta, LMT, Registered Instructor of Ortho-Bionomy®</p>
            </div>
          </div>
          <p className="testimonial-prompt">Enroll in Morel's Ortho-Bionomy® courses.</p>
          <Link to="/courses/" className="btn btn-primary">SEE COURSES</Link>
        </Col>
      </Row>
    </Layout>
  )
}

export default IndexPage
