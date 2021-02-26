import React, { useCallback, useEffect, useState } from 'react'
import { Navbar, Container, NavbarToggler, Collapse, Nav } from 'reactstrap'
import { Link } from 'react-router-dom'
import LoginModal from "../components/auth/LoginModal"
import { useDispatch, useSelector } from 'react-redux'
import { LOGOUT_REQUEST } from '../redux/types'
const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {isAuthenticated, user, userRole} = useSelector((state) => state.auth)
  console.log(userRole, "UserRole")
  
  const dispatch = useDispatch()
  
  const onLogout = useCallback(() => {
    dispatch({
      type: LOGOUT_REQUEST
    })
  }, [dispatch])

  useEffect(() => {
    setIsOpen(false)
  },[user])

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <Navbar color="dark" expand="lg" className="sticky-top"> 
        <Container>
          <Link to="/" className="text-white text-decoration-none">
            MERN stack example
          </Link>
        </Container> 
        <NavbarToggler />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto d-flex justify-content-around" navbar>
            {isAuthenticated ? (<h1 className="text-white">authLink</h1>) : (<LoginModal/>)}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default AppNavbar;