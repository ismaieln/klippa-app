import { BrowserRouter as Router, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Result from './components/Result'
import LogIn from './components/LogIn'
import About from './components/About'
import Profile from './components/Profile'
import Register from './components/Register'
import Play from './components/Play'
import StopPlay from './components/StopPlay'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <div className='home'>
          <Route path='/' component={Home} exact />
          <Route path='/play' component={Play} />
          <Route path='/result' component={Result} />
          <Route path='/about' component={About} />
          <Route path='/login' component={LogIn} />
          <Route path='/register' component={Register} />
          <Route path='/profile' component={Profile} />
          <Route path='/StopPlay' component={StopPlay} />
        </div>
      </main>
      <Footer />
    </Router>
  )
}

export default App
