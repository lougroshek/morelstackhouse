import React, { useState } from 'react';
import PropTypes from "prop-types"
import { IonIcon, addIcons } from 'react-svg-ionicons'
// import bundle from 'react-svg-ionicons/bundles/generic'
import mail from 'react-svg-ionicons/icons/mail'
import call from 'react-svg-ionicons/icons/call'
import facebook from 'react-svg-ionicons/icons/logo-facebook'
import arrowUp from 'react-svg-ionicons/icons/arrow-up'
// import "./../../theme/bootstrap.scss"
// import "./footer.scss"

const bundle = {
  mail,
  call,
  facebook,
  arrowUp
}

const Footer = ({data}) => {
  addIcons(bundle)

  const [isScrolled, setIsScrolled] = useState(false)
  const headerHeight = 89
  const maxWidth = 768

  const logoSizeHandler = () => {
    if (window.pageYOffset > headerHeight || window.innerWidth < maxWidth) {
      // console.log('scrolled beyond header height')
      setIsScrolled(false)
    } else {
      setIsScrolled(true)
    }
  }

  ['scroll', 'resize', 'load'].forEach(function(e) {
    window.addEventListener(e, logoSizeHandler);
  });

  return (
    <footer className={`container-fluid pt-10 scroll-status-${isScrolled ? 'top' : 'scrolled'}`}>
      <div className="row">
        <div className="col col-icons col-10 offset-1 order-sm-2 col-lg-6 offset-lg-0">
          <a href="mailto:morel@morelstackhouse.com" alt="Email Morel">
            <IonIcon name="mail" size="large" color="white" strokeWidth={1} />
          </a>
          <a href="https://www.facebook.com/morel.stackhouse" alt="Follow Morel on Facebook">
            <IonIcon name="facebook" size="large" color="white" strokeWidth={3} />
          </a>
        </div>
        <div className="col col-legal col-sm-10 offset-1 order-sm-3 col-lg-5 offset-lg-1 order-lg-1">
          <p>Copyright © Morel Stackhouse {data.site.siteMetadata.copyrightDate} onwards.</p>
          <p>Ortho-Bionomy® is a registered trademark of the Society of Ortho-Bionomy International, Inc. and is used with permission.</p>
          <p>Society of Ortho-Bionomy International® is a registered trademark that indicates membership in the Society, and it is used with permission.</p>
          <p>This site was <a href={data.site.siteMetadata.authorLink}>built ♥ with love</a>.</p>
        </div>
        <div className="up-button">
          <IonIcon name="arrowUp" size="large" color="gray" strokeWidth={3} />
          <span>SCROLL TO TOP</span>
        </div>
      </div>
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
