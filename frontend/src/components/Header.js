import React, { useContext } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { GlobalContext } from '../hooks/GlobalContext'

const Header = () => {
  const { user, setUser } = useContext(GlobalContext)

  const logoutHandler = () => {
    localStorage.removeItem('userInfo')
    setUser('')
  }

  return (
    <header>
      <Navbar
        className='shadow rounded'
        expand='lg'
        collapseOnSelect
        bg='dark'
        variant='dark'
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img
                src='/Head.png'
                width='80'
                className='align-top rounded'
                alt='brain'
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            id='basic-navbar-nav'
            className='justify-content-end'
          >
            <Nav className='ml-auto'>
              {user ? (
                <NavDropdown title={user.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Login
                  </Nav.Link>
                </LinkContainer>
              )}

              <LinkContainer to='/about'>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
