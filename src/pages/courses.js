import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CoursesListBlock from "./../components/molecules/coursesListBlock"

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
          contact_email
          contact_name
          contact_phone
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
        }
        html
        excerpt(format: PLAIN, pruneLength: 500)
      }
    }
  }
}
`;

const EventsPage = () => {
  const pageTitle = "Courses";

  return (

    <Layout>
      <SEO title={pageTitle} />
      <h3>Courses with Morel</h3>

      <h3>Upcoming Courses</h3>
      <StaticQuery
        query={getEventsData}
        render={data => (
          <div className="events-list">
            {data.allMarkdownRemark.edges
              // Filter all entries *ahead of* today.
              .filter(({node}) => { return new Date(node.frontmatter.start_date) >= new Date() })
              .map(({node}) => (
                <CoursesListBlock node={node} key={node.id} />
            ))}
          </div>
        )}
      />

      <h3>Past Courses</h3>
      <StaticQuery
        query={getEventsData}
        render={data => (
          <div className="events-list">
            {data.allMarkdownRemark.edges
              // Filter all entries *past* today.
              .filter(({node}) => { return new Date(node.frontmatter.start_date) < new Date() })
              .map(({node}) => (
                <CoursesListBlock node={node} key={node.id} />
            ))}
          </div>
        )}
      />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default EventsPage
