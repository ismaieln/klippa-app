import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GlobalContext } from './hooks/GlobalContext'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Correct from './components/Correct'
import LogIn from './components/LogIn'

import About from './components/About'
import Wrong from './components/Wrong'

const App = () => {
  const [answOne, setAnswOne] = useState('')
  const [answTwo, setAnswTwo] = useState('')
  const [answThree, setAnswThree] = useState('')
  const [answFour, setAnswFour] = useState('')
  const [answFive, setAnswFive] = useState('')
  const [flag, setFlag] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitDisable, setSubmitDisable] = useState(false)

  return (
    <Router>
      <Header />
      <main>
        <Container className='foto'>
          <GlobalContext.Provider
            value={{
              answOne,
              setAnswOne,
              answTwo,
              setAnswTwo,
              answThree,
              setAnswThree,
              answFour,
              setAnswFour,
              answFive,
              setAnswFive,
              email,
              setEmail,
              password,
              setPassword,
              flag,
              setFlag,
              submitDisable,
              setSubmitDisable,
            }}
          >
            <Route path='/' component={Home} exact />
            <Route path='/correct' component={Correct} />
            <Route path='/wrong' component={Wrong} />
            <Route path='/about' component={About} />
            <Route path='/login' component={LogIn} />
          </GlobalContext.Provider>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
