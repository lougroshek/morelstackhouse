import React from 'react';

import SEO from "../components/seo"
import Layout from "../components/layout"

export default ({ location }) => (
  <Layout location={ location }>
    <SEO title="Free Lectures" />
    <div>
      <h2>Hello from free lectures page</h2>
    </div>
  </Layout>
)
