import React from 'react';
import {  Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'


const NavbarComponent= () =>{
  return (
    <div className=''>
      <Navbar bg="" expand="lg" className=''>
      <Navbar.Brand href="/">
        <img className='logo' src='https://drive.google.com/uc?export=view&id=17pfbOu6rCq31VgLfHRBb3-kX3COiR-NG' alt='image'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className=''>
        <Nav className="ms-auto">
          <Nav.Link className='navbar-item' href="/phu-kien" style={{fontSize: "22px", color : "#ffffff"}}>Phụ kiện phòng tắm</Nav.Link>
          <Nav.Link className='navbar-item' href="/mac-ao" style={{fontSize: "22px", color : "#ffffff"}}>Mắc áo INOX </Nav.Link>
          <Nav.Link className='navbar-item' href="/gioi-thieu" style={{fontSize: "22px", color : "#ffffff"}}>Giới thiệu </Nav.Link>
          
          
          {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>*/}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div>
    </div>
    </div>
      
    
  );
}
export default NavbarComponent;