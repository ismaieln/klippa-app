import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

import Home from './components/Home'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' component={Home} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
