import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


export default function Header() {
  return (
    <div>
      <Navbar expand='lg' bg='light'>
        <Navbar.Brand href='#home'>
          <img
            src={'https://i.picsum.photos/id/65/200/200.jpg'}
            widtth='60'
            height='60'
            className='d-inline-block align-top'
            alt='logo'
          />
        </Navbar.Brand>
        <br />
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/' className='btn1'>
              Home
            </Nav.Link>
            <Nav.Link href='gallery' className='btn1'>
              Gallery
            </Nav.Link>
            <Nav.Link href='member' className='btn1'>
              Members
            </Nav.Link>
            <Nav.Link href='contact' className='btn1'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
