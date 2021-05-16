import { createContext, useState } from 'react'

export const PlayCountContext = createContext(null)

const PlayCountProvider = ({ children }) => {
  const [total, setTotal] = useState(0)
  const [success, setSuccess] = useState(0)
  const [fail, setFail] = useState(0)

  const store = {
    total,
    setTotal,
    success,
    setSuccess,
    fail,
    setFail,
  }
  return (
    <PlayCountContext.Provider value={store}>
      {children}
    </PlayCountContext.Provider>
  )
}

export default PlayCountProvider
