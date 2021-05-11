import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Correct from './components/Correct'
import LogIn from './components/LogIn'

import About from './components/About'
import Wrong from './components/Wrong'
import Profile from './components/Profile'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container className='foto'>
          <Route path='/' component={Home} exact />
          <Route path='/correct' component={Correct} />
          <Route path='/wrong' component={Wrong} />
          <Route path='/about' component={About} />
          <Route path='/login' component={LogIn} />
          <Route path='/profile' component={Profile} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
