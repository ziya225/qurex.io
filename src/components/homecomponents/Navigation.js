import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import navHeartImage from '../../assets/svgs/nav-heart.svg';
import navNew from '../../assets/svgs/nav-new.svg';

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img src="https://quer.vercel.app/static/media/mainlogo.56893844f2e5355be159f95257b797af.svg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto col-lg-8 justify-content-around">
              <Nav.Link href="#features" className='text-dark'>Sexual Issues We Treat</Nav.Link>
              <Nav.Link href="#pricing" className='text-dark'>Our Sexologists</Nav.Link>
              <Nav.Link href="#pricing" className='text-dark'>Sexual Health Guide</Nav.Link>
              <Nav.Link href="#pricing" className='text-dark'>Sex-ed (for kids)</Nav.Link>
            </Nav>
            <Nav className="col-lg-4 justify-end">
              <Nav.Link href="#deets" className='mr-8 d-flex items-center position-relative'>
                <span>
                  <img src={navHeartImage}/>
                </span>
                <button
                  type="button"
                  class="btn bg-light position-relative btn-sm"
                >
                  SHI
                </button>
                <span className='position-absolute start-100 translate-middle h-5 w-5'>
                  <img src={navNew} className='h-6 w-6'/>
                </span>
              </Nav.Link>
              <Nav.Link href="" className='mr-8'>
                <img src="https://quer.vercel.app/static/media/robosv.66b65f9b07ca6cb5cd17a903bd35ca53.svg" />
              </Nav.Link>
              <Nav.Link className=''>
                <Link to="/login">
                  <Button variant="outline-primary rounded-pill px-3">
                    Login
                  </Button>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
