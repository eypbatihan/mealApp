import React, { useState } from "react";
import { Nav, Logo, Hamburger, Menu, MenuLink } from "./NavbarStyle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/">
        <i>{"<Batıhan>"}</i>
        <span>Meal</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink as="a" target="_blank" href="https://github.com/eypbatihan">
          Github
        </MenuLink>
        <MenuLink to="/login">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
