import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import StoreProvider from './hooks/GlobalContext'
import PlayCountProvider from './hooks/PlayCountContext'

ReactDOM.render(
  <PlayCountProvider>
    <StoreProvider>
      <App />
    </StoreProvider>
  </PlayCountProvider>,
  document.getElementById('root')
)

reportWebVitals()
