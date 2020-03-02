/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ meta }) {
  const { site, placeholderImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            siteUrl
            author
            socialMediaImage
            facebookAppID
          }
        }
        placeholderImage: file(relativePath: {eq: "morel-stackhouse.jpg"}) {
          id
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    `
  )

  const description = meta.description ? meta.description : site.siteMetadata.description;
  const title = meta.title ? `${meta.title} | ${site.siteMetadata.title}` : site.siteMetadata.title;
  const lang = meta.lang ? meta.lang : `en`;
  const url = meta.location.href ? meta.location.href : site.siteMetadata.siteUrl;
  const keywords = meta.keywords ? meta.keywords : site.siteMetadata.keywords;
  const image = meta.image ? `${site.siteMetadata.siteUrl}${meta.image}` : `${site.siteMetadata.siteUrl}${placeholderImage.childImageSharp.original.src}`;


  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${title}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `fb:app_id`,
          content: site.siteMetadata.facebookAppID,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  meta: {}
}

SEO.propTypes = {
  meta: PropTypes.object.isRequired
}

export default SEO
