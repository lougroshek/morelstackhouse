import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const getCourseData = graphql`
{
  allFile {
    edges {
      node {
        relativePath,
        absolutePath
      }
    }
  }
}
`;

const EventPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>A single course</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default EventPage
