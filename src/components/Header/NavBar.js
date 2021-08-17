import React from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import Pricing from '../../pages/Pricing';
import Support from '../../pages/Support';
import Profile from '../../pages/Profile';
import ProjectEdit from '../../pages/ProjectEdit';
import MenuData from '../Sidebar/MenuData';
const NavBar = () => {
  return (
    <Navbar expand="lg" className="topBar">
      <Container>
        <div className="navbar">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
            <a href="#"></a>
            <Nav className="justify-content-end w-100" activeKey="/home">
              <Nav.Item>
                <Link to="/Profile" className="nav-link">
                  Profile
                </Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Link to="/Workspace" className="nav-link">
                  Workspace
                </Link>
              </Nav.Item> */}
              {/* <Nav.Item>
                <Link to="/Pricing" className="nav-link">
                  Pricing
                </Link>
              </Nav.Item> */}
              <Nav.Item>
                <Link to="/Support" className="nav-link">
                  Support
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/logout" className="nav-link">
                  Log Out
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link" to="/Pricing">
                  <button className="btn upgrade">Upgrade</button>
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
