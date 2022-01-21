import React, { useContext } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { GlobalContext } from '../hooks/GlobalContext'
import { PlayCountContext } from '../hooks/PlayCountContext'

const Header = () => {
  const {
    user,
    setUser,
    setFirst,
    setSecond,
    setThird,
    setFourth,
    setFifth,
    setExpressions,
  } = useContext(GlobalContext)
  const { setTotal, setSuccess, setFail, setPlayCount } =
    useContext(PlayCountContext)

  const logoutHandler = () => {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('qInfo')
    localStorage.removeItem('playHistory')
    localStorage.removeItem('answers')
    setUser('')
    setFirst('')
    setSecond('')
    setThird('')
    setFourth('')
    setFifth('')
    setTotal('')
    setSuccess('')
    setFail('')
    setExpressions([])
    setPlayCount(0)
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
            <Nav className='ml-auto' align='end'>
              {user && (
                <LinkContainer to='/play'>
                  <Nav.Link>Play</Nav.Link>
                </LinkContainer>
              )}
              {user ? (
                <NavDropdown title={user.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/'>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link className='blink'>
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
