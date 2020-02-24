import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SessionsFirstImage from "../components/atoms/sessionsFirstImage"
import SessionsSecondImage from "../components/atoms/sessionsSecondImage"

const SessionsPage = ({ location }) => {

  return (
    <Layout location={ location } pageType="sessions">
      <SEO title="Sessions" />
      <Row className="heading">
        <Col 
          xs={{ size: 12, offset: 0 }}
          sm={{ size: 10, offset: 1 }}
          md={{ size: 8, offset: 2 }}
          lg={{ size: 6, offset: 3 }}>
          <h1>Sessions with Morel</h1>
        </Col>
        <Col 
          xs={{ size: 12, offset: 0 }}
          sm={{ size: 10, offset: 1 }}
          md={{ size: 8, offset: 2 }}
          lg={{ size: 6, offset: 3 }}>
          <div className="testimonial">
            <div className="testimonial-text">
              <p>The only person who knows what your body feels like is you. You have the best view, the inside view. I have the outside view. If we communicate and work together, we have the complete view.</p>
              <p className="testimonial-name">~ Morel Stackhouse</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col className="col-image"
          xs={{ size: 12, offset: 0 }}
          sm={{ size: 10, offset: 1 }}
          lg={{ size: 5, offset: 1 }}
          xl={{ size: 5, offset: 1 }}>
          <SessionsFirstImage/>
        </Col>
        <Col className="col-testimonials align-items-center"
          xs={{ size: 12, offset: 0 }}
          sm={{ size: 10, offset: 1 }}
          md={{ size: 8, offset: 2 }}
          lg={{ size: 5, offset: 0 }}>
          <div className="testimonial">
            <div className="testimonial-text">
              <p>I think of Morel as a 'knee-whisperer'!  I started seeing her after my first knee replacement when physical therapy wasn't enough. Morel addressed underlying trauma, helping my body accept a new knee. I started seeing her right away after my other knee was replaced. I truly believe her early intervention made recovery from the second surgery much easier. I highly recommend Morel as part of a knee surgery recovery plan!</p>
              <p className="testimonial-name">~ Patty Schultz</p>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-text">
              <p>When I first saw Morel, I had been having a problem with my foot that had prevented me from enjoying standing or walking for over a year. I had seen various specialists and no one had helped. In 90 minutes she made it 90% better, and it's staying better, too. If you have any sort of structural problem with your body, I think it's worth it for you to check her out.</p>
              <p className="testimonial-name">~ Dmitri Bilgere</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="session-desc">
        <Col 
          xs={{ size: 12, offset: 0 }}
          sm={{ size: 10, offset: 1 }}
          className="heading">
          <h2>What to Expect</h2>
        </Col>
        <Col 
          xs={{ size: 12, offset: 0, order: 2 }}
          sm={{ size: 10, offset: 1 }}
          lg={{ size: 5, offset: 1 }}
          xl={{ size: 5, offset: 1 }} className="desc">
        <p>Plan on 75-90 minutes for your visit. This will allow time to discuss your needs and concerns prior to lying down and receiving your session. Wear comfortable, loose fitting clothing to allow full range of motion. Ortho-Bionomy® sessions are designed around your individual needs. Morel will rely on your verbal feedback to find the techniques which best facilitate your body’s return to natural alignment. Morel may suggest self care techniques you can use at home. These self-care techniques further aid in relieving pain, restoring function, and rebalancing the body.</p>
        <p>Morel Stackhouse is a Registered Advanced Practitioner and Instructor with the Society of Ortho-Bionomy International®. She began her study of Ortho-Bionomy in 1984 and was fortunate to have studied with Arthur Lincoln Pauls D.O., the system's Founder. Morel has been teaching throughout the US since 1989. She enjoys introducing this bodywork system to others and working with students to develop their skill and confidence as they grow with the work. She is approved by the National Certification Board for Therapeutic Massage and Bodywork (NCBTMB) as a Continuing Education Approved Provider.</p>
        <Link to="/contact/" className="btn btn-primary">Contact Morel</Link>
        <br/>
        <Link to="/free-lectures/" className="btn btn-primary">Attend a Free Lecture</Link>
      </Col>
      <Col className="session-desc-img"
        xs={{ size: 12, offset: 0, order: 1 }}
        sm={{ size: 10, offset: 1, order: 1 }}
        md={{ size: 10, offset: 1, order: 1 }}
        lg={{ size: 5, offset: 0, order: 2 }}
        xl={{ size: 5, offset: 0 }}>
        <SessionsSecondImage/>
      </Col>
      </Row>
    </Layout>
  )
}

export default SessionsPage
