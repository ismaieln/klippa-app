import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Correct from './components/Correct'

import { GlobalContext } from './hooks/GlobalContext'
import { Container } from 'react-bootstrap'
import About from './components/About'
import Wrong from './components/Wrong'

const App = () => {
  const [answOne, setAnswOne] = useState('')
  const [answTwo, setAnswTwo] = useState('')
  const [answThree, setAnswThree] = useState('')
  const [answFour, setAnswFour] = useState('')
  const [answFive, setAnswFive] = useState('')
  const [flag, setFlag] = useState(false)

  return (
    <Router>
      <Header />
      <main>
        <Container>
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
              flag,
              setFlag,
            }}
          >
            <Route path='/' component={Home} exact />
            <Route path='/correct' component={Correct} />
            <Route path='/wrong' component={Wrong} />
            <Route path='/about' component={About} />
          </GlobalContext.Provider>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
