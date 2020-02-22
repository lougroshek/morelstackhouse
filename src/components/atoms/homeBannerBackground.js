import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

// <h1>{siteTitle}</h1>
// <p>{siteSubtitle}</p>

const BackgroundSection = ({className, siteTitle, siteSubtitle}) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "home-banner.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="div"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}>
          <h1>test</h1>
          <h2>test</h2>
        </BackgroundImage>
      )
    }}
  />
)

const HomeBannerBackground = styled(BackgroundSection)`
  /* width: 100%; */
  height: 90vh !important;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;

  backdrop-filter: grayscale(90);
`

export default HomeBannerBackground
