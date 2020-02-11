/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./molecules/header/header"
import Footer from "./molecules/footer/footer"
import Scripts from "./molecules/scripts"
import "./theme/bootstrap.scss"
import "./layout.scss"

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          copyrightDate
          authorLink
          menu {
            path
            title
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} location={location} menu={data.site.siteMetadata.menu} />
      <main>{children}</main>
      <Footer data={data} />
      <Scripts />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
