import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'


const NavbarComponent = () => {
  return (
    <div className=''>
      <div className='bg-transparent text-center'>

      </div>
      <Navbar bg="" expand="lg" className=''>
        <Navbar.Brand href="/">
          <img className='logo spin' src='https://drive.google.com/uc?export=view&id=1974wNLh3kTFj2nMIsn6HP-sOv26QIcQ9' alt='image' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse bg="light" id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="ms-auto">
            <Nav.Link className='brighten-item navbar-item text-uppercase' href="/phu-kien-phong-tam" style={{ color: "#ffffff" }}>Phụ kiện phòng tắm</Nav.Link>
            <Nav.Link className='brighten-item navbar-item text-uppercase' href="/mac-ao" style={{ color: "#ffffff" }}>Mắc áo INOX </Nav.Link>
            <Nav.Link className='brighten-item navbar-item text-uppercase' href="/gioi-thieu" style={{ color: "#ffffff" }}>Giới thiệu </Nav.Link>
            <Nav.Link className='brighten-item navbar-item text-uppercase' href="/tin-tuc" style={{ color: "#ffffff" }}>Tin tức </Nav.Link>
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