import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Result from './components/Result'
import LogIn from './components/LogIn'
import About from './components/About'
import Profile from './components/Profile'
import Register from './components/Register'
import Play from './components/Play'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container className='home'>
          <Route path='/' component={Home} exact />
          <Route path='/play' component={Play} />
          <Route path='/result' component={Result} />
          <Route path='/about' component={About} />
          <Route path='/login' component={LogIn} />
          <Route path='/register' component={Register} />
          <Route path='/profile' component={Profile} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
