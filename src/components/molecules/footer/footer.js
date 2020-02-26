import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types"
import { MdKeyboardArrowUp } from "react-icons/md";
import { FiFacebook, FiMail } from "react-icons/fi";
import smoothscroll from 'smoothscroll-polyfill';

const Footer = ({data}) => {
  // addIcons(bundle)

  const [isScrolled, setIsScrolled] = useState(true)
  const headerHeight = 89

  const scrollToTop = () => {
    // console.log('scrollToTop');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const logoSizeHandler = () => {
    if (window.pageYOffset > headerHeight) {
      // console.log('scrolled beyond header height')
      setIsScrolled(false)
    } else {
      setIsScrolled(true)
    }
  }

  useEffect(() => {
    // Kick off the polyfill!
    smoothscroll.polyfill();
    // Listen for window events to manage footer state.
    ['scroll', 'resize', 'load'].forEach(function(e) {
      window.addEventListener(e, logoSizeHandler);
    })
  })

  return (
    <footer className={`container-fluid pt-10 scroll-status-${isScrolled === true ? 'top' : 'scrolled'}`}>
      <div className="row">
        <div className="col col-icons col-10 offset-1 order-sm-2 col-lg-6 offset-lg-0">
          <a href="mailto:morel@morelstackhouse.com" alt="Email Morel">
            <FiMail />
          </a>
          <a href="https://www.facebook.com/morel.stackhouse" alt="Follow Morel on Facebook">
            <FiFacebook />
          </a>
        </div>
        <div className="col col-legal col-sm-10 offset-1 order-sm-3 col-lg-5 offset-lg-1 order-lg-1">
          <p>Copyright © Morel Stackhouse {data.site.siteMetadata.copyrightDate} onwards.</p>
          <p>Ortho-Bionomy® is a registered trademark of the Society of Ortho-Bionomy International, Inc. and is used with permission.</p>
          <p>Society of Ortho-Bionomy International® is a registered trademark that indicates membership in the Society, and it is used with permission.</p>
          <p>This site was <a href={data.site.siteMetadata.authorLink}>built ♥ with love</a>.</p>
        </div>
        <div role="button" tabIndex={0} className="up-button" onClick={scrollToTop} onKeyPress={scrollToTop}>
          <MdKeyboardArrowUp/>
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
