import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useLocation } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  let location = useLocation()
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
            <Nav className='ml-auto' activeKey={location.pathname}>
              <LinkContainer to='/answer'>
                <Nav.Link>
                  <i className='fas fa-calculator'></i> Answers
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/contact'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Login
                </Nav.Link>
              </LinkContainer>
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
