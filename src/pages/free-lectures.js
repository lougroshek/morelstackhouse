import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Row, Col } from 'reactstrap';

import Layout from "../components/layout"
import SEO from "../components/atoms/seo"
import CoursesListBlock from "./../components/molecules/coursesListBlock/coursesListBlock"

const getEventsData = graphql`
{
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "event"}, tag: {eq: "free-lecture"}, start_date: {ne: "null"}}}, sort: {fields: [frontmatter___start_date], order: ASC}) {
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

  const pageMeta = {
    title: 'Free Lectures',
    type: 'free-lectures',
    location: location,
    description: null,
    keywords: `ortho-bionomy, orthbionomy, bodywork, body work, massage, spine, back, gentle, healing, instruction, free-lectures, morel, stackhouse`,
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
          <h1>FREE LECTURES</h1>
        </Col>
      </Row>
      <StaticQuery
        query={getEventsData}
        render={data => (
          <>
            <div className="events-list events-upcoming">
              {data.allMarkdownRemark.edges
                // Filter all entries *ahead of* today.
                .filter(({node}) => { return new Date(node.frontmatter.start_date) >= new Date() })
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
