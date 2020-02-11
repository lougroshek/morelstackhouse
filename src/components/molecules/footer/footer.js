import React from 'react';
import PropTypes from "prop-types"

import "./footer.scss"

const Footer = ({data}) => {
  return (
    <footer>
      <p>Copyright © Morel Stackhouse {data.site.siteMetadata.copyrightDate} onwards.</p>
      <p>Ortho-Bionomy® is a registered trademark of the Society of Ortho-Bionomy International, Inc. and is used with permission.</p>
      <p>Society of Ortho-Bionomy International® is a registered trademark that indicates membership in the Society, and it is used with permission.</p>
      <p>This site was <a href={data.site.siteMetadata.authorLink}>built ♥ with love</a>.</p>
    </footer>
  )
}

Footer.propTypes = {
  data: PropTypes.object,
}

Footer.defaultProps = {
  data: {},
}

export default Footer
