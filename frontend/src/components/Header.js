import React, { useContext } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { GlobalContext } from '../hooks/GlobalContext'
import { PlayCountContext } from '../hooks/PlayCountContext'
import fetchQuestions from '../Utils/fetchQuestions'

const Header = () => {
  const { user, setUser, setFirst, setSecond, setThird, setFourth, setFifth,setExpressions, } =
    useContext(GlobalContext)
  const { setTotal, setSuccess, setFail } = useContext(PlayCountContext)

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
  }

  const getQuestions = async () => {
    const q = await fetchQuestions()
    setExpressions(q)
    setFirst('')
    setSecond('')
    setThird('')
    setFourth('')
    setFifth('')
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
