import React from 'react';
import logo from "./images/porao-logo.png";
import "./NavBar.css";
import grid from "./images/grid.png";
import cart from "./images/Add to cart.png";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';

const NavBar = () => {
  return (
    <div className="header-nav">
      <Navbar className="header" bg="light" expand="lg">
      <Navbar.Brand href="#home"><img className="porao-logo" src={logo} alt=""/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#"><img className="grid-image" src={grid} alt=""/></Nav.Link>
          <NavDropdown className="drop-item" title="Assignment Categories" id="basic-nav-dropdown">
          <NavDropdown.Item className='dropdown-title' href="#action/3.1">All Category </NavDropdown.Item>
          <NavDropdown.Item className='dropdown-title' href="#action/3.2">High Value Assignment</NavDropdown.Item>
          <NavDropdown.Item className='dropdown-title' href="#action/3.3">Low Value Assignment</NavDropdown.Item>
          <NavDropdown.Item className='dropdown-title' href="#action/3.4">Short Time Assignment</NavDropdown.Item>
          <NavDropdown.Item className='dropdown-title' href="#action/3.4">Long Time Assignment</NavDropdown.Item>
          <NavDropdown.Item className='dropdown-title' href="#action/3.4">Featured Assignment</NavDropdown.Item>
          <NavDropdown.Item className='dropdown-title' href="#action/3.4">New Arrival Assignment</NavDropdown.Item>
          </NavDropdown>
          <div className="header_mid">
            <SearchIcon className ="header_inputbutton" />
            <input type="text" placeholder="Search & Find solution of your assignment" className="search-input"/>
          </div>
        </Nav>
        <div className="row right-header">
            <div className="header-end">
                <img className="cart-image" src={cart} alt=""/>
            </div>
            <div className="header-end">
                <a className="btn-header" href=""> Sign up </a>
            </div>
            <div className="header-end">
                <a className="btn-header" href=""> Log in </a>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>  
    </div>
    );
};

export default NavBar;