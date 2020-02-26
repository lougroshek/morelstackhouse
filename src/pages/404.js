import React from "react"
import { Link } from "gatsby"
import { Row, Col } from 'reactstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ location }) => (
  <Layout location={ location } pageType="404">
    <SEO title="404: Not found" />
      <Row className="header">
        <Col
          xs={{ size: 12, offset: 0 }}
          sm={{ size: 10, offset: 1 }}>
          <h1>And things were going so good... </h1>
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ size: 12, offset: 0 }}
          sm={{ size: 10, offset: 1 }}>
          <p>You just hit a route that doesn&#39;t exist. Sorry about that. If you like, you can let us know so we can fix it!</p>
          <Link to="/contact/" className="btn btn-primary">CONTACT MOREL</Link>
        </Col>
      </Row>
  </Layout>
)

export default NotFoundPage
