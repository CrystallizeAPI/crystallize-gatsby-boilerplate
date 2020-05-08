import React from "react"
import { Link } from "gatsby"

// import { IconLogo } from "ui"

import { Outer, Nav, Logo, NavList, NavListItem } from "./styles"

const Header = ({ headerItems }) => {
  return (
    <Outer>
      <Link to="/">
        <Logo>
           <img src="/icons/logo.svg" alt="Ørn forlag" width="45" height="45" />
        </Logo>
      </Link>
      <Nav>
        <NavList>
          {headerItems?.map(headerItem => (
            <NavListItem key={headerItem.path}>
              <Link to={headerItem.path}>{headerItem.name}</Link>
            </NavListItem>
          ))}
        </NavList>
      </Nav>
    </Outer>
  )
}

export default Header
