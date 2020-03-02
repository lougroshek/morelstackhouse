import React from "react"
import { Link } from "gatsby"
import { Row, Col } from 'reactstrap'

import Layout from "../components/layout"
import SEO from "../components/atoms/seo"

const NotFoundPage = ({ location }) => {

  const pageMeta = {
    title: '404: Not found',
    type: '404',
    location: location,
    description: null,
    keywords: `ortho-bionomy, orthbionomy, bodywork, body work, massage, spine, back, gentle, healing, instruction, morel, stackhouse, 404`,
    image: null,
    url: `${location.href}`
  }

  return (
    <Layout location={ pageMeta.location } pageType={ pageMeta.type }>
      <SEO meta={{ ...pageMeta }} />
        <Row className="heading">
          <Col
            xs={{ size: 10, offset: 1 }}
            sm={{ size: 6, offset: 3 }}>
            <h1>And things were going so good... </h1>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ size: 10, offset: 1 }}
            sm={{ size: 6, offset: 3 }}>
            <p>You just hit a route that doesn&#39;t exist. Sorry about that. If you like, you can let us know so we can fix it!</p>
            <Link to="/contact/" className="btn btn-primary">CONTACT MOREL</Link>
          </Col>
        </Row>
    </Layout>
  )
}

export default NotFoundPage
