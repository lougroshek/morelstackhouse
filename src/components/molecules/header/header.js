import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import "./header.scss"

const Header = ({ siteTitle, menu, location }) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const headerHeight = 89
  const maxWidth = 768
  let fullLogo = true

  const logoSizeHandler = () => {
    if (window.pageYOffset > headerHeight || window.innerWidth < maxWidth) {
      console.log('scrolled beyond header height')
      fullLogo = false;
      const el = document.querySelector('header')
      el.classList.remove('full-logo')
    } else {
      fullLogo = true;
      const el = document.querySelector('header')
      el.classList.add('full-logo')
    }
    console.log('fullLogo', fullLogo)
  }

  ['scroll', 'resize'].forEach(function(e) {
    window.addEventListener(e, logoSizeHandler);
  });

  menu.forEach((item, index) => {
    if (item.path === location.pathname) {
      item.active = true
    } else {
      item.active = false
    }
  })

  return (
    <header className={(!!fullLogo ? 'full-logo' : '')}>
      <Navbar color="light" light expand="md" fixed="top">
        <NavbarBrand href="/">
          <span className="initial">M</span>
          <span className="rest">OREL</span>
          <span className="splitter"></span>
          <span className="initial">S</span>
          <span className="rest">TACKHOUSE</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {menu.map((item, index) => (
              <NavItem key={`nav_link_${index}`}>
                <NavLink href={item.path} className={item.active ? `active` : null}>{item.title}</NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  menu: PropTypes.array
}

Header.defaultProps = {
  siteTitle: ``,
  menu: {
    title: `Home`,
    path: `/`
  }
}

export default Header
