import React from 'react'
import { Navbar, Container, NavbarToggler, Collapse, Nav } from 'reactstrap'
import { Link } from 'react-router-dom'
import LoginModal from "../components/auth/LoginModal"

const AppNavbar = () => {
  return (
    <div>
      <Navbar color="dark" expand="lg" className="sticky-top"> 
        <Container>
          <Link to="/" className="text-white text-decoration-none">
            MERN stack example
          </Link>
        </Container> 
        <NavbarToggler />
        <Collapse isOpen={true} navbar>
          <Nav className="ml-auto d-flex justify-content-around" navbar>
            {false ? (<h1 className="text-white">authLink</h1>) : (<LoginModal/>)}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default AppNavbar;