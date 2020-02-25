import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Row, Col, Button } from 'reactstrap';
import { MdKeyboardArrowDown } from "react-icons/md";

import Layout from "../components/layout"
import SEO from "../components/seo"
import CoursesListBlock from "./../components/molecules/coursesListBlock/coursesListBlock"
import CoursesTopImage from "../components/atoms/coursesTopImage"

const getEventsData = graphql`
{
  allMarkdownRemark(
    filter: {frontmatter: {type: {eq: "event"}, start_date: {ne: null}}},
    sort: {
      fields: [frontmatter___start_date]
      order: ASC
    }
  ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          city
          start_date
          end_date
          event_image
          location_title
          instructor
          instructor_bio
          instructor_image
          state
          street_address
          tag
          title
          type
          zip
          end_time
          start_time
          geojson
          excerpt
        }
        html
        excerpt(format: PLAIN, pruneLength: 500)
        fields {
          slug
        }
      }
    }
  }
}
`;

const EventsPage = ({ location }) => {

  const scrollToCourses = () => {
    // const goTo = document.querySelector()
    const element = document.getElementById('course_list_target');
    const position = element.getBoundingClientRect();
    const y = position.top;
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    })
  }

  const pageTitle = "Courses";

  return (
    <Layout location={ location } pageType="courses">
      <SEO title={pageTitle} />
        <Row className="heading">
          <Col 
            xs={{ size: 12, offset: 0 }}
            sm={{ size: 10, offset: 1 }}
            >
            <h1>Courses with Morel</h1>
          </Col>
          <Col 
            xs={{ size: 12, offset: 0 }}
            sm={{ size: 4, offset: 3 }}
            md={{ size: 5, offset: 7 }}
            lg={{ size: 3, offset: 8 }}
            className="scroll-to-courses">
            <Button color="secondary" onClick={scrollToCourses}>Scroll to Courses
              <MdKeyboardArrowDown/>
            </Button>{' '}
          </Col>
        </Row>
        <Row className="testimonials">
          <Col className="col-image"
            xs={{ size: 12, offset: 0 }}
            sm={{ size: 10, offset: 1 }}
            >
            <CoursesTopImage/>
          </Col>
          <Col className="col-desc align-items-center"
            xs={{ size: 12, offset: 0 }}
            sm={{ size: 10, offset: 1 }}
            md={{ size: 5, offset: 1 }}
            lg={{ size: 5, offset: 1 }}>
            <div className="testimonial">
              <div className="testimonial-text">
                <p>Morel is the foundation of the New York City Ortho-Bionomy® community. She has consistently been generous with us with her time, energy, and expertise since she first came to teach a class in 1995. Her clarity and attention to detail in this work is unparalleled. We think that her influence is what has helped us to create our “NYC style”. We have grown together over the decades in a synergistic relationship for everyone’s benefit. Morel holds a high standard, has been willing to up her game, been supportive of our individual explorations, which in turn has motivated us to be our best.</p>
                <p className="testimonial-name">~ Rosa M. Rodriguez, LMT, MFA, Registered Advanced Instructor of Ortho-Bionomy®</p>
              </div>
            </div>
          </Col>
          <Col className="col-desc align-items-center"
            xs={{ size: 12, offset: 0 }}
            sm={{ size: 10, offset: 1 }}
            md={{ size: 5, offset: 0 }}
            lg={{ size: 5, offset: 0 }}>
            <div className="testimonial">
              <div className="testimonial-text">
                <p>Whether by fate, mission, or design, Morel Stackhouse is the catalyst, the Mother if you will, of the New York Ortho-Bionomy Community. She was the first Instructor to realize its untapped potential, nurture it, bind it together and bring the right resources and people to it. She kept coming to us sharing her knowledge, wisdom, and example, long before we realized we were a community and long before it was profitable to do so. She has been Teacher, Mentor, Advisor, Cheerleader, and Friend to us all and my life has been enriched in more ways than I can measure because of having taken my first Ortho-Bionomy class with her and having her as a role model as Practitioner and Instructor of Ortho- Bionomy.</p>
                <p className="testimonial-name">~ Gary Lee Williams, LMT, Registered Instructor of Ortho-Bionomy®</p>
              </div>
            </div>
          </Col>
        </Row>
      <StaticQuery
        query={getEventsData}
        render={data => (
          <>
            <Row>
              <Col
                xs={{ size: 12, offset: 0 }}
                sm={{ size: 10, offset: 1 }}
                >
                <h2 name="course_list_target" id="course_list_target">Upcoming Courses</h2>
              </Col>
            </Row>
            <div className="events-list">
              {data.allMarkdownRemark.edges
                // Filter all entries *ahead of* today.
                .filter(({node}) => { return new Date(node.frontmatter.start_date) >= new Date() })
                .map(({node}) => (
                  <CoursesListBlock node={node} key={node.id} />
              ))}
            </div>
            <Row>
              <Col 
                xs={{ size: 12, offset: 0 }}
                sm={{ size: 10, offset: 1 }}
                >
                <h2>Past Courses</h2>
              </Col>
            </Row>
            <div className="events-list">
              {data.allMarkdownRemark.edges
                // Filter all entries *past* today.
                .filter(({node}) => { return new Date(node.frontmatter.start_date) < new Date() })
                .map(({node}) => (
                  <CoursesListBlock node={node} key={node.id} />
              ))}
            </div>
          </>
        )}
      />
    </Layout>
  )
}

export default EventsPage
