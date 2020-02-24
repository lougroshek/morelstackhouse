import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import OrthoBionomyImage from "../components/atoms/orthoBionomyImage"

export default ({ location }) => (
  <Layout location={ location } pageType="ortho-bionomy">
    <SEO title="What is Ortho-Bionomy®?" />
      <Row className="heading">
        <Col 
          xs={{ size: 12, offset: 0 }}
          sm={{ size: 10, offset: 1 }}
          md={{ size: 8, offset: 2 }}
          lg={{ size: 6, offset: 3 }}>
          <h1>What is Ortho-Bionomy®?</h1>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col className="col-image"
          xs={{ size: 12, offset: 0 }}
          sm={{ size: 10, offset: 1 }}
          lg={{ size: 5, offset: 1 }}
          xl={{ size: 5, offset: 1 }}>
          <OrthoBionomyImage />
        </Col>
        <Col className="col-desc align-items-center"
          xs={{ size: 12, offset: 0 }}
          sm={{ size: 10, offset: 1 }}
          md={{ size: 8, offset: 2 }}
          lg={{ size: 5, offset: 0 }}>
          <p>Ortho-Bionomy® is a gentle, osteopathically-based form of body therapy that is highly effective for chronic stress, injuries, pain, or problems associated with postural and structural imbalances. The practitioner uses gentle movements and positions of the body to facilitate the change of stress and pain. Strong focus is placed on the comfort of the individual and no forceful manipulations are used. Ortho-Bionomy® helps to alleviate both acute and chronic pain by reducing chronic muscle tension, soothing the joints, increasing flexibility, improving circulation, and relaxing the entire body. Ortho-Bionomy helps people break the cycle of pain—without creating more pain. It is effective for recovering from injuries, surgery, and stress.</p>
          <p>Ortho-Bionomy® was developed by Arthur Lincoln Pauls, a British osteopath, who wanted to find a way to help people that honored the body's inherent wisdom. From his experience as a Judo instructor and his training as an osteopath, Pauls discovered that working with the body, instead of opposing it, allowed the body to return to balance without the use of force. Dr. Pauls began teaching this work in the United States in 1976, and taught Ortho-Bionomy® extensively throughout Europe and the US until his death in 1996.</p>
          <Link to="/contact/" className="btn btn-primary">Contact Morel</Link>
          <br/>
          <Link to="/free-lectures/" className="btn btn-primary">Attend a Free Lecture</Link>
        </Col>
      </Row>
  </Layout>
)
