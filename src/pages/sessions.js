import React from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ location }) => (
  <Layout location={ location }>
    <SEO title="Sessions" />
    <div>
      <h2>Hello from sessions page</h2>
    </div>
  </Layout>
)
