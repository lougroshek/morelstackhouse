import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CoursesListBlock from "./../components/molecules/coursesListBlock/coursesListBlock"

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
  const pageTitle = "Courses";

  return (
    <Layout location={ location }>
      <SEO title={pageTitle} />
      <h3>Courses with Morel</h3>

      <StaticQuery
        query={getEventsData}
        render={data => (
          <>
            <div className="events-list">
              {data.allMarkdownRemark.edges
                // Filter all entries *ahead of* today.
                .filter(({node}) => { return new Date(node.frontmatter.start_date) >= new Date() })
                .map(({node}) => (
                  <CoursesListBlock node={node} key={node.id} />
              ))}
            </div>
            <h3>Past Courses</h3>
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
